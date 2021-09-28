import { IObjectClass } from "../IObjectClass";

/**
 * The `IKeyboardObjectType` interface derives from [IObjectClass](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass) to add APIs specific to the [Keyboard plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/keyboard).
 *
 * Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.keyboard` instead of the named object.
 */
export class IKeyboardObjectType extends IObjectClass {
  /**
   * Return a boolean indicating if the specified keyboard key is currently being held down. The key can be specified either by its numeric code, corresponding to the [KeyboardEvent.which](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fKeyboardEvent%2fwhich) property, or a string identifying the physical key, corresponding to the [KeyboardEvent.code](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fKeyboardEvent%2fcode) property (see also [KeyboardEvent: code values](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fKeyboardEvent%2fcode%2fcode_values)).
   *
   * Another resource for key codes is [keycode.info](http://keycode.info/).
   */
  isKeyDown(keyStringOrWhich: string): boolean;
}
