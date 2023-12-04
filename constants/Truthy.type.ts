import type { ObjectKeyType } from "./ObjectKeyType.type";

export type Truphy =
  | string
  | number
  | bigint
  | true
  | [unknown, ...unknown[]]
  | Record<ObjectKeyType, unknown>;
