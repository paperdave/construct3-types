import { IEffectInstance } from "./IEffectInstance";
import { ILayout } from "./ILayout";
import { BlendMode } from "./UnionTypes";

/** The `ILayer` script interface represents a layer on a [layout](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout). */
export class ILayer {
  /** A read-only string of the layer name. */
  readonly name: string;
  /** A read-only number with the zero-based index of the layer on its layout. The bottom layer has an index of 0, with the index increasing upwards in Z order. */
  readonly index: number;
  /** The [ILayout interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout) representing the layout this layer belongs to. */
  readonly layout: ILayout;
  /** A boolean indicating if the layer is visible. When invisible, the layer skips drawing entirely. */
  visible: boolean;
  /** A boolean indicating if the layer background is transparent. When transparent, the background color is ignored. */
  transparent: boolean;
  /** Set or get the background color of a layer as an array with 3 elements specifying the red, green and blue components with values in the 0-1 range. Note this is ignored if the layer is transparent. */
  backgroundColor: [r: number, g: number, b: number];
  /** Independently scroll a layer, regardless of where the layout is scrolled to. By default layers all follow the layout scroll position. Upon setting a layer's scroll position, the layer will stop following the layout scroll position, and remain scrolled at the position specified. */
  scrollX: number;
  /** Independently scroll a layer, regardless of where the layout is scrolled to. By default layers all follow the layout scroll position. Upon setting a layer's scroll position, the layer will stop following the layout scroll position, and remain scrolled at the position specified. */
  scrollY: number;
  /** Independently scroll a layer, regardless of where the layout is scrolled to. By default layers all follow the layout scroll position. Upon setting a layer's scroll position, the layer will stop following the layout scroll position, and remain scrolled at the position specified. */
  scrollTo(x: number, y: number): void;
  /** The `restoreScrollPosition()` method reverts the layer to the default mode where it follows the layout scroll position. */
  restoreScrollPosition(): void;
  /** Set or get the horizontal parallax rates of a layer. */
  parallaxX: number;
  /** Set or get the vertical parallax rates of a layer. */
  parallaxY: number;
  /** The opacity of the layer, as a floating point number in the range [0, 1], where 0 is fully transparent and 1 is fully opaque. Note that changing the opacity to a value other than 1 will force the layer to render via its own texture. */
  opacity: number;
  /** Set or get the layer scale, taking in to account its scale rate property. */
  scale: number;
  /** Set or get the scale rate property of a layer, which affects how quickly it scales (if at all). */
  scaleRate: number;
  /** Set or get the layer angle in radians */
  angle: number;
  /** Set or get the Z elevation of the entire layer. By default the camera is at Z = 100, and looking down to Z = 0. The default Z elevation is 0. Increasing it will move the layer upwards (towards the camera) and decreasing it will move it downwards (away from the camera). */
  zElevation: number;
  /** Return a [DOMRect](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fDOMRect) representing the bounds of the viewport on this layer in layout co-ordinates. */
  getViewport(): DOMRect;
  /** A boolean indicating the layer's *Force own texture* property. For more information see the property in the [Layers](https://www.construct.net/make-games/manuals/construct-3/project-primitives/layers) manual entry. */
  isForceOwnTexture: boolean;
  /** A string indicating the blend mode of the layer, controlling how it draws over the other layers behind it. */
  blendMode: BlendMode;
  /** An array of [IEffectInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ieffectinstance) representing the effect parameters of the effects on this layer. */
  effects: IEffectInstance[];
  /** Convert between positions in CSS pixels, such as the `clientX/Y` properties of an input event, and layer co-ordinates within the project. An optional Z value can be provided to do the conversion taking in to account Z elevation to a certain height on the layer. This is useful for purposes like identifying what position in a layer was clicked in an input event, or positioning a HTML element in layer co-ordinates. Both methods return a pair of co-ordinates in the form `[x, y]`. */
  cssPxToLayerPx(clientX: number, clientY: number, z?: number): [x: number, y: number];
  /** Convert between positions in CSS pixels, such as the `clientX/Y` properties of an input event, and layer co-ordinates within the project. An optional Z value can be provided to do the conversion taking in to account Z elevation to a certain height on the layer. This is useful for purposes like identifying what position in a layer was clicked in an input event, or positioning a HTML element in layer co-ordinates. Both methods return a pair of co-ordinates in the form `[x, y]`. */
  layerPxToCssPx(layerX: number, layerY: number, z?: number): [x: number, y: number];
}
