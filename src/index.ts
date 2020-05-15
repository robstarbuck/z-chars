type Interpolate = (subject: string, toInsert: string[]) => string;

type SplitEnd = (toSplit: string, tailCount: number) => [string, string];

type ToZChars = (chars: string) => string[];

type ToCodePoint = (set: string[]) => number;

type Decode = (toDecode: string) => string;

type Encode = (toEncode: string) => string;

export const zChars = ["\u200c", "\u200d", "\u202c"];

const zCharMatch = new RegExp(`[${zChars.join("")}]`, "g");
const zCharNonMatch = new RegExp(`[^${zChars.join("")}]`, "g");

export const toZChars: ToZChars = (letter) =>
  letter
    .charCodeAt(0)
    .toString(zChars.length)
    .split("")
    .map((i) => zChars[Number(i)]);

export const toCodePoint: ToCodePoint = (zs: string[]) =>
  parseInt(zs.map((l) => zChars.indexOf(l)).join(""), zChars.length);

export const decode: Decode = (v) => v;

export const encode: Encode = (v) => v;
