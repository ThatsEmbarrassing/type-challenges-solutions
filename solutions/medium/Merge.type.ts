/*
    Merge two types into a new type. Keys of the second type overrides keys of the first type.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md
*/

export type Merge<T extends object, L extends object> = {
  [Key in keyof T | keyof L]: Key extends keyof L ? L[Key] : T[Key & keyof T];
};

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];
