/*
    Sometimes, you may want to look up a type in a union by its attributes.

    In this challenge, we would like to get the corresponding type by searching for the common type field in the union Cat | Dog. In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md
*/

interface Typeable<K extends string> {
  type: K;
}

type LookUp<T, K extends string> = T extends Typeable<K> ? T : never;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, "dog">, Dog>>,
  Expect<Equal<LookUp<Animal, "cat">, Cat>>
];

export {};
