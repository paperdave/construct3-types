import { IEffectInstance } from "./IEffectInstance";
import { IInstance } from "./IInstance";
import { ILayer } from "./ILayer";
import { ILayout } from "./ILayout";
import { BlendMode } from "./UnionTypes";

export interface SetMeshPointOpts {
  /** A string of `"absolute"` (default) or `"relative"`, determining how to interpret the `x`, `y`, `u` and `v` options. */
  mode?: "absolute" | "relative";
  /** The mesh point position offset, in normalized co-ordinates [0, 1] across the object size. These are allowed to go outside the object bounds. In relative mode these are added to the mesh point's current position */
  x: number;
  /** The mesh point position offset, in normalized co-ordinates [0, 1] across the object size. These are allowed to go outside the object bounds. In relative mode these are added to the mesh point's current position */
  y: number;
  /** The texture co-ordinate for the mesh point, in normalized co-ordinates [0, 1]. These are not allowed to go outside the object bounds. These can be omitted, or in absolute mode be set to -1, to indicate not to change the texture co-ordinate from the default. */
  u?: number;
  /** The texture co-ordinate for the mesh point, in normalized co-ordinates [0, 1]. These are not allowed to go outside the object bounds. These can be omitted, or in absolute mode be set to -1, to indicate not to change the texture co-ordinate from the default. */
  v?: number;
  /** The Z elevation of the mesh point, allowing for distortion in 3D. Similarly to Z elevation of entire objects, this moves the mesh point up and down on the Z axis. */
  zElevation?: number;
}

/** Each option is a boolean which defaults to false if omitted, so only true properties need to be specified. */
export interface AddChildOpts {
  /** Move the child with this instance's X position */
  transformX?: boolean;
  /** Move the child with this instance's Y position */
  transformY?: boolean;
  /** Rotate the child with this instance's angle */
  transformAngle?: boolean;
  /** Scale the child with this instance's width */
  transformWidth?: boolean;
  /** Scale the child with this instance's height */
  transformHeight?: boolean;
  /** Move the child with this instance's Z elevation */
  transformZElevation?: boolean;
  /** Automatically destroy the child if this instance is destroyed */
  destroyWithParent?: boolean;
}

/**
 * The `IWorldInstance` script interface represents a single instance of an object type (represented by [IObjectClass](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass)) that appears in a layout. It derives from the [IInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iinstance) script interface.
 *
 * Many objects return a more specific class deriving from `IInstance` or `IWorldInstance` to add APIs specific to the plugin. See the [Plugin interfaces reference](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces) for more information.
 *
 * Instances are typically accessed through [IObjectClass](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass) methods like `getFirstInstance()`. For example, `runtime.objects.Sprite.getFirstInstance()` will return the first instance of the Sprite object type.
 *
 * **Note**: Try not to confuse object classes with object instances. A common mistake is to try to use something like `runtime.objects.Sprite.x` to get the X co-ordinate of a Sprite instance. However `runtime.objects.Sprite` is an IObjectClass, which does not have a position. First add another call to get an instance before trying to read instance properties, for example `runtime.objects.Sprite.getFirstInstance().x`.
 */
export class IWorldInstance<Vars = undefined | { [key: string]: any }> extends IInstance<Vars> {
  /** An [ILayout interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout) representing the layout the instance is on. */
  readonly layout: ILayout;
  /** An [ILayer interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout/ilayer) representing the layer the instance is on. */
  readonly layer: ILayer;
  /** The X co-ordinate of the instance. */
  x: number;
  /** The Y co-ordinate of the instance. */
  y: number;
  /** The Z elevation of the instance, relative to the layer it is on. */
  zElevation: number;
  /** A read-only value indicating the Z elevation of the instance including its layer's Z elevation. */
  readonly totalZElevation: number;
  /** The size of this instance, in layout co-ordinates. */
  width: number;
  /** The size of this instance, in layout co-ordinates. */
  height: number;
  /** The angle of the instance in radians. If this is changed, `angleDegrees` updates accordingly. */
  angle: number;
  /** The angle of the instance in degrees. If this is changed, `angle` updates accordingly. */
  angleDegrees: number;
  /**
   * Return a [DOMRect](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fDOMRect) representing the axis-aligned bounding box of the instance in layout co-ordinates.
   *
   * **Note**: This returns a copy of the bounding box. The returned DOMRect does not change if the instance changes, nor does changing the DOMRect affect the instance.
   */
  getBoundingBox(): DOMRect;
  /**
   * Return a [DOMQuad](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fDOMQuad) representing the bounding quad of the instance in layout co-ordinates. This is always a rectangle, but unlike the bounding box can represent rotation.
   *
   * **Note**: This returns a copy of the bounding quad. The returned DOMQuad does not change if the instance changes, nor does changing the DOMQuad affect the instance.
   */
  getBoundingQuad(): DOMQuad;
  /** A boolean indicating whether the instance is visible in the layout. */
  isVisible: boolean;
  /** The opacity of the instance, as a floating point number in the range [0, 1], where 0 is fully transparent and 1 is fully opaque. */
  opacity: number;
  /** An array with 3 elements specifying the red, green and blue color filter of the instance, with color values as floats in the 0-1 range. */
  colorRgb: [number, number, number];
  /** A string indicating the current blend mode of the instance, controlling how it draws over the background */
  blendMode: BlendMode;
  /** An array of [IEffectInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ieffectinstance) representing the effect parameters for each effect on the instance. */
  readonly effects: IEffectInstance[];
  /** Move the instance to the top of its current layer in the Z order. */
  moveToTop(): void;
  /** Move the instance to the bottom of its current layer in the Z order. */
  moveToBottom(): void;
  /** Move the instance to the top of a different layer given by its [ILayer](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout/ilayer). */
  moveToLayer(layer: ILayer): void;
  /** Move the instance adjacent to `other` (another `IWorldInstance`) in the Z order. If necessary this also moves the instance to the same layer as `other`. If `isAfter` is true, it moves it just above the given instance, else just below. */
  moveAdjacentToInstance(other: IWorldInstance, isAfter?: boolean): void;
  /** A read-only integer indicating the instance's current index in the Z order on its current layer, starting at 0 for the back of the current layer, and increasing as it moves to the front. */
  readonly zIndex: number;
  /** Test if a point intersects this instance, using its collision polygon if any, and return a boolean indicating if the point is inside the instance's collision area. */
  containsPoint(x: number, y: number): boolean;
  /** Test if this instance overlaps another world instance given by an `IWorldInstance`, returning `true` if they overlap, else `false`. This uses the object's collision polygons if any. If either instance has collisions disabled, this will always return `false`. */
  testOverlap(wi: IWorldInstance): boolean;
  /** Test if this instance overlaps any instance with the [Solid behavior](https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/solid). This returns the instance interface class for the first instance with the solid behavior that was found to overlap this instance, or `null` if none. This uses the object's collision polygons if any and respects solid collision filtering. */
  testOverlapSolid(): IInstance | null;
  /** Create a mesh for deforming the appearance of the object with the given number of mesh points horizontally and vertically. The minimum size is 2. */
  createMesh(hsize: number, vsize: number): void;
  /** Releases any mesh that has been created, reverting back to default rendering of the object with no mesh distortion. Ignored if no mesh created. */
  releaseMesh(): void;
  /** Alter a given point in a created mesh given by its zero-based column and row */
  setMeshPoint(col: number, row: number, opts: SetMeshPointOpts): void;
  /** Return the size of the mesh as `[hsize, vsize]` (corresponding to the size passed to `createMesh()`) if one is created. If no mesh has been created, returns `[0, 0]`` */
  getMeshSize(): [hsize: number, vsize: number];
  /** Return the parent `IWorldInstance` of this instance in the scene graph hierarchy if any, else `null`. */
  getParent(): IWorldInstance | null;
  /** Return the top parent of this instance in the scene graph hierarchy (which by definition has no parent itself) if any, else `null`. */
  getTopParent(): IWorldInstance | null;
  /** A generator method that can be used to iterate all the instance's parents, up to the top parent. */
  parents(): IterableIterator<IWorldInstance>;
  /** Returns the number of children that have been added to this instance in the scene graph hierarchy. */
  getChildCount(): number;
  /** Of the children that have been added to this instance, return the child instance at the given zero-based index. If the index is out of bounds, returns `null`. */
  getChildAt(index: number): IWorldInstance | null;
  /** A generator method that can be used to iterate all the instance's added children. */
  children(): IterableIterator<IWorldInstance>;
  /** A generator method that can be used to iterate all the instance's children recursively, i.e. including children of children, down to the bottom of the scene graph hierarchy. */
  allChildren(): IterableIterator<IWorldInstance>;
  /**
   * Add another world instance given by an `IWorldInstance` as a child of this instance in the scene graph hierarchy. This instance becomes its parent in the scene graph hierarchy. The child will move, scale and rotate with this instance according to the provided options specified in the object `opts`.
   *
   * **Note**: Instances can only have one parent. If the given instance is already added as a child of something else, this method will have no effect.
   */
  addChild(child: IWorldInstance, opts: AddChildOpts): void;
  /** Remove an existing child given by an `IWorldInstance` that was previously added with `addChild()`. The child is detached from the scene graph hierarchy and this instance will no longer act as its parent. The removed child still keeps its own children, if it has any. */
  removeChild(child: IWorldInstance): void;
  /** Shorthand method for `wi.getParent().removeChild(wi)`, i.e. removes this instance from its parent if it has any. If the instance has no parent, the method has no effect. */
  removeFromParent(): void;
}
