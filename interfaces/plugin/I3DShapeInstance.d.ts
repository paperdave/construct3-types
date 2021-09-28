import { IObjectClass } from "../IObjectClass";
import { IWorldInstance } from "../IWorldInstance";

export type I3DShapeType = "box" | "prism" | "wedge" | "pyramid" | "corner-out" | "corner-in";
export type I3DShapeFace = "front" | "back" | "left" | "right" | "top" | "bottom";

/** The `I3DShapeInstance` interface derives from [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) to add APIs specific to the [3D shape plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/3d-shape). */
export class I3DShapeInstance<
  Vars = undefined | { [key: string]: any }
> extends IWorldInstance<Vars> {
  /** Set or get a string representing the the current shape being displayed */
  shape: I3DShapeType;
  /** Set or get the current Z height (i.e. depth) of the 3D shape. Note the Z height must be greater or equal to 0. */
  zHeight: number;
  /** Set whether a face is visible or invisible based on the boolean visible. */
  setFaceVisible(face: I3DShapeFace, visible: boolean): void;
  /** Return a boolean indicating whether a given face is visible */
  isFaceVisible(face: I3DShapeFace): boolean;
  /** Change one of the shape faces to use one of the other face images. For example this allows swapping the front face image for the back face image. To restore the original image, use the same face for both parameters. */
  setFaceImage(face: I3DShapeFace, image: I3DShapeFace): void;
  /**
   * Replace the image used for a face of the shape with the image used by a Sprite, Tiled Background or 9-Patch object. An instance of the given object must exist on the current layout. Only Sprite, Tiled Background and 9-Patch object types are supported.
   *
   * **Note**: This method can be undone with setFaceImage()
   */
  setFaceObject(face: I3DShapeFace, object: IObjectClass): void;
  /** Set or get the Z tiling factor property of the 3D shape. For more information, refer to the [3D shape plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/3d-shape) manual entry. */
  zTiling: number;
  /** Return the number of image points on the back face. */
  getImagePointCount(): number;
  /** Return the location of an image point on the back face in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. */
  getImagePointX(nameOrIndex: number | string): number;
  /** Return the location of an image point on the back face in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. */
  getImagePointY(nameOrIndex: number | string): number;
  /** Return the location of an image point on the back face in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. */
  getImagePoint(nameOrIndex: number | string): [x: number, y: number];
}
