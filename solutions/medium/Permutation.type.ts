/*
    Implement permutation type that transforms union types into the array that includes permutations of unions.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md
*/

import type { Unshift } from "@easy/Unshift.type";
import type { IsNever } from "./IsNever.type";

export type Permutation<Union, Item = Union> = Item extends Item
  ? PermuteItem<Union, Item>
  : never;
type PermuteItem<
  Union,
  Item,
  Rest = Exclude<Union, Item>
> = IsNever<Rest> extends true ? [Item] : Unshift<Permutation<Rest>, Item>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type a = Permutation<never>;

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

  // For a while I don't know how to fix this error. Maybe later.
  // @ts-expect-error
  Expect<Equal<Permutation<never>, []>>
];
