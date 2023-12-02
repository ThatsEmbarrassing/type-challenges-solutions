/*
    Implement the generic version of Array.push.

    https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md
*/

export type Push<T extends [...unknown[]], K> = [...T, K];

// #=============================================

import type { Expect, Equal } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
  Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>
];
