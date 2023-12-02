/*
    Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md
*/

export type Pop<T> = T extends readonly [...infer A, unknown] ? A : [];

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>
];
