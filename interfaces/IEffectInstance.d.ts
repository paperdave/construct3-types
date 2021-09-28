export class IEffectInstance {
  /** The zero-based index of this effect, which is its index in the `effects` array. */
  readonly index: number;
  /** A read-only string of the effect name. */
  readonly name: string;
  /** A boolean indicating whether this effect is enabled or not. Inactive effects act the same as the effect being deleted, but the effect can later be reactivated if it is needed again. Note making effects inactive if they are not needed improves performance. */
  isActive: boolean;
  /** Set an effect parameter by the zero-based parameter index. Most parameters use a number as the value. Note however that color parameters are represented by an array with three elements, i.e. `[r, g, b]`. The R, G and B values are normalized to floats in the [0, 1] range. */
  setParameter(index: number, value: any): void;
  /** Get an effect parameter by the zero-based parameter index. Most parameters use a number as the value. Note however that color parameters are represented by an array with three elements, i.e. `[r, g, b]`. The R, G and B values are normalized to floats in the [0, 1] range. */
  getParameter(index: number): any;
}
