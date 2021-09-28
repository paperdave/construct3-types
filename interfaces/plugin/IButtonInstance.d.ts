import { C3Event } from "../../runtime/C3Event";
import { IDOMInstance } from "../IDOMInstance";
import { InstanceDestroyEvent } from "../IInstance";

/** The `IButtonInstance` interface derives from [IDOMInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/idominstance) to add APIs specific to the Button plugin. */
export class IButtonInstance<Vars = undefined | { [key: string]: any }> extends IDOMInstance<Vars> {
  /** Adds an event listener. */
  addEventListener(event: string, cb: (event: C3Event) => void, capture?: boolean): void;
  // NOTE: The following overload is required to prevent a type error.
  /** Fired when the instance is destroyed. After this event, all references to the instance are now invalid, so any remaining references to the instance should be removed or cleared to `null` in this event. Accessing an instance after it is destroyed will throw exceptions or return invalid data. The event object also has an `isEndingLayout` property to indicate if the object is being destroyed because it's the end of a layout, or destroyed for other reasons. */
  addEventListener(
    event: "destroy",
    cb: (event: InstanceDestroyEvent) => void,
    capture?: boolean
  ): void;
  /** Fired when the button is clicked, or the checkbox state is toggled. */
  addEventListener(event: "click", callback: (event: C3Event) => void): void;

  /** The string currently displayed as the button or checkbox label. */
  text: string;
  /** The string used as the tooltip for the button or checkbox. */
  tooltip: string;
  /** A boolean indicating if the control is enabled or disabled. */
  isEnabled: boolean;
  /** A boolean indicating if the checkbox is checked. For button style controls this is always false. */
  isChecked: boolean;
}
