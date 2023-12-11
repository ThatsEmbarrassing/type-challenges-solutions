/*
    Implement the type of just-flip-object

    https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md
*/

type Flip<T extends Record<string, string | number | boolean>> = {
  [Key in keyof T as `${T[Key]}`]: Key;
};

// #=============================================

import type { Equal, Expect, NotEqual } from "@type-challenges/utils";

type cases = [
  Expect<Equal<{ a: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<NotEqual<{ b: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<Equal<{ 3.14: "pi"; true: "bool" }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<
    Equal<{ val2: "prop2"; val: "prop" }, Flip<{ prop: "val"; prop2: "val2" }>>
  >
];

export {};
