type Interpolate = (subject: string, toInsert: string) => string;

type SplitEnd = (toSplit: string, tailCount: number) => [string, string];

type SplitUp = (toSplit: string, count: number) => string[];

type FilterZChars = (chars: string) => string[] | null;

type ToZChars = (chars: string) => string[];

type ToCodePoint = (set: string[]) => number;

type Decode = (toDecode: string) => string;

type Encode = (toEncode: string) => string;

// export const zChars = ["\u200c", "\u200d", "\u202c"];
// export const
const terminator = "\u2069";
export const zChars = ["\u2066", "\u202a", "\u202d"];

const zCharMatch = new RegExp(`[${zChars.join("")}]+`, "g");

export const filterZChars: FilterZChars = (chars) => chars.match(zCharMatch);

export const toZChars: ToZChars = (letter) =>
  letter
    .charCodeAt(0)
    .toString(zChars.length)
    .split("")
    .map((zIndex) => zChars[Number(zIndex)]);

export const toCodePoint: ToCodePoint = (zs: string[]) => {
  const indexes = zs.map((l) => zChars.indexOf(l));
  return parseInt(indexes.join(""), zChars.length);
};

export const splitEnd: SplitEnd = (text, count) => {
  const head = text.slice(0, -count);
  const end = text.slice(-count);
  return [head, end];
};

export const splitUp: SplitUp = (text, count) => {
  const groupInto = Math.floor(text.length / count);
  console.warn(groupInto);
  const groups = text.match(new RegExp(`.{${groupInto}}`, "g"));
  return groups ? [...groups] : [];
};

export const decode: Decode = (v) => v;

export const encode: Encode = (v) => v;
