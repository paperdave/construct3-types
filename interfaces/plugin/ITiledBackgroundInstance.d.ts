import { IWorldInstance } from "../IWorldInstance";

/** The `ITiledBackgroundInstance` interface derives from [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) to add APIs specific to the [Tiled Background plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/tiled-background). */
export class ITiledBackgroundInstance<
  Vars = undefined | { [key: string]: any }
> extends IWorldInstance<Vars> {
  /** The original dimensions of the Tiled Background's current image in pixels. This does not include tiling - it returns the size as shown in Construct's image editor. */
  readonly imageWidth: number;
  /** The original dimensions of the Tiled Background's current image in pixels. This does not include tiling - it returns the size as shown in Construct's image editor. */
  readonly imageHeight: number;
  /** The offset of the displayed Tiled Background image in pixels. */
  imageOffsetX: number;
  /** The offset of the displayed Tiled Background image in pixels. */
  imageOffsetY: number;
  /** The scale of the displayed Tiled Background image, defaulting to 1 for original size. */
  imageScaleX: number;
  /** The scale of the displayed Tiled Background image, defaulting to 1 for original size. */
  imageScaleY: number;
  /** The angle of the displayed Tiled Background image in radians. If this is changed, `imageAngleDegrees` updates accordingly. */
  imageAngle: number;
  /** The angle of the displayed Tiled Background image in degrees. If this is changed, `imageAngle` updates accordingly. */
  imageAngleDegrees: number;
}
