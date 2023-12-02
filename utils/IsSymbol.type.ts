export type IsSymbol<T extends symbol> = symbol extends T & symbol
  ? false
  : true;
