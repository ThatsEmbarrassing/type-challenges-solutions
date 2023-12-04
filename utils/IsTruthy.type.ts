import type { Truphy } from "@/constants";

import type { ReverseBoolean } from "./ReverseBoolean.type";

type IsZero<T extends number> = T extends 0 ? true : false;

type IsTrythyNumber<T> = T extends number ? ReverseBoolean<IsZero<T>> : true;

type IsTrythyObject<T> = T extends object
  ? [keyof T] extends [never]
    ? false
    : true
  : true;

type IsTrythyString<T> = T extends string
  ? T extends ""
    ? false
    : true
  : true;

type IsTruphyValue<T> = IsTrythyNumber<T> &
  IsTrythyObject<T> &
  IsTrythyString<T>;

export type IsTruphy<T> = T extends Truphy
  ? [IsTruphyValue<T>] extends [never]
    ? false
    : true
  : false;
