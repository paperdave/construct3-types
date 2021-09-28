import { IInstance } from "./IInstance";

/** The `IBehavior` interface represents a kind of behavior, such as Solid, Physics or Pin. Some behaviors derive from this class to add extra options that are global to the entire behavior, such as the physics world properties in the Physics behavior. This interface is usually accessed through the [IBehaviorInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehaviorinstance) `behavior` property. */
export class IBehavior {
  /** Return an array of all instances that have this kind of behavior, for example every object with the Solid behavior. Note the returned instances may come from a range of different object types. */
  getAllInstances(): IInstance;
}
