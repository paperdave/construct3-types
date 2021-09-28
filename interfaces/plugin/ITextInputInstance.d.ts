import { C3Event } from "../../construct3";
import { IDOMInstance } from "../IDOMInstance";
import { InstanceDestroyEvent } from "../IInstance";

/** The `ITextInputInstance` interface derives from [IDOMInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/idominstance) to add APIs specific to the [Text Input plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/text-input). */
export class ITextInputInstance<
  Vars = undefined | { [key: string]: any }
> extends IDOMInstance<Vars> {
  /** Adds an event listener. */
  addEventListener(event: string, cb: (event: C3Event) => void, capture?: boolean): void;
  // NOTE: The following overload is required to prevent a type error.
  /** Fired when the instance is destroyed. After this event, all references to the instance are now invalid, so any remaining references to the instance should be removed or cleared to `null` in this event. Accessing an instance after it is destroyed will throw exceptions or return invalid data. The event object also has an `isEndingLayout` property to indicate if the object is being destroyed because it's the end of a layout, or destroyed for other reasons. */
  addEventListener(
    event: "destroy",
    cb: (event: InstanceDestroyEvent) => void,
    capture?: boolean
  ): void;
  /** Fired when the button is clicked */
  addEventListener(event: "click", callback: (event: C3Event) => void): void;
  /** Fired when the control double-clicked. */
  addEventListener(event: "dblclick", callback: (event: C3Event) => void): void;
  /** Fired when user input causes the text property to change. */
  addEventListener(event: "change", callback: (event: C3Event) => void): void;

  /** The current string entered in the input field. */
  text: string;
  /** A string of text that appears faintly when the field is empty. This can be used for hints for what the field is for, e.g. *Username*. */
  placeholder: string;
  /** A tooltip that appears if the user hovers the mouse over the text box and waits. An empty string indicates no tooltip. */
  tooltip: string;
  /** A boolean indicating if the control is enabled or disabled. */
  isEnabled: boolean;
  /** A boolean indicating if the input field is read-only, which means the text cannot be modified but can still be selected. This is different to disabling the field, where text cannot be selected. */
  isReadOnly: boolean;
  /** Scroll to the bottom of the control. Only has an effect when set to the *textarea* type, since it is the only multiline mode. This is useful for chat or log style textareas. */
  scrollToBottom(): void;
  /** Set or get the maximum number of characters allowed to be entered in the field. The value -1 indicates no limit, which is the default. */
  maxLength: number;
}
