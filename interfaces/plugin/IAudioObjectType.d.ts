import { IObjectClass } from "../IObjectClass";

/**
 * The `IAudioObjectType` interface derives from [IObjectClass](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass) to add APIs specific to the [Audio plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/audio).
 *
 * The script interface essentially just provides access to the underlying [AudioContext](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fAudioContext) (part of the [Web Audio API](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fWeb_Audio_API)) that the Audio plugin uses internally for audio playback. However this is sufficient to provide complete control over audio playback, including setting up complex graphs of audio processing nodes. It is also convenient, since Construct manages some awkward details such as ensuring playback is enabled as soon as possible given most browsers impose autoplay restrictions. Adding the Audio object and using its script interface saves you from having to re-implement these details yourself.
 *
 * Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.objects.Audio`.
 *
 * Since the Web Audio API is not available in Web Workers, the Audio object's script interface can only be used in DOM mode, i.e. with the project *Use worker* option turned off.
 */
export class IAudioObjectType extends IObjectClass {
  /** The Audio plugin's internal [AudioContext](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fAudioContext) used for audio playback. */
  audioContext: AudioContext;
  /**
   * The destination node to connect any additional audio nodes to.
   *
   * **Note**: While AudioContext has its own `destination` property, in some cases Construct redirects the audio output to another destination, such as when recording playback. To achieve this it creates its own destination node which it can redirect the output from. By connecting your own nodes to this destination your script's audio output will properly integrate with other Construct features like recording.
   */
  destinationNode: AudioNode;
}
