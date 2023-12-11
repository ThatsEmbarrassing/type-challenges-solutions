/*
    If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

    https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md
*/

type OnFulfilled<T> = (arg: T) => unknown;

interface Thenable<T> {
  then: (onfulfilled: OnFulfilled<T>) => unknown;
}

type PromiseOrThenable<T> = Promise<T> | Thenable<T>;

type _Awaited<T> = T extends PromiseOrThenable<infer P> ? _Awaited<P> : T;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<_Awaited<X>, string>>,
  Expect<Equal<_Awaited<Y>, { field: number }>>,
  Expect<Equal<_Awaited<Z>, string | number>>,
  Expect<Equal<_Awaited<Z1>, string | boolean>>,
  Expect<Equal<_Awaited<T>, number>>
];

export {};
