/*
    Implement the type version of Math.trunc, which takes string or number and returns the integer part of a number by removing any fractional digits.

    https://github.com/type-challenges/type-challenges/blob/main/questions/05140-medium-trunc/README.md
*/

import type { If } from "@easy/If.type";

import type { Extends } from "@/utils";

type Trunc<T extends string | number> = `${T}` extends `${infer F}.${number}`
  ? `${If<Extends<F, "">, 0, F>}`
  : `${T}`;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Trunc<0.1>, "0">>,
  Expect<Equal<Trunc<0.2>, "0">>,
  Expect<Equal<Trunc<1.234>, "1">>,
  Expect<Equal<Trunc<12.345>, "12">>,
  Expect<Equal<Trunc<-5.1>, "-5">>,
  Expect<Equal<Trunc<".3">, "0">>,
  Expect<Equal<Trunc<"1.234">, "1">>,
  Expect<Equal<Trunc<"-10.234">, "-10">>,
  Expect<Equal<Trunc<10>, "10">>
];

export {};
