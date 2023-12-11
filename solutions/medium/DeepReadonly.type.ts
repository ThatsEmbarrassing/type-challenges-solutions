/*
    Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.

    You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md
*/

import type { If } from "@easy/If.type";

import type { Extends } from "@/utils";

import type { Iterable } from "@/constants";

type DeepReadonly<T extends Iterable> = {
  +readonly [Key in keyof T]: If<
    Extends<T[Key], Function>,
    T[Key],
    If<Extends<T[Key], Iterable>, DeepReadonly<T[Key] & {}>, T[Key]>
  >;
};

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>
];

type X1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};

type X2 = { a: string } | { b: number };

type Expected1 = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "string";
        };
        readonly k: "hello";
      };
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"];
        }
      ];
    };
  };
};

type Expected2 = { readonly a: string } | { readonly b: number };

export {};
