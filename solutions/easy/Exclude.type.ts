/*
  Implement the built-in Exclude<T, U>

  https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md
*/

type _Exclude<T, K> = T extends K ? never : T;

// #=============================================

import type { Expect, Equal } from "@type-challenges/utils";

type cases = [
  Expect<Equal<_Exclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<_Exclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<_Exclude<string | number | (() => void), Function>, string | number>
  >
];

export {};
