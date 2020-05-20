type SplitForZChars = (text: string, count: number) => string[];

type SplitEnd = (toSplit: string, tailCount: number) => [string, string];

type SplitUp = (toSplit: string, count: number) => string[];

type FilterZChars = (chars: string) => string[] | null;

type ToZChars = (chars: string) => string[];

type ToCodePoint = (set: string[]) => number;

type Interpolate = (text: string, zChars: string[]) => string;

type CanEncode = (text: string, toEncode: string) => boolean;

type Decode = (text: string, toDecode: string) => string;

type Encode = (text: string, toEncode: string) => any;
