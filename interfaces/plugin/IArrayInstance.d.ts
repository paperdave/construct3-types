import { IInstance } from "../IInstance";

/**
 * The `IArrayInstance` interface derives from [IInstance]() to add APIs specific to the Array plugin.
 *
 * **Note**: The Array object can only store strings and numbers, since these are the only types Construct uses in expressions. Use normal JavaScript arrays to store other types.
 */
export class IArrayInstance<Vars = undefined | { [key: string]: any }> extends IInstance<Vars> {
  /** Retrieve the width of the array. */
  width: number;
  /** Retrieve the height of the array. */
  height: number;
  /** Retrieve the depth of the array. */
  depth: number;
  /** Set the size of the array in up to three dimensions. For one or two dimensional arrays, the later parameters can be omitted as they default to 1. (Note passing 0 for any dimension will create an array with zero elements that cannot store any data.) If the array grows, new elements have the value 0. If the array shrinks, elements are removed. */
  setSize(w: number, h?: number, d?: number): void;
  /** Retrieve an element from the array at the given X, Y and Z co-ordinates. For one or two dimensional access, the later parameters can be omitted as they default to 0. */
  getAt(x: number, y?: number, z?: number): any;
  /** Set an element in the array at the given X, Y and Z co-ordinates. val must be a number or string. For one or two dimensional arrays, the later parameters can be omitted as they default to 0. */
  setAt(val: any, x: number, y?: number, z?: number): void;
}
