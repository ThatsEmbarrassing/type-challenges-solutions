import type { TupleToUnion } from "@medium/TupleToUnion.type";

import type { Enumerable } from "../types";

export type EnumerableHandler<
  T extends Partial<Enumerable<K>>,
  K
> = T["enum"] extends K[] ? TupleToUnion<T["enum"]> : K;
