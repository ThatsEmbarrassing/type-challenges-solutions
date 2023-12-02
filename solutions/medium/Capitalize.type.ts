/*
    Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md
*/

type _Capitalize<T extends string> = T extends `${infer F}${infer T}`
  ? `${Uppercase<F>}${T}`
  : T;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<_Capitalize<"foobar">, "Foobar">>,
  Expect<Equal<_Capitalize<"FOOBAR">, "FOOBAR">>,
  Expect<Equal<_Capitalize<"foo bar">, "Foo bar">>,
  Expect<Equal<_Capitalize<"">, "">>,
  Expect<Equal<_Capitalize<"a">, "A">>,
  Expect<Equal<_Capitalize<"b">, "B">>,
  Expect<Equal<_Capitalize<"c">, "C">>,
  Expect<Equal<_Capitalize<"d">, "D">>,
  Expect<Equal<_Capitalize<"e">, "E">>,
  Expect<Equal<_Capitalize<"f">, "F">>,
  Expect<Equal<_Capitalize<"g">, "G">>,
  Expect<Equal<_Capitalize<"h">, "H">>,
  Expect<Equal<_Capitalize<"i">, "I">>,
  Expect<Equal<_Capitalize<"j">, "J">>,
  Expect<Equal<_Capitalize<"k">, "K">>,
  Expect<Equal<_Capitalize<"l">, "L">>,
  Expect<Equal<_Capitalize<"m">, "M">>,
  Expect<Equal<_Capitalize<"n">, "N">>,
  Expect<Equal<_Capitalize<"o">, "O">>,
  Expect<Equal<_Capitalize<"p">, "P">>,
  Expect<Equal<_Capitalize<"q">, "Q">>,
  Expect<Equal<_Capitalize<"r">, "R">>,
  Expect<Equal<_Capitalize<"s">, "S">>,
  Expect<Equal<_Capitalize<"t">, "T">>,
  Expect<Equal<_Capitalize<"u">, "U">>,
  Expect<Equal<_Capitalize<"v">, "V">>,
  Expect<Equal<_Capitalize<"w">, "W">>,
  Expect<Equal<_Capitalize<"x">, "X">>,
  Expect<Equal<_Capitalize<"y">, "Y">>,
  Expect<Equal<_Capitalize<"z">, "Z">>
];

export {};
