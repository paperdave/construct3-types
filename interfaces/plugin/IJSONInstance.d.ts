import { IInstance } from "../IInstance";

/**
 * The `IJSONInstance` interface derives from [IInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iinstance) to add APIs specific to the JSON plugin. JSON can be conveniently modified from script alone, but this interface allows exchanging data between event sheets and code.
 *
 * With TypeScript, the first type parameter will let you strong-type the JSON object this instance contains
 */
export class IJSONInstance<
  JSON = any,
  Vars = undefined | { [key: string]: any }
> extends IInstance<Vars> {
  /**
   * Return a copy of the JSON data held in the object.
   *
   * **Note**: Since this returns a copy of the data, changing the returned data will not affect the contents of the JSON object.
   */
  getJsonDataCopy(): JSON;
  /**
   * Set the JSON data held in the object.
   *
   * **Note**: This takes a copy of the data, so changing the provided data after this call will not affect the contents of the JSON object.
   *
   * **Note**: The provided data is validated and will throw an exception if it's not valid JSON.
   */
  setJsonDataCopy(json: JSON): void;
  /**
   * Parses a string as JSON data and stores the result in the JSON object.
   *
   * **Note**: This will throw an exception if the string is not valid JSON.
   */
  setJsonString(str: string): void;
  /** Return the contents of the JSON object converted to a string in compact form (which is smaller and more efficient to store and send) */
  toCompactString(): string;
  /** Return the contents of the JSON object converted to a string in "beautified" form (which uses line breaks and indentation to make the result more readable). */
  toBeautifiedString(): string;
}
