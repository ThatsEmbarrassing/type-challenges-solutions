/*
    Create a type-safe string join utility

    https://github.com/type-challenges/type-challenges/blob/main/questions/00847-hard-string-join/README.md
*/

import type { Join } from "@medium/Join.type";

type JoinFunction = <D extends string>(
  delimeter: D
) => <T extends [...string[]]>(...args: T) => Join<T, D>;

declare const join: JoinFunction;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

// Edge cases
const noCharsOutput = join("-")();
const oneCharOutput = join("-")("a");
const noDelimiterOutput = join("")("a", "b", "c");

// Regular cases
const hyphenOutput = join("-")("a", "b", "c");
const hashOutput = join("#")("a", "b", "c");
const twoCharOutput = join("-")("a", "b");
const longOutput = join("-")("a", "b", "c", "d", "e", "f", "g", "h");

type cases = [
  Expect<Equal<typeof noCharsOutput, "">>,
  Expect<Equal<typeof oneCharOutput, "a">>,
  Expect<Equal<typeof noDelimiterOutput, "abc">>,
  Expect<Equal<typeof twoCharOutput, "a-b">>,
  Expect<Equal<typeof hyphenOutput, "a-b-c">>,
  Expect<Equal<typeof hashOutput, "a#b#c">>,
  Expect<Equal<typeof longOutput, "a-b-c-d-e-f-g-h">>
];
