/*
    Implement the built-in ReturnType<T> generic without using it.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md
*/

// It works fine only with any[], not with unknown[]. I'm wondering, why?
type _ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<string, _ReturnType<() => string>>>,
  Expect<Equal<123, _ReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, _ReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, _ReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => "foo", _ReturnType<() => () => "foo">>>,
  Expect<Equal<1 | 2, _ReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, _ReturnType<typeof fn1>>>
];

type ComplexObject = {
  a: [12, "foo"];
  bar: "hello";
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

export {};
