import { IBehaviorInstance } from "../IBehaviorInstance";
import { IInstance } from "../IInstance";

/** One of the inputs for `I8DirectionBehaviorInstance`. These are passed to `I8DirectionBehaviorInstance.simulateControl` to simulate keypresses. */
export type I8DirectionControl = "left" | "right" | "up" | "down";

/** The `I8DirectionBehaviorInstance` interface derives from [IBehaviorInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehaviorinstance) to add APIs specific to the [8 direction behavior](https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/8-direction). */
export class I8DirectionBehaviorInstance<
  I extends IInstance = IInstance
> extends IBehaviorInstance<I> {
  /** Stop the movement, setting the speed to 0. */
  stop(): void;
  /** Invert the direction of motion. Useful as a simple way to bounce the object off an obstacle. */
  reverse(): void;
  /** Simulate one of the movement controls being held down. Useful when *isDefaultControls* is disabled. */
  simulateControl(control: I8DirectionControl): void;
  /** Set or get the current speed in pixels per second. Note this cannot exceed maxSpeed. */
  speed: number;
  /** Set or get the maximum speed in pixels per second. */
  maxSpeed: number;
  /** Set or get the acceleration of the movement in pixels per second per second. */
  acceleration: number;
  /** Set or get the deceleration of the movement in pixels per second per second. */
  deceleration: number;
  /** Set or get the X component of the movement in pixels per second. */
  vectorX: number;
  /** Set or get the Y component of the movement in pixels per second. */
  vectorY: number;
  /** A boolean indicating if the default controls (using the arrow keys) are enabled. */
  isDefaultControls: boolean;
  /** A boolean indicating if input is currently being ignored. If input is ignored, pressing any of the control keys has no effect. However, unlike disabling the behavior, the object can continue to move. */
  isIgnoringInput: boolean;
  /** A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object. */
  isEnabled: boolean;
}
