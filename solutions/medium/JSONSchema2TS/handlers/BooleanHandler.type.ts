import type { If } from "@easy/If.type";

import type { Extends } from "@/utils";

import type { BooleanSchema } from "../schemas";

export type BooleanHandler<T> = If<Extends<T, BooleanSchema>, boolean, never>;
