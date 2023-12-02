export type IsLiteral<T extends string> = string extends T & string
  ? false
  : true;
