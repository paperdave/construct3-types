export class C3Event {
  constructor(type: string, cancelable: boolean);

  readonly type: string;
  readonly cancelable: boolean;
  readonly defaultPrevented: boolean;
  readonly propagationStopped: boolean;
  readonly isAsync: boolean;

  preventDefault(): void;
  stopPropagation(): void;
}
