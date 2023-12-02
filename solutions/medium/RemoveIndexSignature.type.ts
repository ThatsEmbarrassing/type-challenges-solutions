/*
    Implement RemoveIndexSignature<T> , exclude the index signature from object types.

    https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md
*/

import type { IsKey, ObjectKeyType } from "@/utils";
import type { If } from "@easy/If.type";

type ReturnOnlyKey<T extends ObjectKeyType> = If<IsKey<T>, T, never>;

type RemoveIndexSignature<T extends object> = {
  [Key in keyof T as ReturnOnlyKey<Key>]: T[Key];
};

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
  0: string;
};

const foobar = Symbol("foobar");
type FooBar = {
  [key: symbol]: any;
  [foobar](): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
];

export {};
