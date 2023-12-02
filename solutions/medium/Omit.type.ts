/*
    Implement the built-in Omit<T, K> generic without using it.

    Constructs a type by picking all properties from T and then removing K

    https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
*/

type _Omit<T extends object, K extends keyof T> = {
  [Key in Exclude<keyof T, K>]: T[Key];
};

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, _Omit<Todo, "description">>>,
  Expect<Equal<Expected2, _Omit<Todo, "description" | "completed">>>
];

// @ts-expect-error
type error = _Omit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

export {};
