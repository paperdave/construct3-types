import { IObjectClass } from "../IObjectClass";

/**
 * The ITouchObjectType interface derives from [IObjectClass](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass) to add APIs specific to the [Touch plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/touch).
 *
 * Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.touch` instead of the named object.
 */
export class ITouchObjectType extends IObjectClass {
  /** Request permission to use device orientation or motion sensors. The `"deviceorientation"` and `"devicemotion"` events will not fire unless this method has been called and permission granted. type must be `"orientation"` or `"motion"`. The user may be prompted to allow permission. Note some browsers merge both types in to one permission prompt in which case only one permission request is necessary to access both orientation and motion. Returns a promise that resolves with `"granted"` if permission was allowed, else `"denied"` if the user declined. */
  requestPermission(type: "orientation" | "motion"): Promise<"granted" | "denied">;
}
