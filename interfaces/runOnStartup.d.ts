import { IRuntime } from "./IRuntime";

/** Runs the provided callback on the game's startup. Your callback is passed the IRuntime, and this is the only way to get a hold of the runtime instance. */
export function runOnStartup(cb: (runtime: IRuntime) => void): void;
