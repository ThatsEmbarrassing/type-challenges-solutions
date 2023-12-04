/*
    Implement the type version of Lodash.uniq, Unique takes an Array T, returns the Array T without repeated values.

    https://github.com/type-challenges/type-challenges/blob/main/questions/05360-medium-unique/README.md
*/

import type { Includes } from "@easy/Includes.type";

type Unique<
  T extends [...unknown[]],
  K extends [...unknown[]] = []
> = T extends [infer F, ...infer L]
  ? Includes<K, F> extends true
    ? Unique<L, K>
    : Unique<L, [...K, F]>
  : K;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type a = Unique<[1, 1, 2, 2, 3, 3]>;

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>,
  Expect<
    Equal<
      Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>,
      [string, number, 1, "a", 2, "b"]
    >
  >,
  Expect<
    Equal<
      Unique<[unknown, unknown, any, any, never, never]>,
      [unknown, any, never]
    >
  >
];

export {};
