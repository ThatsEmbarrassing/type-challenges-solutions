import type { Push } from "@/solutions/easy/Push.type";

/*
    For given function type Fn, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument, A as the second, and will produce function type G which will be the same as Fn but with appended argument A as a last one.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md
*/

type AppendArgument<T extends Function, K> = T extends (
  ...args: infer P
) => infer R
  ? (...args: Push<P, K>) => R
  : never;

// #=============================================

import type { Expect, Equal } from "@type-challenges/utils";

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>
];

export {};
