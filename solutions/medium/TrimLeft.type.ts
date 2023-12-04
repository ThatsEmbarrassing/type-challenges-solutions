/*
    Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md
*/
import type { SpacedString } from "@/constants";

export type TrimLeft<T extends string> = T extends `${SpacedString}${infer P}`
  ? TrimLeft<P>
  : T;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];
