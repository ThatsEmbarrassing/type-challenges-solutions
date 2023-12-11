import type { If } from "@easy/If.type";

import type { RequiredByKeys } from "@medium/RequiredByKeys.type";
import type { TupleToUnion } from "@medium/TupleToUnion.type";

import type { Extends } from "@/utils";

import type {
  ArraySchema,
  BooleanSchema,
  NumberSchema,
  ObjectSchema,
  ObjectSchemaProperties,
  StringSchema,
} from "./schemas";

import type { BooleanHandler, NumberHandler, StringHandler } from "./handlers";

type ArrayItemsHandler<
  T extends ValidSchemes[],
  U extends unknown = never
> = T extends [infer F extends ValidSchemes, ...infer L extends ValidSchemes[]]
  ? ArrayItemsHandler<L, U | TypeHandler<F>[]>
  : U;

type ArrayHandler<T> = T extends ArraySchema<ValidSchemes>
  ? If<
      Extends<T["items"], ValidSchemes>,
      TypeHandler<T["items"]>[],
      If<
        Extends<T["items"], unknown[]>,
        If<
          Extends<T["items"], [ValidSchemes, ...ValidSchemes[]]>,
          ArrayItemsHandler<T["items"] & [ValidSchemes, ...ValidSchemes[]]>,
          never
        >,
        unknown[]
      >
    >
  : never;

type ObjectPropertiesHandler<
  T extends ObjectSchemaProperties<ValidSchemes>,
  K extends keyof T,
  AdditionalOptions extends boolean
> = RequiredByKeys<
  {
    [Key in keyof T]+?: TypeHandler<T[Key]>;
  },
  K
> &
  (AdditionalOptions extends true ? { [key: string]: unknown } : {});

type ObjectHandler<T> = T extends ObjectSchema<ValidSchemes>
  ? T["properties"] extends ObjectSchemaProperties<ValidSchemes>
    ? ObjectPropertiesHandler<
        T["properties"],
        T["required"] extends string[] ? TupleToUnion<T["required"]> : never,
        T["additionalProperties"] extends boolean
          ? T["additionalProperties"]
          : false
      >
    : Record<string, unknown>
  : never;

export type ValidSchemes =
  | BooleanSchema
  | NumberSchema
  | StringSchema
  | ArraySchema<ValidSchemes>
  | ObjectSchema<ValidSchemes>;

export type TypeHandler<T> =
  | ArrayHandler<T>
  | StringHandler<T>
  | NumberHandler<T>
  | BooleanHandler<T>
  | ObjectHandler<T>;
