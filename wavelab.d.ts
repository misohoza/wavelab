// Type definitions for Wavelab Scripting

// Classes
interface Application {
  /**
   * * If *state* is 1, then user interaction is possible, but execution is slower.
   * * If *state* is 0, then user interaction is generally not possible, but execution is much faster.
   * 
   * You can set the state to 0 if you have many javascript instructions.
   */
  setResponsiveUi(state: number): void;
  /**
   * Wait a certain amount of *milliseconds* before continuing the script.
   */
  wait(milliseconds: number): void;
  /**
   * Undocumented **
   */
  waitsUntilAllTasksFinished(): void;
}

interface AudioObject {
  /**
   * Adds a marker at the cursor position.
   * 
   * Marker Type:
   * 
   * * `generic`
   * * `temporary`
   * * `cdTrackStart`
   * * `cdTrackEnd`
   * * `cdTrackFrontier`
   * * `cdTrackIndex`
   * * `loopStart`
   * * `loopEnd`
   * * `muteStart`
   * * `muteEnd`
   * * `playbackStarter`
   * * `regionStart`
   * * `regionEnd`
   * * `errorStart`
   * * `errorEnd`
   * * `correctionStart`
   * * `correctionEnd`
   */
  addMarker(type: any, name: string, comment: string): void;
  /**
   * Loads the audio range Preset and applies its setting to the audio object.
   */
  applyAudioRangePreset(presetName: string): void;
  /**
   * Returns the position of the edit cursor in the audio object.
   */
  cursorPosition(): number;
  /**
   * Searches for the next marker of the specified Marker Type, from a set position.
   * Returns the marker position if any is found, or -1.
   *
   * Marker Type:
   * 
   * * `generic`
   * * `temporary`
   * * `cdTrackStart`
   * * `cdTrackEnd`
   * * `cdTrackFrontier`
   * * `cdTrackIndex`
   * * `loopStart`
   * * `loopEnd`
   * * `muteStart`
   * * `muteEnd`
   * * `playbackStarter`
   * * `regionStart`
   * * `regionEnd`
   * * `errorStart`
   * * `errorEnd`
   * * `correctionStart`
   * * `correctionEnd`
   */
  findNextMarkerPosition(searchStartPos: number, type: any): number;
  /**
   * This function renders the audio object with the currently active Preset.
   * *outputFileName* is the path name to the output file.
   * Certain rendering procedure use an output path and not a specific file name (e.g. when rendering multiple regions).
   * In that case, use '*' as file name.
   */
  render(outputFileName: string): void;
  /**
   * Returns the sample rate of the audio object.
   */
  sampleRate(): number;
  /**
   * Selects a number of samples, starting from a specific position.
   */
  select(start: number, count: number): void;
  /**
   * Returns the number of selected samples.
   */
  selectionSize(): number;
  /**
   * Returns the index of the first selected sample, or -1 if there is no selection.
   */
  selectionStart(): number;
  /**
   * Sets the cursor position to a specific sample location.
   */
  setCursorPosition(pos: number): void;
  /**
   * Returns the number of samples of the audio object.
   */
  size(): number;
  /**
   * Undoes the last operation.
   */
  undo(): void;
}

interface LogWindow {
  /**
   * Clears the Log window.
   */
  clear(): void;
  /**
   * Outputs an error message to the Log window.
   */
  printError(messageString: string): string;
  /**
   * Outputs an informal message to the Log window.
   * The message argument must be typed as a string.
   */
  printInfo(messageString: string): string;
  /**
   * Outputs a warning message to the Log window.
   */
  printWarning(messageString: string): string;
}

interface MasterSection {
  /**
   * Loads a Master Section Preset.
   */
  loadPreset(presetName: string): void;
  /**
   * Reset the Master Section to its default state.
   */
  reset(): void;
}

interface Montage extends AudioObject {
  /**
   * Bypass On/Off (1 or 0) all plug-ins used in the montage.
   */
  bypassPlugins(state: number): void;
  /**
   * Returns the name of the clip identified by *clipId*.
   */
  clipName(clipId: number): string;
  /**
   * Returns the time line position of the clip identified by *clipId*.
   */
  clipPosition(clipId: number): number;
  /**
   * Returns the sample size of the clip identified by *clipId*.
   */
  clipSize(clipId: number): number;
  /**
   * Returns the ID of the first clip that refers to *fileName*, or 0.
   */
  clipWithFile(fileName: string): number;
  /**
   * Returns the ID of the first clip with name *name*, or 0.
   */
  clipWithName(name: string): number;
  /**
   * Deselect all clips.
   */
  deselectAllClips(): void;
  /**
   * Outputs the ID of the first clip that refers to fileName, or 0.
   */
  firstClip(): number;
  /**
   * Creates a clip from *fileName*, inserts it in track *indexTrack*, on the timeline at the position *where*, and shifts other clips to make room, according to one of the following ripple modes:
   * 
   *  * `autoShiftNo`
   *  * `autoShiftTrack`
   *  * `autoShiftGlobal`
   * 
   * This function returns the ID of first created clip, or 0.
   */
  insertClip(indexTrack: number, where: number, fileName: string, rippleMode: any): number;
  /**
   * Adds a mono audio track at a given track index.
   */
  insertMonoTrack(indexWhere: number): void;
  /**
   * Adds a stereo audio track at a given track index.
   */
  insertStereoTrack(indexWhere: number): void;
  /**
   * Move the clip identified by *clipId* on the timeline.
   */
  moveClip(clipId: number, where: number): void;
  /**
   * Outputs the ID of the clip saved after *clipId*, or 0.
   * Clips are not sorted in any special order.
   * Using both `firstClip` and `nextClip` allows to access all audio montage clips.
   */
  nextClip(clipId: number): number;
  /**
   * Returns the number of output channels of the audio montage.
   */
  numChannels(): number;
  /**
   * Returns the number of tracks of the audio montage.
   */
  numTracks(): number;
  /**
   * Resize the clip identified by *clipId* on the timeline.
   */
  resizeClip(clipId: number, newSize: number): void;
  /**
   * Sets the clip identified by *clipId* as the active clip.
   */
  selectActiveClip(clipId: number): void;
  /**
   * Select the clip identified by *clipId*.
   * The selection status of other clips remains unchanged.
   */
  selectClip(clipId: number): void;
  /**
   * Sets the default fade-in shape and time for the clip identified by *clipId*.
   */
  setClipDefaultFadeIn(clipId: number): void;
  /**
   * Sets the default fade-in shape and time for the clip identified by *clipId*.
   */
  setClipDefaultFadeOut(clipId: number): void;
  /**
   * Rename the clip identified by *clipId*.
   */
  setClipName(clipId: number, name: string): void;
  /**
   * Sets the selected track.
   */
  setSelectedTrack(index: number): void;
  /**
   * Rename a given track.
   */
  setTrackName(indexTrack: number, name: string): void;
}

interface MontageEditor {
  /**
   * Load a Render Preset in the Audio Montage Editor.
   */
  loadRenderPreset(presetName: string): void;
}

interface Wave extends AudioObject {
  /**
   * Changes the level of the selected audio range.
   */
  changeLevel(decibeValue: number): void;
  /**
   * Copies the selected audio range to the clipboard.
   */
  copy(): void;
  /**
   * Copies the selected audio range to the clipboard.
   */
  cut(): void;
  /**
   * Applies a fade-in to the selected audio range.
   * 
   * Fade Shape:
   * 
   * * `linear`
   * * `sinus`
   * * `squareRoot`
   * * `sinusoid`
   * * `log`
   * * `exp`
   * * `expp`
   */
  fadeIn(shape: any): void;
  /**
   * Applies a fade-out to the selected audio range.
   * 
   * Fade Shape:
   * 
   * * `linear`
   * * `sinus`
   * * `squareRoot`
   * * `sinusoid`
   * * `log`
   * * `exp`
   * * `expp`
   */
  fadeOut(shape: any): void;
  /**
   * Inverts the phase of the samples in the audio range.
   */
  invertPhase(): void;
  /**
   * Loads a level envelope Preset and applies its settings to an audio range.
   */
  levelEnvelope(presetName: string): void;
  /**
   * Loads an effect morphing Preset and applies its settings to an audio range.
   */
  morph(presetName: string): void;
  /**
   * Mutes the selected audio range.
   */
  mute(): void;
  /**
   * Loads a normalize level Preset and applies its settings to an audio range.
   */
  normalize(presetName: string): void;
  /**
   * Loads a normalize loudness Preset and applies its settings to an audio range.
   */
  normalizeLoudness(presetName: string): void;
  /**
   * Loads a normalize pan Preset and applies its settings to an audio range.
   */
  normalizePan(presetName: string): void;
  /**
   * Returns the number of channels of the audio file.
   */
  numChannels(): number;
  /**
   * Pastes audio from the clipboard to the current cursor position or audio range.
   */
  paste(): void;
  /**
   * Loads a pitch bend Preset and applies its settings to an audio range.
   */
  pitchBend(presetName: string): void;
  /**
   * Loads a pitch correction Preset and applies its settings to an audio range.
   */
  pitchCorrection(presetName: string): void;
  /**
   * Loads a pitch quantize Preset and applies its settings to an audio range.
   */
  pitchQuantize(presetName: string): void;
  /**
   * Reads a number of samples from a specific cursor position, on a set channel:
   *  
   * * Use 0 for the left channel
   * * Use 1 for the right channel
   * 
   * This returns the result in an array.
   */
  readSamples(indexChannel: number, from: number, numSamples: number): number[];
  /**
   * Deletes the selected audio range.
   */
  remove(): void;
  /**
   * Removes the DC offset in an audio range.
   */
  removeDcOffset(): void;
  /**
   * Deletes the selected audio range and crossfades the resulting regions.
   */
  removeSoft(): void;
  /**
   * Reverses the order of the samples in the audio range.
   */
  reverse(): void;
  /**
   * Sets the cursor position to a new channel. Use *leftCh*, *rightCh*, or *allCh* as argument.
   * 
   * Channel:
   * 
   * * `leftCh`
   * * `rightCh`
   * * `allCh`
   */
  setCursorChannel(channel: any): void;
  /**
   * Loads a silence Preset and applies its settings.
   */
  silence(presetName: string): void;
  /**
   * Swaps stereo channels.
   */
  swapChannels(): void;
  /**
   * Loads a time stretch Preset and applies its settings to an audio range.
   */
  timeStretch(presetName: string): void;
  /**
   * Trims the selected audio range.
   */
  trim(): void;
}

interface WaveEditor {
  /**
   * Load a Render Preset in the Audio File Editor.
   */
  loadRenderPreset(presetName: string): void;
}

interface Workspace {
  /**
   * Activate the tab of the file identified by *fileId*.
   */
  activateFile(fileId: object): void;
  /**
   * Closes all files in the active file group.
   */
  closeAllFilesInActiveGroup(): void;
  /**
   * Closes the file identified by *fileId*.
   */
  closeFile(fileId: object): void;
  /**
   * Opens in the Workspace the Montage with the file name *fileName*.
   * Returns a *fileId* that can be used with `activateFile`(*fileId*) and `closeFile`(*fileId*)
   */
  openMontage(fileName: string): object;
  /**
   * Opens in the Workspace the Wave with the file name *fileName*.
   * Returns a *fileId* that can be used with `activateFile`(*fileId*) and `closeFile`(*fileId*)
   */
  openWave(fileName: string): object;
}

// Global Objects
/**
 * Global object to access the active Audio Montage (Montage).
 * That is, the Audio Montage being edited in the active tab.
 * If the active tab is not an Audio Montage, the active Audio Montage is the one that was last activated, if any (and which is still opened).
 */
declare var activeMontage: Montage;

/**
 * Global object to access the active audio file (Wave).
 * That is, the audio file being edited in the active tab.
 * If the active tab is not an audio file, the active audio file is the one that was last activated, if any (and which is still opened).
 */
declare var activeWave: Wave;

/**
 * Global object to access the WaveLab Application.
 */
declare var application: Application;

/**
 * Global object representing the Log window, where you can output messages to.
 * If the Log window is not open, all functions are ignored.
 */
declare var logWindow: LogWindow;

/**
 * Global object to access the MasterSection.
 */
declare var masterSection: MasterSection;

/**
 * Global object to access the MontageEditor.
 */
declare var montageEditor: MontageEditor;

/**
 * Global object to access the WaveEditor.
 */
declare var waveEditor: WaveEditor;

/**
 * Global object to access the Workspace.
 */
declare var workspace: Workspace;