/*
    Implement the built-in Readonly<T> generic without using it.
    Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
*/

type _Readonly<T extends object> = {
  +readonly [Key in keyof T]: T[Key];
};

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<_Readonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

export {};
