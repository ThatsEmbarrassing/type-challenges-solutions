/*
    Implement a generic _Readonly<T, K> which takes two type argument T and K.

    K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md
*/

type _Readonly<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Readonly<Pick<T, K>>;

// #=============================================

import type { Alike, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Alike<_Readonly<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<_Readonly<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<_Readonly<Todo2, "title" | "description">, Expected>>,
  Expect<Alike<_Readonly<Todo2, "description">, Expected>>
];

// @ts-expect-error
type error = _Readonly<Todo1, "title" | "invalid">;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

export {};
