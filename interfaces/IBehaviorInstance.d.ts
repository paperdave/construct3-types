import { C3Event } from "../runtime/C3Event";
import { IBehavior } from "./IBehavior";
import { IInstance } from "./IInstance";
import { IRuntime } from "./IRuntime";

/**
 * The IBehaviorInstance interface represents a behavior on an [IInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iinstance).
 *
 * Many behaviors return a more specific class deriving from IBehaviorInstance to add APIs specific to the behavior. See the [Behavior instances reference](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces) for more information.
 *
 * Behavior instances are typically accessed via the `behaviors` property of [IInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iinstance), followed by the name of the behavior. Some example code is shown below.
 */
export class IBehaviorInstance<I extends IInstance = IInstance> {
  /** Adds an event handler for a particular type of event fired by an addon's script interface. For information on which events are fired by specific addons, see the documentation on each addon's script interfaces. */
  addEventListener(event: string, cb: (event: C3Event) => void, capture?: boolean): void;
  /** Removes an event handler for a particular type of event fired by an addon's script interface. For information on which events are fired by specific addons, see the documentation on each addon's script interfaces. */
  removeEventListener(event: string, cb: (event: C3Event) => void, capture?: boolean): void;
  /**
   * Dispatch an event, firing any handler functions that have been added for the event type. You can use `new C3Event(eventName, isCancellable)` to create an event object that can be dispatched (e.g. `new C3Event("arrived", true))`, and add any extra properties relevant to your event to that object. This can also be used by the [addon SDK](https://www.construct.net/en/make-games/manuals/addon-sdk) to cause your addon to fire an event in the script interface, e.g.:
   *
   * ```ts
   * const e = new C3Event("arrived", true);
   * this.GetScriptInterface().dispatchEvent(e);
   * ```
   */
  dispatchEvent(event: C3Event): void;
  /** A reference to the [IInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iinstance) representing the object instance this behavior instance is affecting. */
  readonly instance: I;
  /** A reference to the [IBehavior](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehavior) representing the kind of behavior, e.g. Solid or Physics. */
  readonly behavior: IBehavior;
  /** A reference back to the [IRuntime interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/iruntime). */
  readonly runtime: IRuntime;
}
