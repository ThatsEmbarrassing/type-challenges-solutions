/*
    Implement the type version of Array.shift

    https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.md
*/

type Shift<T extends [...unknown[]]> = T extends [unknown, ...infer L] ? L : T;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  // @ts-expect-error
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>
];

export {};
