/*
    Implement Replace<S, From, To> which replace the string From with To once in the given string S

    https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md
*/

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Start}${From}${infer End}`
  ? `${Start}${To}${End}`
  : S;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>
];

export {};
