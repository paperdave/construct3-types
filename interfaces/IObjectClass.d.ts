import { IInstance } from "./IInstance";

/**
 * The `IObjectClass` script interface represents an object class in the project, e.g. a Sprite object type. An ObjectClass can have multiple instances created, which are represented by the [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) script interface if it appears in a layout, otherwise the [IInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iinstance) interface.
 *
 * The type parameter `I` is the instance type this object class represents, which is useful for custom object classes.
 *
 * **Note**: The term object class is used to refer to both object types and families. It can be thought of as the base class of both.
 *
 * References to the project's object classes are typically accessed through the [IRuntime](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/iruntime) interface objects property. For example runtime.objects.Sprite would refer to the IObjectclass interface for the Sprite object type, assuming one was added to the project.
 *
 * **Note**: Try not to confuse object classes with object instances. A common mistake is to try to use something like `runtime.objects.Sprite.x` to get the X co-ordinate of a Sprite instance. However `runtime.objects.Sprite` is an IObjectClass, which does not have a position. First add another call to get an instance before trying to read instance properties, for example `runtime.objects.Sprite.getFirstInstance().x.`
 */
export class IObjectClass<I extends IInstance = IInstance> {
  /** A read-only string of the object class's name. */
  readonly name: string;
  /**
   * Set a custom class to be used to represent instances of this object type. The class must derive from the default class. This can only be called in `runOnStartup`, before any instances have been created. For more information see the guide on [subclassing instances](https://www.construct.net/en/make-games/manuals/construct-3/scripting/guides/subclassing-instances).
   *
   * For TypeScript, the class passed must match the generic type parameter `I`.
   */
  setInstanceClass(Class: { new (): I }): void;

  /** Return an array of all instances of this object class. */
  getAllInstances(): I[];
  /** Return the first instance in the array returned by `getAllInstances()`, or `null` if no instances exist. */
  getFirstInstance(): I | null;
  /** Iterates over all the object class's instances. */
  instances(): IterableIterator<I>;
  /** Return an array of instances that have been picked by the event's conditions. This is only useful with scripts in event sheets. */
  getPickedInstances(): I[];
  /** Return the first instance that has been picked by the event's conditions, or `null` if none. This is only useful with scripts in event sheets. */
  getFirstPickedInstance(): I | null;
  /** Iterates over the instances that have been picked by the event's conditions. This is only useful with scripts in event sheets. */
  pickedInstances(): IterableIterator<I>;
  /**
   * Create a new instance of the object type at a position. The layer to create on is specified either by a case-insensitive string of the layer name or its zero-based index. The position is given in layout co-ordinates. If `createHierarchy` is true, all children of the created instance in the scene-graph hierarchy will also be created automatically with their connections in place. Returns an instance class representing the created instance.
   *
   * **Note**: See Setting up a hierarchy in the [Layout View manual entry](https://www.construct.net/en/make-games/manuals/construct-3/interface/layout-view) for more information about hierarchies.
   */
  createInstance(layer: string | number, x: number, y: number, createHierarchy?: boolean): I;
}
