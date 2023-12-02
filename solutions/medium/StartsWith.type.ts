/*
    Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U

    https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md
*/

export type StartsWith<
  T extends string,
  S extends string
> = T extends `${S}${string}` ? true : false;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<StartsWith<"abc", "ac">, false>>,
  Expect<Equal<StartsWith<"abc", "ab">, true>>,
  Expect<Equal<StartsWith<"abc", "abc">, true>>,
  Expect<Equal<StartsWith<"abc", "abcd">, false>>,
  Expect<Equal<StartsWith<"abc", "">, true>>,
  Expect<Equal<StartsWith<"abc", " ">, false>>,
  Expect<Equal<StartsWith<"", "">, true>>
];
