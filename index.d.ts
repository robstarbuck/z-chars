export type SplitForZChars = (text: string, count: number) => string[];

export type SplitEnd = (toSplit: string, tailCount: number) => [string, string];

export type SplitUp = (toSplit: string, count: number) => string[];

export type FilterZChars = (chars: string) => string[] | null;

export type ToZChars = (chars: string) => string[];

export type ToCodePoint = (set: string[]) => number;

export type Interpolate = (text: string, zChars: string[]) => string;

export type CanEncode = (text: string, toEncode: string) => boolean;

export type Decode = (text: string, toDecode: string) => string;

export type Encode = (text: string, toEncode: string) => any;
