/*
    Implement a generic RequiredByKeys<T,  K> which takes two type argument T and K.

    K specify the set of properties of T that should set to be required. When K is not provided, it should make all properties required just like the normal Required<T>.

    https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.md
*/

import type { Copy } from "@/utils";

type RequiredByKeys<T extends object, K extends keyof T = keyof T> = Copy<
  Omit<T, K> & Required<Pick<T, K>>
>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type a = RequiredByKeys<User, "name">;

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>
];

export {};
