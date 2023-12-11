/*
    Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U

    https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md
*/

import type { Extends } from "@/utils";

type EndsWith<T extends string, S extends string> = Extends<T, `${string}${S}`>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<EndsWith<"abc", "bc">, true>>,
  Expect<Equal<EndsWith<"abc", "abc">, true>>,
  Expect<Equal<EndsWith<"abc", "d">, false>>,
  Expect<Equal<EndsWith<"abc", "ac">, false>>,
  Expect<Equal<EndsWith<"abc", "">, true>>,
  Expect<Equal<EndsWith<"abc", " ">, false>>
];

export {};
