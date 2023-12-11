import type { Enumerable } from "../types";
import type { BaseSchema } from "./BaseSchema.interface";

export interface StringSchema extends BaseSchema, Partial<Enumerable<string>> {
  type: "string";
}
