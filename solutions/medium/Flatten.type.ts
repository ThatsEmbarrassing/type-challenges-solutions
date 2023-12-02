/*
    In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md
*/

import type { Concat } from "@easy/Concat.type";
import type { Unshift } from "@easy/Unshift.type";

type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? Concat<Flatten<F>, Flatten<R>>
    : Unshift<Flatten<R>, F>
  : [];

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>,
      [{ foo: "bar"; 2: 10 }, "foobar"]
    >
  >
];

// @ts-expect-error
type error = Flatten<"1">;

export {};
