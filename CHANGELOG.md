# CHANGELOG

Since 2023.12.04 I'll be keeping the github repository's changelog and write about changes in my solutions.

## 2023.12.04

### Added

- Solutions:

  - medium:
    - [Absolute](./solutions/medium/Absolute.type.ts)
    - [AnyOf](./solutions/medium/AnyOf.type.ts)
    - [DeepMutable](./solutions/medium/DeepMutable.type.ts)
    - [ExtractToObject](./solutions/medium/ExtractToObject.type.ts)
    - [Filter](./solutions/medium/Filter.type.ts)
    - [Integer](./solutions/medium/Integer.type.ts)
    - [Unique](./solutions/medium/Unique.type.ts)
    - [Without](./solutions/medium/Without.type.ts)
  - hard:
    - [Assign](./solutions/hard/Assign.type.ts)
    - [UnionToIntersections](./solutions/hard/UnionToIntersection.type.ts)

- Utils:

  - [Copy](./utils/Copy.type.ts)
  - [FunctionType](./utils/FunctionType.type.ts)
  - [IsTruthy](./utils/IsTruthy.type.ts)
  - [IsValue](./utils/IsValue.type.ts)
  - [RemoveFromArrayBy](./utils/RemoveFromArrayBy.type.ts)
  - [ReverseBoolean](./utils/ReverseBoolean.type.ts)
  - [ToArray](./utils/ToArray.type.ts)

- Constants:
  - [Truthy](./constants/Truthy.type.ts)
  - [SpacedString](./constants/SpacedString.type.ts)

### Fixed

- Solutions:
  - medium:
    - [Permutation](./solutions/medium/Permutation.type.ts) - fixed a bug when the case `Permutation<never>` gave an error

### Other

- Constants:
  - [ObjectKeyType](./constants/ObjectKeyType.type.ts) - moved it from `utils`
