import { IWorldInstance } from "./IWorldInstance";

/**
 * The `IDOMInstance` script interface represents a single instance of an object type (represented by [IObjectClass](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass)) that appears in a layout and represents a DOM element such as a button or other form control at runtime. It derives from the [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) script interface.
 *
 * Note these methods can still be used in worker mode, since it does not directly access a DOM element.
 */
export class IDOMInstance<
  E = HTMLElement,
  Vars = undefined | { [key: string]: any }
> extends IWorldInstance<Vars> {
  /** Focus the DOM element represented by this instance. */
  focus(): void;
  /** Blur the DOM element represented by this instance. */
  blur(): void;
  /** Apply a CSS style to the DOM element, using a string of the property name (in CSS format, e.g. `"background-color"` and a string of the property value (e.g. `"red"`). */
  setCssStyle(prop: string, value: string): void;
  /**
   * Return the HTML element used to represent the object.
   *
   * **Since the DOM APIs are not available in worker mode, this will throw an exception when running in a Web Worker.**
   */
  getElement(): E;
}
