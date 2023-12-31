/*
    Please complete type Integer<T>, type T inherits from number, if T is an integer return it, otherwise return never.

    https://github.com/type-challenges/type-challenges/blob/main/questions/10969-medium-integer/README.md
*/

import type { If } from "@easy/If.type";

import type { Extends } from "@/utils";

type Integer<T extends number | bigint> = If<
  Extends<`${T}`, `${bigint}`>,
  T,
  never
>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

let x = 1;
let y = 1 as const;

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.0>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
];

export {};
