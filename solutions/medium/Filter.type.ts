/*
    Implement the type Filter<T, Predicate> takes an Array T, primitive type or union primitive type Predicate and returns an Array include the elements of Predicate.

    https://github.com/type-challenges/type-challenges/blob/main/questions/18220-medium-filter/README.md
*/

export type Filter<T extends [...unknown[]], P> = T extends [
  infer F,
  ...infer L
]
  ? F extends P
    ? [F, ...Filter<L, P>]
    : Filter<L, P>
  : [];

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type Falsy = false | 0 | "" | null | undefined;

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>
];
