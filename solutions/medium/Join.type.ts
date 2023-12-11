/*
    Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.

    https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md
*/

import type { If } from "@easy/If.type";

import type { Extends } from "@/utils";

export type Join<
  T extends [...string[]],
  S extends string | number
> = T extends [...infer P extends string[], infer L extends string]
  ? If<Extends<P, []>, `${L}`, `${Join<P, S>}${S}${L}`>
  : "";

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>,
  Expect<Equal<Join<[], "u">, "">>
];
