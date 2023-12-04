export type FunctionType<T> = T extends any ? (_x: T) => any : never;
