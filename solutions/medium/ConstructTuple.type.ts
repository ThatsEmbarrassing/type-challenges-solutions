/*
    Construct a tuple with a given length.

    https://github.com/type-challenges/type-challenges/blob/main/questions/07544-medium-construct-tuple/README.md
*/

import type { Length } from "@easy/Length.type";
import type { Push } from "@easy/Push.type";

export type ConstructTuple<
  T extends number,
  L extends unknown[] = []
> = Length<L> extends T ? L : ConstructTuple<T, Push<L, unknown>>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>["length"], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>["length"], 1000>>
];
