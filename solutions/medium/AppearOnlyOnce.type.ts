/*
    Find the elements in the target array that appear only once.

    https://github.com/type-challenges/type-challenges/blob/main/questions/09898-medium-zhao-chu-mu-biao-shu-zu-zhong-zhi-chu-xian-guo-yi-ci-de-yuan-su/README.md
*/

import type { If } from "@easy/If.type";
import type { Includes } from "@easy/Includes.type";
import type { Push } from "@easy/Push.type";

import type { Without } from "./Without.type";
import type { IsNever } from "./IsNever.type";

type AppearOnlyOnce<
  T extends [...unknown[]],
  K extends [...unknown[]] = []
> = T extends [infer F, ...infer L]
  ? If<
      IsNever<F>,
      AppearOnlyOnce<L, K>,
      If<
        Includes<K, F>,
        AppearOnlyOnce<Without<L, F>, Without<K, F>>,
        AppearOnlyOnce<L, Push<K, F>>
      >
    >
  : K;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<AppearOnlyOnce<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<AppearOnlyOnce<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<AppearOnlyOnce<[1, 2, 3]>, [1, 2, 3]>>
];

export {};
