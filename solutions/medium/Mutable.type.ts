/*
    Implement the generic Mutable<T> which makes all properties in T mutable (not readonly).

    https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md
*/

type Mutable<T extends object> = {
  -readonly [Key in keyof T]: T[Key];
};

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>
];

type errors = [
  // @ts-expect-error
  Mutable<"string">,
  // @ts-expect-error
  Mutable<0>
];

export {};
