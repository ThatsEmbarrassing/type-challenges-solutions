/*
    Implement the built-in Pick<T, K> generic without using it.
    Constructs a type by picking the set of properties K from T.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
*/

type _Pick<T extends object, K extends keyof T> = {
  [Key in K]: T[Key];
};

// #=============================================

import type { Expect, Equal } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, _Pick<Todo, "title">>>,
  Expect<Equal<Expected2, _Pick<Todo, "title" | "completed">>>,

  // @ts-expect-error
  _Pick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

export {};
