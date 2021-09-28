/**
 * The `IAssetManager` interface provides access to the project's assets, such as audio files and other project files added to your project. It is typically accessed via `runtime.assets`.
 *
 * In general project files simply cannot be fetched by their URL, because in preview mode they are only stored locally, and some platforms like Cordova have limitations on being able to fetch URLs so need to use different approaches to read files. The Asset Manager handles all of these details for you, so you should always fetch resources using this class instead of other methods like `fetch()` or `XMLHttpRequest`.
 *
 * ## Subfolders in the Project Bar
 *
 * Note that folders in the Project Bar are only for organisation within the editor. All project files are actually exported at the root level (i.e. in the same folder as *index.html*).
 *
 * Therefore files in subfolders in the Project Bar are still requested by their name only. For example if data.txt is in a subfolder gamedata, it should still be requested with the URL `"data.txt"`, not `"gamedata/data.txt"`.
 */
export class IAssetManager {
  /** Retrieve the contents of a given URL as a string. These methods work cross-platform, including in preview mode, where methods like `fetch` and `XMLHttpRequest` will fail, so these methods should always be preferred for fetching resources. Returns a promise that resolves when the resource has been loaded. */
  fetchText(url: string): Promise<string>;
  /** Retrieve the contents of a given URL as a JSON object. These methods work cross-platform, including in preview mode, where methods like `fetch` and `XMLHttpRequest` will fail, so these methods should always be preferred for fetching resources. Returns a promise that resolves when the resource has been loaded. */
  fetchJson(url: string): Promise<any>;
  /** Retrieve the contents of a given URL as a [Blob](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fBlob). These methods work cross-platform, including in preview mode, where methods like `fetch` and `XMLHttpRequest` will fail, so these methods should always be preferred for fetching resources. Returns a promise that resolves when the resource has been loaded. */
  fetchBlob(url: string): Promise<Blob>;
  /** Retrieve the contents of a given URL as an [ArrayBuffer](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fJavaScript%2fReference%2fGlobal_Objects%2fArrayBuffer). These methods work cross-platform, including in preview mode, where methods like `fetch` and `XMLHttpRequest` will fail, so these methods should always be preferred for fetching resources. Returns a promise that resolves when the resource has been loaded. */
  fetchArrayBuffer(url: string): Promise<ArrayBuffer>;

  /** Retrieve a URL that can be fetched directly for a given resource. Returns a promise that resolves to a string with a URL that may be the same as the original URL, or a different URL (e.g. `blob:` URL) if direct fetching is not supported. This is intended for using with local files where the other fetch methods are not appropriate, such as assigning the `src` attribute of a video. */
  getProjectFileUrl(url: string): Promise<string>;
  /** As with `getProjectFileUrl` but for sound and music files, which are exported to a *media* subfolder. */
  getMediaFileUrl(url: string): Promise<string>;

  /** A string of the subfolder media files are in, including sound and music files. In preview this is an empty string, and after export it is the media subfolder followed by a forward slash, e.g. `"media/"`. */
  readonly mediaFolder: string;
  /** A boolean indicating if the current browser/platform has built-in support for playing WebM Opus files (the default format encoded by Construct). If true then the <audio> tag and `decodeAudioData` can be assumed to support WebM Opus files. If false you can switch to using `decodeWebMOpus()` to use Construct's WebM Opus decoder instead. See the *Audio scripting* example for a demonstration. */
  readonly isWebMOpusSupported: boolean;

  /** This is designed as a drop-in replacement for Web Audio's decodeAudioData for platforms that do not have built-in support for WebM Opus. In this case Construct provides its own WebM Opus decoder as a fallback. It can only be used when isWebMOpusSupported is false; when it is true this method throws an exception since you should use the built-in methods instead. Pass an [AudioContext](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fAudioContext) and [ArrayBuffer](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fJavaScript%2fReference%2fGlobal_Objects%2fArrayBuffer) of the WebM Opus data to decode. This returns a promise that resolves to an [AudioBuffer](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fAudioBuffer) of the decoded audio that can be directly played. See the Audio scripting example for a demonstration. */
  decodeWebMOpus(audioContext: AudioContext, arrayBuffer: ArrayBuffer): Promise<AudioBuffer>;

  /**
   * Fetch and run the JavaScript files at the given URLs. This can load scripts in the *Files* folder of the Project Bar, which unlike scripts in the *Scripts* folder are not automatically loaded by Construct.
   *
   * **Note**: In worker mode, this internally calls [importScripts](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fWorkerGlobalScope%2fimportScripts), which is synchronous. To avoid this becoming inefficient, try to load all the scripts you need with one call, e.g. `loadScripts("script1.js", "script2.js", "script3.js")`.
   *
   * When loading multiple scripts, they will run in the order they are provided, e.g. `loadScripts("script1.js", "script2.js")` will always run `script1.js` first and `script2.js` second.
   */
  loadScripts(...urls: string[]): void;

  /** Fetch and compile a [WebAssembly.Module](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fJavaScript%2fReference%2fGlobal_Objects%2fWebAssembly%2fModule) from the given URL, which is typically a .wasm file. This uses streaming compilation where supported. Note this does not instantiate the module, which needs to be done before any calls can be made. Pass the module resulting from this call to [WebAssembly.instantiate()](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fJavaScript%2fReference%2fGlobal_Objects%2fWebAssembly%2finstantiate) to get a [WebAssembly.Instance](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fJavaScript%2fReference%2fGlobal_Objects%2fWebAssembly%2fInstance) from the module. */
  fetchWebAssemblyModule(url: string): Promise<WebAssembly.Module>;
}
