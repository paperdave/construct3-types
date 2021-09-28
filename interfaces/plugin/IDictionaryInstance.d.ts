import { IInstance } from "../IInstance";

/**
 * The `IDictionaryInstance` interface derives from [IInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iinstance) to add APIs specific to the [Dictionary plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/dictionary).
 *
 * **Note**: The Dictionary object can only use strings as keys, and strings/numbers as values, since these are the only types supported by the plugin. Use your own independent JavaScript Maps to use other types.
 */
export class IDictionaryInstance<
  Vars = undefined | { [key: string]: any }
> extends IInstance<Vars> {
  /**
   * Return the [Map](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fJavaScript%2fReference%2fGlobal_Objects%2fMap) which is used as the underlying data storage for the Dictionary object. This allows access to add, change, remove and iterate items.
   *
   * **Only use string keys, and only store number or string primitives as key values, or the plugin will cease to work correctly.**
   */
  getDataMap(): Map<string, string | number>;
}
