import { IWorldInstance } from "../IWorldInstance";

/** The `IDrawingCanvasInstance` interface derives from [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) to add APIs specific to the [Drawing Canvas plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/drawing-canvas). */
export class IDrawingCanvasInstance<
  Vars = undefined | { [key: string]: any }
> extends IWorldInstance<Vars> {
  /** Read-only values representing the size of the Drawing Canvas rendering surface in device pixels. */
  surfaceDeviceWidth: number;
  /** Read-only values representing the size of the Drawing Canvas rendering surface in device pixels. */
  surfaceDeviceHeight: number;
  /** Takes a snapshot of the drawing canvas pixel state on the GPU, and reads it back to the CPU asynchronously. Resolves with an [ImageData](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fImageData) representing the pixel data. Note this uses unpremultiplied alpha, whereas the surface on the GPU is premultiplied, so technically this is lossy. */
  getImagePixelData(): Promise<ImageData>;
  /** Load pixel data in an [ImageData](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fImageData) in to the Drawing Canvas rendering surface. The ImageData must have a size equal to `surfaceDeviceWidth` and `surfaceDeviceHeight`. If the optional `premultiplyAlpha` parameter is set to true, the pixel data will premultiply the alpha (multiplying the RGB components by the A component). This can be left disabled if the pixel data is already premultiplied, which is also faster since the premultiplication step can be skipped. */
  loadImagePixelData(imageData: ImageData, preMultiplyAlpha?: boolean): void;
}
