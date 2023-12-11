import type { Truphy } from "@/constants";

import type { Not } from "./Not.type";
import type { IsZero } from "./IsZero.type";

type IsTrythyNumber<T> = T extends number ? Not<IsZero<T>> : true;

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

export type IsTruthy<T> = T extends Truphy
  ? [IsTruphyValue<T>] extends [never]
    ? false
    : true
  : false;
