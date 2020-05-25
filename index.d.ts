export type SplitUnicode = (text: string) => string[];

export type SplitAcross = (text: string, count: number) => string[];

export type SplitEnd = (toSplit: string, tailCount: number) => [string, string];

export type SplitInto = (toSplit: string, count: number) => string[];

export type EncodeLetter = (chars: string) => string;

export type CodePoint = (set: string[]) => number;

export type Interpolate = (text: string, zChars: string[]) => string;

export type CanEncode = (text: string, toEncode: string) => boolean;

export type Encode = (text: string, toEncode: string) => string;

export type Decode = (toDecode: string) => string;
