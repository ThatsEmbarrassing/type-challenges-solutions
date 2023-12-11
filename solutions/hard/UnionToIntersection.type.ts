/*
    Implement the advanced util type UnionToIntersection<U>

    https://github.com/type-challenges/type-challenges/blob/main/questions/00055-hard-union-to-intersection/README.md
*/

import type { FunctionType } from "@/utils";

export type UnionToIntersection<T> = FunctionType<T> extends FunctionType<
  infer P
>
  ? P
  : never;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<UnionToIntersection<"foo" | 42 | true>, "foo" & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => "foo") | ((i: 42) => true)>,
      (() => "foo") & ((i: 42) => true)
    >
  >
];
