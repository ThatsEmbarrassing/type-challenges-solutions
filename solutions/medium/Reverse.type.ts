/*
    Implement the type version of Array.reverse

    https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md
*/

export type Reverse<T extends unknown[]> = T extends [...infer K, infer P]
  ? [P, ...Reverse<K>]
  : T;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];

type errors = [
  // @ts-expect-error
  Reverse<"string">,
  // @ts-expect-error
  Reverse<{ key: "value" }>
];
