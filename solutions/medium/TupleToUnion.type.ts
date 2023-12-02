/*
    Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md
*/

type TupleToUnion<T> = T extends [...(infer E)[]] ? E : unknown;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

export {};
