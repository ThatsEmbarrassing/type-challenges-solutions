import type { BaseSchema } from "./BaseSchema.interface";

export type ArraySchemaItems<V extends BaseSchema> = V | V[];

export interface ArraySchema<V extends BaseSchema> extends BaseSchema {
  type: "array";
  items?: ArraySchemaItems<V>;
}
