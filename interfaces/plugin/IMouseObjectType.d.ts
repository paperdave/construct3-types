import { IObjectClass } from "../IObjectClass";

/**
 * The `IMouseObjectType` interface derives from [IObjectClass](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass) to add APIs specific to the [Mouse plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/mouse).
 *
 * Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.mouse` instead of the named object.
 */
export class IMouseObjectType extends IObjectClass {
  /** Return the current position of the mouse cursor on a layer, given by a case-insensitive string of its name or zero-based index. The parameter can be omitted for the default mouse position, which does not take in to account any specific layer's transformations. */
  getMouseX(layerNameOrIndex: string | number): number;
  /** Return the current position of the mouse cursor on a layer, given by a case-insensitive string of its name or zero-based index. The parameter can be omitted for the default mouse position, which does not take in to account any specific layer's transformations. */
  getMouseY(layerNameOrIndex: string | number): number;
  /** Return the current position of the mouse cursor on a layer, given by a case-insensitive string of its name or zero-based index. The parameter can be omitted for the default mouse position, which does not take in to account any specific layer's transformations. This returns both the X and Y position as `[x, y]`. */
  getMousePosition(layerNameOrIndex: string | number): [x: number, y: number];

  /** Return a boolean indicating if the given mouse button is currently down. The button is specified the same way as the [MouseEvent.button](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fMouseEvent%2fbutton) property, i.e. 0 for left, 1 for middle, and 2 for right. */
}
