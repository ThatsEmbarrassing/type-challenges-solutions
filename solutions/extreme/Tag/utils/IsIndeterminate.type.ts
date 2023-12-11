import type { IsNever } from "@medium/IsNever.type";

import type { IsAny } from "@hard/IsAny.type";

import type { IsEqual } from "@/utils";

export type IsIndeterminate<T> = true extends
  | IsAny<T>
  | IsNever<T>
  | IsEqual<T, unknown>
  ? true
  : false;
