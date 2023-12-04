/*
    Implement TrimRight<T> which takes an exact string type and returns a new string with the whitespace ending removed.

    https://github.com/type-challenges/type-challenges/blob/main/questions/04803-medium-trim-right/README.md
*/

import { SpacedString } from "@/constants";

export type TrimRight<T extends string> = T extends `${infer P}${SpacedString}`
  ? TrimRight<P>
  : T;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TrimRight<"str">, "str">>,
  Expect<Equal<TrimRight<"str ">, "str">>,
  Expect<Equal<TrimRight<"str     ">, "str">>,
  Expect<Equal<TrimRight<"     str     ">, "     str">>,
  Expect<Equal<TrimRight<"   foo bar  \n\t ">, "   foo bar">>,
  Expect<Equal<TrimRight<"">, "">>,
  Expect<Equal<TrimRight<"\n\t ">, "">>
];
