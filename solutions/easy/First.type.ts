/*
    Implement a generic First<T> that takes an Array T and returns its first element's type.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
*/

type First<T extends unknown[]> = T extends [infer F, ...unknown[]] ? F : never;

// #=============================================

import type { Expect, Equal } from "@type-challenges/utils";

type a = First<[]>;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];
