/*
    Implement permutation type that transforms union types into the array that includes permutations of unions.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md
*/

import type { Unshift } from "@easy/Unshift.type";
import type { IsNever } from "./IsNever.type";

export type Permutation<T, K = T> = IsNever<T> extends true
  ? []
  : K extends K
  ? Unshift<Permutation<Exclude<T, K>>, K>
  : never;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Permutation<"A">, ["A"]>>,
  Expect<
    Equal<
      Permutation<"A" | "B" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<
    Equal<
      Permutation<"B" | "A" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Permutation<never>, []>>
];
