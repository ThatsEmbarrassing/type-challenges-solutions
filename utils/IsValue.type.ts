export type IsValue<T, V> = T extends V & T ? false : true;
