/*
    Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md
*/

import type { If } from "@easy/If.type";

import type { IsTruthy } from "@/utils";

type AnyOf<T extends readonly [...unknown[]]> = T extends [infer F, ...infer L]
  ? If<IsTruthy<F>, true, AnyOf<L>>
  : false;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<
    Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[0, "", false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];

export {};
