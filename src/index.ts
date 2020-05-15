type Interpolate = (subject: string, toInsert: string[]) => string;

type SplitEnd = (toSplit: string, tailCount: number) => [string, string];

type ToZchars = (chars: string) => string[];

type Encode = (toEncode: string) => string;

type Decode = (toDecode: string) => string;

export const decode: Decode = (v) => v;

export const encode: Encode = (v) => v;
