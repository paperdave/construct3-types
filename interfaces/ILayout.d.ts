import { C3Event } from "../runtime/C3Event";
import { IEffectInstance } from "./IEffectInstance";
import { ILayer } from "./ILayer";

export interface ILayoutEvents {
  beforelayoutstart: C3Event;
  afterlayoutstart: C3Event;
}

/**
 * The `ILayout` script interface represents a layout in the project.
 *
 * The ILayout interface is typically accessed via the [IRuntime](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/iruntime) `layout` property, e.g. `runtime.layout`. This represents the current running layout. Other layouts can be accessed via the IRuntime methods `getLayout()` and `getAllLayouts()`.
 */
export class ILayout {
  /** Adds an event listener. See `ILayoutEvents` for documentation on each event. */
  addEventListener(event: string, cb: (event: C3Event) => void): void;
  /** Adds an event listener. See `ILayoutEvents` for documentation on each event. */
  addEventListener<K extends keyof ILayoutEvents>(event: K, cb: ILayoutEvents[K]): void;
  /** Removes an event listener. See `ILayoutEvents` for documentation on each event. */
  removeEventListener(event: string, cb: (event: C3Event) => void): void;
  /** Removes an event listener. See `ILayoutEvents` for documentation on each event. */
  removeEventListener<K extends keyof ILayoutEvents>(event: K, cb: ILayoutEvents[K]): void;

  /** A read-only string of the layout name. */
  readonly name: string;
  /** A read-only number of the zero-based index of the layout in the order it appears in the Project Bar. */
  readonly index: number;
  /** Get an [ILayer interface](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout/ilayer) for a layer on the layout, by a case-insensitive string of its name or its zero-based index. When passing a number, an out-of-range number is clamped to the valid range and the nearest layer returned. When passing a string, if no layer with the given name is found, the method returns null. */
  getLayer(layerNameOrIndex: number | string): ILayer | null;
  /** Return an array of [ILayer interfaces](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout/ilayer) representing all the layers on the layout. */
  getAllLayers(): ILayer[];
  /** Set or get the size of the layout. Note a layout cannot have a zero or negative size. */
  width: number;
  /** Set or get the size of the layout. Note a layout cannot have a zero or negative size. */
  height: number;
  /** Set or get the scroll position in layout co-ordinates. */
  scrollX: number;
  /** Set or get the scroll position in layout co-ordinates. */
  scrollY: number;
  /** `scrollTo()` is a shorthand for setting both `scrollX` and `scrollY`. */
  scrollTo(x: number, y: number): void;
  /** Set or get the layout scale, with `1` being the default scale, `2` being 2x scale, etc. This scales all the layers in the layout, taking in to account their scale rate property. */
  scale: number;
  /** Set the layout angle in radians. This rotates all the layers in the layout. */
  angle: number;
  /** Set the Vanishing point layout property, with each component in the range 0-1. */
  setVanishingPoint(vpX: number, vpY: number): void;
  /** Get the Vanishing point layout property, with each component in the range 0-1. Returns an array with two elements in the form [vpX, vpY]. */
  getVanishingPoint(): [vpxX: number, vpY: number];
  /** An array of [IEffectInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ieffectinstance) representing the effect parameters of the effects on this layout. */
  effects: IEffectInstance[];
}
