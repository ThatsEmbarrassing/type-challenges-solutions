/*
    Implement a generic Last<T> that takes an Array T and returns its last element.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md
*/

export type Last<T> = T extends [...unknown[], infer L] ? L : unknown;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
