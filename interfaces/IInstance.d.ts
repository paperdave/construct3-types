import { C3Event } from "../runtime/C3Event";
import { IObjectClass } from "./IObjectClass";
import { IRuntime } from "./IRuntime";

/**
 * The `IInstance` script interface represents a single instance of an object type (represented by [IObjectClass](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass)). Instances that appear in the layout have a [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) interface instead, but it derives from IInstance, so these methods and properties are available for any type of instance.
 *
 * Many objects return a more specific class deriving from `IInstance` or `IWorldInstance` to add APIs specific to the plugin. See the [Plugin interfaces reference](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces) for more information.
 *
 * Instances are typically accessed through [IObjectClass](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass) methods like getFirstInstance(). For example, `runtime.objects.Sprite.getFirstInstance()` will return the first instance of the Sprite object type.
 */
export class IInstance<Vars = undefined | { [key: string]: any }> {
  /** Adds an event listener. */
  addEventListener(event: string, cb: (event: C3Event) => void, capture?: boolean): void;

  /** Fired when the instance is destroyed. After this event, all references to the instance are now invalid, so any remaining references to the instance should be removed or cleared to `null` in this event. Accessing an instance after it is destroyed will throw exceptions or return invalid data. The event object also has an `isEndingLayout` property to indicate if the object is being destroyed because it's the end of a layout, or destroyed for other reasons. */
  addEventListener(
    event: "destroy",
    cb: (event: InstanceDestroyEvent) => void,
    capture?: boolean
  ): void;

  /** Removes an event listener */
  removeEventListener(event: string, cb: (event: C3Event) => void, capture?: boolean): void;

  /**
   * Dispatch an event, firing any handler functions that have been added for the event type. You can use `new C3Event(eventName, isCancellable)` to create an event object that can be dispatched (e.g. `new C3Event("click", true))`, and add any extra properties relevant to your event to that object. This can also be used by the [addon SDK](https://www.construct.net/en/make-games/manuals/addon-sdk) to cause your addon to fire an event in the script interface, e.g.:
   *
   * ```ts
   * const e = new C3Event("click", true);
   * this.GetScriptInterface().dispatchEvent(e);
   * ```
   */
  dispatchEvent(event: C3Event): void;

  /** A reference back to the [IRuntime interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/iruntime). (This is particularly useful when [subclassing instances](https://www.construct.net/en/make-games/manuals/construct-3/scripting/guides/subclassing-instances), since in a custom class's methods you can always refer to the runtime with `this.runtime.`) */
  runtime: IRuntime;
  /**
   * The IObjectClass interface for this instance's object type.
   *
   * **Note**: This is named *objectType* and not *objectClass* because it always refers to an object type, and never a family.
   */
  objectType: IObjectClass<this>;

  /**
   * If the object has any [instance variables](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/instance-variables), they can be accessed by named properties under this property. For example if an object has an instance variable named *health*, it can be set and retrieved using `instance.instVars.health`. Note if the object has no instance variables, the instance won't have an `instVars` property at all.
   *
   * **Note**: In some cases, instance variables may have names that aren't valid JavaScript identifiers. In this case you can use the string property syntax, e.g. `instance.instVars["health"]`.
   *
   * **Note:** You don't have to use instance variables to add custom properties to instances. In JavaScript you can simply assign new properties to existing objects, or use [instance subclassing](https://www.construct.net/en/make-games/manuals/construct-3/scripting/guides/subclassing-instances) to use your own custom class with your own properties and methods.
   */
  instVars: Vars;

  /**
   * If the object has any [behaviors](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/behaviors), they can be accessed by named properties under this property. For example if an object has a behavior named Bullet, it can be accessed using `instance.behaviors.Bullet`. Each behavior has its own properties and methods, which can be found in the Behavior [interfaces reference](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces) section. Note if the object has no behaviors, the instance won't have a `behaviors` property at all.
   *
   * **Note**: In some cases, behaviors may have names that aren't valid JavaScript identifiers. In this case you can use the string property syntax, e.g. `instance.instVars["8Direction"]`.
   */
  behaviors?: null; // TODO: type this

  /** The unique ID of this instance, as a number. Note instances can be looked up by their UID using the runtime `getInstanceByUid()` method. */
  readonly uid: number;

  /**
   * Destroy the instance, removing it and releasing any memory associated with it.
   *
   * **Do not make any further calls or access any properties after the `destroy()` call. The instance is no longer valid and any attempts to use it may throw exceptions.**
   */
  destroy(): void;
}

/** Fired when the instance is destroyed. After this event, all references to the instance are now invalid, so any remaining references to the instance should be removed or cleared to `null` in this event. Accessing an instance after it is destroyed will throw exceptions or return invalid data. The event object also has an `isEndingLayout` property to indicate if the object is being destroyed because it's the end of a layout, or destroyed for other reasons. */
export interface InstanceDestroyEvent extends C3Event {
  /** Is this instance being destroyed because the layout is ending? */
  isEndingLayout: boolean;
}
