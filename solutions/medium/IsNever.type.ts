/*
    Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.

    https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md
*/

import type { Extends } from "@/utils";

export type IsNever<T> = Extends<[T], [never]>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<"">, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>
];
