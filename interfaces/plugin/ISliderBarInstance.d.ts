import { C3Event } from "../../runtime/C3Event";
import { IDOMInstance } from "../IDOMInstance";
import { InstanceDestroyEvent } from "../IInstance";

/** The `ISliderBarInstance` interface derives from [IDOMInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/idominstance) to add APIs specific to the [Slider Bar plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/slider-bar). */
export class ISliderBarInstance<
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
  /** Fired when the control is clicked. */
  addEventListener(event: "click", callback: (event: C3Event) => void): void;
  /** Fired when user input causes the `value` property to change. */
  addEventListener(event: "change", callback: (event: C3Event) => void): void;
  /** The current value represented by the slider bar. */
  value: number;
  /** The minimum value, defining the range of the slider bar. */
  minimum: number;
  /** The maximum value, defining the range of the slider bar. */
  maximum: number;
  /** The increment of possible values. For example if the step is 10, then the slider will jump in units of 10 as it is moved, and only a multiple of 10 can be chosen as a value. */
  step: number;
  /** A tooltip that appears if the user hovers the mouse over the text box and waits. An empty string indicates no tooltip. */
  tooltip: string;
  /** A boolean indicating if the control is enabled or disabled. */
  isEnabled: boolean;
}
