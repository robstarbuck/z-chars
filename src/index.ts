type SplitForZChars = (text: string, count: number) => string[];

type SplitEnd = (
  toSplit: string,
  tailCount: number
) => [string, string | undefined];

type SplitUp = (toSplit: string, count: number) => string[];

type FilterZChars = (chars: string) => string[] | null;

type ToZChars = (chars: string) => string[];

type ToCodePoint = (set: string[]) => number;

type Decode = (text: string, toDecode: string) => string;

type Encode = (text: string, toEncode: string) => string;

// export const zChars = ["\u200c", "\u200d", "\u202c"];
const terminator = "\u2069";
export const zSet = ["\u2066", "\u202a", "\u202d"];

const zCharMatch = new RegExp(`[${zSet.join("")}]+`, "g");

export const filterZChars: FilterZChars = (chars) => chars.match(zCharMatch);

export const toZChars: ToZChars = (letter) =>
  letter
    .charCodeAt(0)
    .toString(zSet.length)
    .split("")
    .map((zIndex) => zSet[Number(zIndex)]);

export const toCodePoint: ToCodePoint = (zs: string[]) => {
  const indexes = zs.map((l) => zSet.indexOf(l));
  return parseInt(indexes.join(""), zSet.length);
};

export const splitEnd: SplitEnd = (text, count) => {
  const head = text.slice(0, -count);
  const end = text.slice(-count);
  return head ? [head, end] : [end, undefined];
};

export const splitUp: SplitUp = (text, count) => {
  const splitSum = Math.max(text.length / count, 1);
  const groupInto = Math.floor(splitSum);
  const remainder = splitSum - groupInto > 0;

  const orphan = text.slice(0, remainder ? 1 : 0);
  const toGroups = text.slice(remainder ? 1 : 0);

  const [adopter, ...grouped] =
    toGroups.match(new RegExp(`.{${groupInto}}`, "g")) || [];
  return adopter ? [orphan.concat(adopter), ...grouped] : [text];
};

export const splitForZChars: SplitForZChars = (text, count) => {
  if (count <= 1) {
    return [text];
  }
  const limitedCount = count;
  const [head, tail] = splitEnd(text, 1);
  const groups = head ? splitUp(head, limitedCount - 1) : [];

  return tail ? [...groups, tail] : [...groups];
};

export const decode: Decode = (v) => v;

export const encode: Encode = (text, toEncode) => {
  if (text.length > toEncode.length) {
  }
  return text;
};
