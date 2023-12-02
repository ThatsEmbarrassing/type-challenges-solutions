/*
    Implement a generic PartialByKeys<T, K> which takes two type argument T and K.

    K specify the set of properties of T that should set to be optional. When K is not provided, it should make all properties optional just like the normal Partial<T>.

    https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md
*/

type PartialByKeys<T extends object, K extends keyof T = keyof T> = Omit<
  Omit<T, K> & Partial<Pick<T, K & keyof T>>,
  never
>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type a = PartialByKeys<User, "name">;

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>
];

export {};
