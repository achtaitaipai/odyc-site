//@ts-ignore
import { ALL_PRESETS, Sound, Synth } from "jfxr";
import { Random } from "./random.js";

export const FxEnum = {
  DEFAULT: 0,
  RANDOM: 1,
  PICKUP: 2,
  LASER: 3,
  EXPLOSION: 4,
  POWERUP: 5,
  HIT: 6,
  JUMP: 7,
  BLIP: 8,
};

export type FxKey = keyof typeof FxEnum;

export const createSound = (template: FxKey, seed?: number) => {
  const presetIndex = FxEnum[template];
  const sound = new Sound();
  const pres = ALL_PRESETS[presetIndex];
  const random = new Random(seed);
  pres.random = random;
  pres.applyTo(sound);
  return sound.serialize() as string;
};

export type SoundPlayerParams = {
  volume: number;
};

export class SoundPlayer {
  audioContext: AudioContext;
  gainNode: GainNode;
  playing = false;
  source?: AudioBufferSourceNode;

  constructor(params: SoundPlayerParams) {
    this.audioContext = new AudioContext();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = params.volume;
    this.gainNode.connect(this.audioContext.destination);
  }

  async play(sound: string) {
    if (this.playing) return;
    this.playing = true;

    this.playing = false;
    return await this.playFx(sound, this.audioContext, this.gainNode);
  }

  playFx(sound: string, audioContext: AudioContext, destination?: AudioNode) {
    return new Promise<void>((res) => {
      if (this.source) this.source.stop();
      const synth = new Synth(sound);
      //@ts-ignore
      synth.run((clip) => {
        const buffer = audioContext.createBuffer(
          1,
          clip.array.length,
          clip.sampleRate
        );
        buffer.getChannelData(0).set(clip.toFloat32Array());
        this.source = audioContext.createBufferSource();
        this.source.buffer = buffer;
        this.source.connect(destination ?? audioContext.destination);
        this.source.start(0);
        this.source.onended = () => res();
      });
    });
  }
}
