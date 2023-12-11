/*
  Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.

  https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.md
*/

import type { If } from "@easy/If.type";

import type { RemoveFromArrayBy, ToArray } from "@/utils";

import type { IsNever } from "./IsNever.type";

export type Without<
  T extends [...unknown[]],
  U extends unknown | [...unknown[]]
> = ToArray<U> extends [...(infer P)[]]
  ? If<IsNever<P>, T, RemoveFromArrayBy<T, P>>
  : never;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];
