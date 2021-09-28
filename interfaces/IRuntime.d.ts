import { C3Event } from "../runtime/C3Event";
import { IAssetManager } from "./IAssetManager";
import { IInstance } from "./IInstance";
import { ILayout } from "./ILayout";
import { IObjectClass } from "./IObjectClass";
import { IStorage } from "./IStorage";
import { IWorldInstance } from "./IWorldInstance";
import { IKeyboardObjectType } from "./plugin/IKeyboardObjectType";
import { IMouseObjectType } from "./plugin/IMouseObjectType";
import { ITouchObjectType } from "./plugin/ITouchObjectType";

/**
 * This interface is to enable strict-typing on the object types on the runtime. Use module augmentation to add your objects to it. Below is an example of how to add your custom classes.
 *
 * ```ts
 * declare module "construct3" {
 *   export interface ObjectTypes {
 *     Player: ISpriteInstance;
 *     // add the rest of your objects here, they can even point to your custom instance classes
 *   }
 * }
 * ```
 *
 * If this interface is not empty, it will make IRuntime and other types much more strict.
 */
export interface ObjectTypes {}

export interface IRuntimeEvents {
  /** Fires every tick, just before running the layout's event sheet. Use the runtime.dt property to access delta-time and step the game's logic by that amount of time. */
  tick: C3Event;
  /** Fired once only when the first layout in the project starts. `"beforeprojectstart"` fires before `"beforelayoutstart"` on the first layout, which in turn is before *On start of layout* triggers. `"afterprojectstart"` fires after `"afterlayoutstart"` on the first layout, which in turn is after *On start of layout* triggers. In both events, all instances on the first layout are created and available to modify. */
  beforeprojectstart: C3Event;
  /** Fired once only when the first layout in the project starts. `"beforeprojectstart"` fires before `"beforelayoutstart"` on the first layout, which in turn is before *On start of layout* triggers. `"afterprojectstart"` fires after `"afterlayoutstart"` on the first layout, which in turn is after *On start of layout* triggers. In both events, all instances on the first layout are created and available to modify. */
  afterprojectstart: C3Event;
  /** Fired when keys are pressed and release on the keyboard. These pass copies of a [KeyboardEvent](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fKeyboardEvent). */
  keydown: KeyboardEvent;
  /** Fired when keys are pressed and release on the keyboard. These pass copies of a [KeyboardEvent](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fKeyboardEvent). */
  keyup: KeyboardEvent;
  /**
   * Fired when mouse input is received. These pass copies of a [MouseEvent](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fMouseEvent).
   *
   * **Note**: You can use pointer events like `"pointermove"` instead of mouse events to cover both mouse and touch input.
   */
  mousemove: MouseEvent;
  /**
   * Fired when mouse input is received. These pass copies of a [MouseEvent](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fMouseEvent).
   *
   * **Note**: You can use pointer events like `"pointermove"` instead of mouse events to cover both mouse and touch input.
   */
  mousedown: MouseEvent;
  /**
   * Fired when mouse input is received. These pass copies of a [MouseEvent](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fMouseEvent).
   *
   * **Note**: You can use pointer events like `"pointermove"` instead of mouse events to cover both mouse and touch input.
   */
  mouseup: MouseEvent;
  /**
   * Fired when mouse input is received. These pass copies of a [MouseEvent](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fMouseEvent).
   *
   * **Note**: You can use pointer events like `"pointermove"` instead of mouse events to cover both mouse and touch input.
   */
  dblclick: MouseEvent;
  /** Fired when mouse wheel input is received. This passes a copy of a [WheelEvent](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fWheelEvent). */
  wheel: WheelEvent;
  /** Fired when pointer input is received. This covers mouse, pen and touch input. These pass copies of a PointerEvent. Construct also adds a lastButtons property for "mouse" type pointers with the previous buttons state, which makes it easier to detect if different mouse buttons have been pressed or released in this event. */
  pointermove: ConstructPointerEvent;
  /** Fired when device orientation or motion sensor input is received. These pass copies of a [DeviceOrientationEvent]() or DeviceMotionEvent respectively. */
}

/**
 * The IRuntime script interface provides a way for JavaScript code in Construct to interact with the engine.
 *
 * The runtime script interface is typically accessed with the name runtime. Note however this is not in a global variable: it is only passed in specific places.
 *
 * All scripts in event sheets have the runtime interface passed to them as a parameter named runtime. For more information see [Scripts in event sheets](https://www.construct.net/en/make-games/manuals/construct-3/scripting/using-scripting/scripts-in-event-sheets).
 *
 * In script files, the runtime interface is only passed to the runOnStartup() method. Outside of that, it is your responsibility to pass it along wherever else it is needed. For more information see [Script files](https://www.construct.net/en/make-games/manuals/construct-3/scripting/using-scripting/script-files).
 */
export class IRuntime {
  /** Adds an event listener. See `IRuntimeEvents` for documentation on each event. */
  addEventListener(event: string, cb: (event: C3Event) => void): void;
  /** Adds an event listener. See `IRuntimeEvents` for documentation on each event. */
  addEventListener<K extends keyof IRuntimeEvents>(event: K, cb: IRuntimeEvents[K]): void;
  /** Removes an event listener. See `IRuntimeEvents` for documentation on each event. */
  removeEventListener(event: string, cb: (event: C3Event) => void): void;
  /** Removes an event listener. See `IRuntimeEvents` for documentation on each event. */
  removeEventListener<K extends keyof IRuntimeEvents>(event: K, cb: IRuntimeEvents[K]): void;

  /** Return the value of delta-time, i.e. the time since the last frame, in seconds. */
  readonly dt: number;
  /** Return the in-game time in seconds, which is affected by the time scale. This is equivalent to the time system expression. */
  readonly gameTime: number;
  /** An object with a property for each object class in the project. For example if the project has an object named Sprite, then runtime.objects.Sprite will refer to the [IObjectClass interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass) for Sprite. */
  readonly objects: keyof ObjectTypes extends never
    ? Record<string, IObjectClass>
    : { [K in keyof ObjectTypes]: IObjectClass<ObjectTypes[K]> };
  /** Get an instance (an [IInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iinstance) or derivative) by its UID (Unique ID), a unique number assigned to each instance and accessible via its uid property. */
  getInstanceByUid(
    uid: string
  ): keyof ObjectTypes extends never ? IInstance : ObjectTypes[keyof ObjectTypes];
  /** An object with a property for each [global variable](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/events/variables) on an event sheet in the project. For example if the project has a global variable on an event sheet named Score, then runtime.globalVars.Score provides access to the global variable from script. */
  readonly globalVars: Record<string, any>;
  /** A shorthand reference to the [Mouse script interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/mouse). This is only set if the Mouse plugin is added to the project. */
  readonly mouse: keyof ObjectTypes extends never
    ? IMouseObjectType | undefined
    : ObjectTypes[keyof ObjectTypes] extends IMouseObjectType
    ? IMouseObjectType
    : undefined;
  /** A shorthand reference to the [Keyboard script interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/keyboard). This is only set if the Keyboard plugin is added to the project. */
  readonly keyboard: keyof ObjectTypes extends never
    ? IKeyboardObjectType | undefined
    : ObjectTypes[keyof ObjectTypes] extends IKeyboardObjectType
    ? IKeyboardObjectType
    : undefined;
  /** A shorthand reference to the [Touch script interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/touch). This is only set if the Touch plugin is added to the project. */
  readonly touch: keyof ObjectTypes extends never
    ? ITouchObjectType | undefined
    : ObjectTypes[keyof ObjectTypes] extends ITouchObjectType
    ? ITouchObjectType
    : undefined;
  /** An [ILayout interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout) representing the current layout. */
  readonly layout: ILayout;
  /** Get an [ILayout interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout) for a layout in the project, by a case-insensitive string of its name or its zero-based index in the project. */
  getLayout(layoutNameOrIndex: string): ILayout;
  /** Return an array of [ILayout interfaces](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout) representing all the layouts in the project, in the sequence they appear in the Project Bar. */
  getAllLayouts(): ILayout[];
  /** End the current layout and switch to a new layout given by a case-insensitive string of its name, or its zero-based index in the project (which is the order layouts appear in the Project Bar with all folders expanded). Note the layout switch does not take place until the end of the current tick. */
  goToLayout(layoutNameOrIndex: string): void;
  /** An [IAssetManager interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/iassetmanager) providing access to project assets like sound and music files or other project files, as well as audio decoding utilities. */
  readonly assets: IAssetManager;
  /** An [IStorage interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/istorage) providing access to storage from scripts. Storage is shared with the Local Storage plugin. */
  readonly storage: IStorage;
  /** Call a function in an event sheet, by a case-insensitive string of its name. Each parameter added after the name is passed to the function. There must be at least as many parameters provided as the function uses, although any additional parameters will be ignored. If the function has a return value, it will be returned from this method, else it returns `null`. */
  callFunction(functionName: string, ...args: any[]): any;
  /** This can only be called from a script in an [event sheet function](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/events/functions) with a return type other than None. It is essentially equivalent to the Set return value action. However the fact this method can be called from script can make it easier to return a value from script from an event sheet function. For example an event sheet function could contain a single script action with the code `runtime.setReturnValue(getMyValue())`, which means anywhere the event sheet function is called it returns the value of calling `getMyValue()` in JavaScript. */
  setReturnValue(value: any): void;
  /** A string of the project name, as specified in Project Properties */
  readonly projectName: string;
  /** A string of the project version, as specified in Project Properties */
  readonly projectVersion: string;
  /** Return a random number in the range [0, 1). This is similar to Math.`random()`, but can produce a deterministic sequence of values if the [Advanced Random](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/advanced-random) object overrides the system random. */
  random(): number;
  /** Return the in-game wall-clock time in seconds, which is not affected by the time scale. This is equivalent to the *wallclocktime* system expression. */
  wallTime: number;
  /**
   * Sort the relative Z order of all the [IWorldInstances](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) given by iterable, using a custom sort function as the callback which receives two IWorldInstance to compare as arguments. An example using a myZOrder instance variable for sorting a Sprite object's instances is given below.
   *
   *     runtime.sortZOrder(runtime.objects.Sprite.instances(), (a, b) => a.instVars.myZOrder - b.instVars.myZOrder);
   */
  sortZOrder(
    iterable: Iterable<IWorldInstance>,
    callback: (a: IWorldInstance, b: IWorldInstance) => number
  ): void;
  /** Invoke a download of the resource at the given *url*, downloading with the given *filename*. Locally-generated content can be downloaded with this method using either a data URI or blob URL for *url*. */
  invokeDownload(url: string, filename: string): void;
  /** A read-only boolean indicating if the runtime is currently running in the context of a Web Worker. This is controlled by the *Use worker* project property. In worker mode, a more limited set of browser APIs is available. See [Functions and classes available to Web Workers](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fWeb_Workers_API%2fFunctions_and_classes_available_to_workers). */
  readonly isInWorker: boolean;
  /** Show an alert message prompt using the [alert()](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fWindow%2falert) method. This is provided as a runtime method since it forwards the call to the DOM in worker mode. Note that unlike the standard browser `alert() method, this is an async method - in worker mode it returns a promise that is resolved when the alert is closed, and execution in the worker will continue while the alert is showing. In DOM mode, the alert is blocking and will stop all execution while the alert is showing (but it still returns a promise that resolves when the alert is closed). */
  alert(message: string): Promise<void>;
}

export class ConstructPointerEvent extends C3Event {
  readonly lastButtons: number;
}
