/*
  Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.

  https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md
*/

type PromiseAllType = <T extends any[]>(
  promises: readonly [...T]
) => Promise<{
  [Key in keyof T]: Awaited<T[Key]>;
}>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

declare const PromiseAll: PromiseAllType;

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>
];

export {};
