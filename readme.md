# Type Defs for Construct 3 (Unofficial)

Most type definitions and documentation are taken from [the Official Scripting Reference](https://www.construct.net/en/make-games/manuals/construct-3/scripting/overview), some types and documentation are custom written where needed.

**Note**: This currently does not have Behaviors or the SDK typed out. That is being worked on.

## Usage

This module exports it's types as a module, meaning you have to import all the types you want to use.

```ts
import { IRuntime, runOnStartup } from "construct3";

let runtime: IRuntime;

runOnStartup((r) => {
  runtime = r;
});
```

It should be noted that `C3.Event` is renamed to `C3Event`

```ts
import { C3Event } from "construct3";
```

## Contributing

If there are errors in these types, or you want to add types for an addon, please open a github issue or pull request. When contributing, please run the prettier formatter with `yarn lint`
