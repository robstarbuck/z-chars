declare type SplitUnicode = (text: string) => string[];

declare type SplitAcross = (text: string, count: number) => string[];

declare type SplitEnd = (
  toSplit: string,
  tailCount: number
) => [string, string];

declare type SplitInto = (toSplit: string, count: number) => string[];

declare type EncodeLetter = (chars: string) => string;

declare type EncodeEach = (chars: string) => string[];

declare type CodePoint = (set: string[]) => number;

declare type Interpolate = (text: string, zChars: string[]) => string;

declare type CanEncode = (text: string, toEncode: string) => boolean;

declare type Encode = (text: string, toEncode: string) => string;

declare type Decode = (toDecode: string) => string;
