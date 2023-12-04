/*
    Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string

    https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md
*/

type Absolute<T extends string | number | bigint> =
  `${T}` extends `-${infer N extends number | bigint}` ? `${N}` : `${T}`;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type a = Absolute<0>;

type cases = [
  Expect<Equal<Absolute<0>, "0">>,
  Expect<Equal<Absolute<-0>, "0">>,
  Expect<Equal<Absolute<10>, "10">>,
  Expect<Equal<Absolute<-5>, "5">>,
  Expect<Equal<Absolute<"0">, "0">>,
  Expect<Equal<Absolute<"-0">, "0">>,
  Expect<Equal<Absolute<"10">, "10">>,
  Expect<Equal<Absolute<"-5">, "5">>,
  Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
  Expect<Equal<Absolute<9_999n>, "9999">>
];

export {};
