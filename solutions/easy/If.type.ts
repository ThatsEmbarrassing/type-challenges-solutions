/*
    Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F. C is expected to be either true or false while T and F can be any type.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
*/

export type If<C extends boolean, T, F> = C extends true ? T : F;

// #=============================================

import type { Expect, Equal } from "@type-challenges/utils";

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;
