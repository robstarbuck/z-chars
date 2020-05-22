// export const zChars = ["\u200c", "\u200d", "\u202c"];
import type * as T from "../index";

const terminator = "\u2069";

export const zSet = ["\u2066", "\u202a", "\u202d"];

const zCharMatch = new RegExp(`[${zSet.join("")}]+`, "g");

export const filterZChars: T.FilterZChars = (chars) => chars.match(zCharMatch);

export const encodeLetter: T.EncodeLetter = (letter) => {
  const codeRef = letter.charCodeAt(0);
  const zPointers = codeRef.toString(zSet.length).split("");
  const pointerToZ = (zIndex: string) => zSet[Number(zIndex)];
  return zPointers.map(pointerToZ).join("");
};

export const encodeEach = (toEncode: string): string[] => {
  return toEncode.split("").map(encodeLetter);
};

export const codePoint: T.CodePoint = (zs) => {
  const indexes = zs.map((l) => zSet.indexOf(l));
  return parseInt(indexes.join(""), zSet.length);
};

export const splitEnd: T.SplitEnd = (text, count) => {
  const head = text.slice(0, -count);
  const end = text.slice(-count);
  return head ? [head, end] : [end, ""];
};

export const splitUp: T.SplitUp = (text, count) => {
  const { floor, max } = Math;

  const minCount = max(1, count);
  const groupLen = max(1, floor(text.length / minCount));
  const groupMatch = new RegExp(`.{${groupLen}}`, "g");

  const tailLen = groupLen + (text.length % count);
  const [head, tail] = splitEnd(text, tailLen);

  const matches = head.match(groupMatch) || [""];
  return tail ? matches.concat(tail) : matches;
};

export const splitForZChars: T.SplitForZChars = (text, count) => {
  if (count <= 1) {
    return [text];
  }
  const [head, tail] = splitEnd(text, 1);
  const groups = head ? splitUp(head, count - 1) : [];
  return tail ? [...groups, tail] : [...groups];
};

export const interpolate: T.Interpolate = (text, zChars) => {
  const chars = text.split("");
  const interpolated = chars.map((c, i) => c.concat(zChars[i] || ""));
  return interpolated.join("");
};

export const canEncode: T.CanEncode = (text, toEncode) => {
  if (text.length > toEncode.length) {
    return true;
  }
  return false;
};

export const decode: T.Decode = (v) => v;

export const encode: T.Encode = (text, toEncode) => {
  if (!canEncode(text, toEncode)) {
    return text;
  }
  return interpolate(text, encodeEach(toEncode));
};
