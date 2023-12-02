/*
    Implement the String to Union type. Type take string argument. The output should be a union of input letters

    https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md
*/

export type StringToUnion<T extends string> = T extends `${infer F}${infer L}`
  ? F | StringToUnion<L>
  : never;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<StringToUnion<"">, never>>,
  Expect<Equal<StringToUnion<"t">, "t">>,
  Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<
    Equal<
      StringToUnion<"coronavirus">,
      "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
    >
  >
];
