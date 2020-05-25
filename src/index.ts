// export const zChars = ["\u200c", "\u200d", "\u202c"];
import type * as T from "../index";

const terminator = "\u2069";

export const zSet = ["\u2066", "\u202a", "\u202d"];

const validSetCount = 4;

export const zCharMatch = new RegExp(
  `[${zSet.join("")}]{${validSetCount},}`,
  "g"
);

export const splitChars: T.SplitUnicode = (text) => {
  return text.match(/./gu) || [""];
};

export const splitEnd: T.SplitEnd = (text, count) => {
  const head = text.slice(0, -count);
  const end = text.slice(-count);
  return head ? [head, end] : [end, ""];
};

export const splitInto: T.SplitInto = (text, count) => {
  const { floor, max } = Math;

  const minCount = max(1, count);
  const groupLen = max(1, floor(text.length / minCount));
  const groupMatch = new RegExp(`.{${groupLen}}`, "g");

  const tailLen = groupLen + (text.length % count);
  const [head, tail] = splitEnd(text, tailLen);

  const matches = head.match(groupMatch) || [""];
  return tail ? matches.concat(tail) : matches;
};

export const splitAcross: T.SplitAcross = (text, count) => {
  if (count <= 1) {
    return [text];
  }
  const [head, tail] = splitEnd(text, 1);
  const groups = head ? splitInto(head, count - 1) : [];
  return tail ? [...groups, tail] : [...groups];
};

export const interpolate: T.Interpolate = (text, zChars) => {
  const chars = text.split("");
  const interpolated = chars.map((c, i) => c.concat(zChars[i] || ""));
  return interpolated.join("");
};

export const codePoint: T.CodePoint = (zChars) => {
  const indexes = zChars.map((l) => zSet.indexOf(l));
  return parseInt(indexes.join(""), zSet.length);
};

export const canEncode: T.CanEncode = (text, toEncode) => {
  if (splitChars(text).length > splitChars(toEncode).length) {
    return true;
  }
  return false;
};

export const encodeLetter: T.EncodeLetter = (letter) => {
  const codeRef = letter.codePointAt(0);
  const zPointers = codeRef?.toString(zSet.length).split("");
  const pointerToZ = (zIndex: string) => zSet[Number(zIndex)];
  return zPointers?.map(pointerToZ).join("") || "";
};

export const encodeEach = (toEncode: string): string[] => {
  const letters = splitChars(toEncode);
  return letters ? letters.map(encodeLetter) : [""];
};

export const encode: T.Encode = (text, toEncode) => {
  if (!canEncode(text, toEncode)) {
    return text;
  }
  const encoded = interpolate(text, encodeEach(toEncode));
  return encoded.concat(terminator);
};

export const decode: T.Decode = (toDecode) => {
  const zSet = toDecode.match(zCharMatch);
  if (!zSet) {
    return "";
  }
  const codePoints = zSet?.map((z) => codePoint(z.split("")));
  return String.fromCodePoint(...codePoints);
};
