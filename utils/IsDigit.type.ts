export type IsDigit<T extends number> = number extends T & number
  ? false
  : true;
