import { IWorldInstance } from "../IWorldInstance";

/**
 * The `ISpriteInstance` interface derives from [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) to add APIs specific to the [Sprite](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/sprite) plugin.
 *
 * The first type parameter `AnimationName` is an optional string union o
 */
export class ISpriteInstance<
  AnimationName extends string = string,
  Vars = undefined | { [key: string]: any }
> extends IWorldInstance<Vars> {
  /** Set the current animation by a string of its name (case-insensitive). from can be set to either "current-frame" to switch to the same frame index in the new animation, or "beginning" to rewind to the first frame. */
  setAnimation(name: AnimationName, from?: "beginning" | "current-frame"): void;
  /** A read-only string of the current animation name. Use the setAnimation() method to change the animation. */
  readonly animationName: AnimationName;
  /** Start playback of the current animation. from can be set to either "current-frame" to play from the existing frame, or "beginning" to play from the first frame. */
  startAnimation(from: "beginning" | "current-frame"): void;
  /** Stop playback of the current animation. */
  stopAnimation(): void;
  /** The zero-based index of the current animation frame. */
  animationFrame: number;
  /** The current animation playback speed, in animation frames per second. */
  animationSpeed: number;
  /** The zero-based index of the animation frame to rewind to when repeating an animation. */
  animationRepeatToFrame: number;
  /** Read-only numbers indicating the size of the current animation frame's source image, in pixels. */
  imageWidth: number;
  /** Read-only numbers indicating the size of the current animation frame's source image, in pixels. */
  imageHeight: number;
  /** Return the number of image points on the current animation frame. */
  getImagePointCount(): number;

  /** Return the location of an image point on the current animation frame in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. */
  getImagePointX(nameOrIndex: number | string): number;
  /** Return the location of an image point on the current animation frame in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. */
  getImagePointY(nameOrIndex: number | string): number;
  /** Return the location of an image point on the current animation frame in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. The `getImagePoint` variant returns `[x, y]`. */
  getImagePoint(nameOrIndex: number | string): [x: number, y: number];

  /** Return the number of collision polygon points on the current animation frame. */
  getPolyPointCount(): number;
  /**
   * Return the location of a collision polygon point on the current animation frame in layout co-ordinates, by its zero-based index.
   *
   * **Note**: The first poly point is repeated again at the end (at the index `getPolyPointCount()`) since it makes it easier to iterate through each edge of the collision polygon.
   */
  getPolyPointX(index: number): number;
  /**
   * Return the location of a collision polygon point on the current animation frame in layout co-ordinates, by its zero-based index.
   *
   * **Note**: The first poly point is repeated again at the end (at the index `getPolyPointCount()`) since it makes it easier to iterate through each edge of the collision polygon.
   */
  getPolyPointY(index: number): number;
  /**
   * Return the location of a collision polygon point on the current animation frame in layout co-ordinates, by its zero-based index. The getPolyPoint variant returns `[x, y]`.
   *
   * **Note**: The first poly point is repeated again at the end (at the index `getPolyPointCount()`) since it makes it easier to iterate through each edge of the collision polygon.
   */
  getPolyPoint(index: number): [x: number, y: number];
}
