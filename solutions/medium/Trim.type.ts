/*
    Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md
*/

import type { TrimLeft } from "./TrimLeft.type";
import type { TrimRight } from "./TrimRight.type";

type Trim<T extends string> = TrimLeft<TrimRight<T>>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];

export {};
