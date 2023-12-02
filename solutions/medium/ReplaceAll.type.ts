/*
    Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

    https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md
*/

export type ReplaceAll<
  S extends string,
  F extends string,
  T extends string,
  P extends string = ""
> = F extends ""
  ? S
  : S extends `${infer Start}${F}${infer End}`
  ? ReplaceAll<End, F, T, `${P}${Start}${T}`>
  : `${P}${S}`;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type a = ReplaceAll<"foobarfoobar", "ob", "b">;

type cases = [
  Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
  Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
  Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
  Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
  Expect<Equal<ReplaceAll<"", "", "">, "">>
];
