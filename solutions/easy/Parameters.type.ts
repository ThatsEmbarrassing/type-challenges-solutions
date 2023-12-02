/*
    Implement the built-in Parameters generic without using it.

    https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md
*/

type _Parameters<T> = T extends (...args: infer P) => unknown ? P : never[];

// #=============================================

import type { Expect, Equal } from "@type-challenges/utils";

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: "A" }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<_Parameters<typeof foo>, [string, number]>>,
  Expect<Equal<_Parameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<_Parameters<typeof baz>, []>>
];

export {};
