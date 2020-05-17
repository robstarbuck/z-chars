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

// export const splitUp: SplitUp = (text, count) => {
//   const splitInto = Math.floor(text.length / count);
//   console.log(splitInto);
//   const headGroups = text.match(new RegExp(`.{${splitInto}}`, "g"));
//   const tail = headGroups ? text.slice(-headGroups.length * splitInto) : "";
//   return headGroups ? [...headGroups, tail] : [tail];
// };

export const splitUp: SplitUp = (text, count) => {
  const splitInto = Math.max(1, Math.ceil(text.length / count));
  const headGroups = text.match(new RegExp(`.{${splitInto}}`, "g"));
  const tailCount = headGroups && text.length - headGroups.length * splitInto;
  const tail = tailCount ? text.slice(-tailCount) : [];
  return headGroups ? headGroups.concat(tail) : [];
};

export const decode: Decode = (v) => v;

export const encode: Encode = (v) => v;
