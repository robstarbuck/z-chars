// export const zChars = ["\u200c", "\u200d", "\u202c"];

const terminator = "\u2069";
export const zSet = ["\u2066", "\u202a", "\u202d"];

const zCharMatch = new RegExp(`[${zSet.join("")}]+`, "g");

export const filterZChars: FilterZChars = (chars) => chars.match(zCharMatch);

export const toZChars: ToZChars = (letter) => {
  const codeRef = letter.charCodeAt(0);
  const zIndexes = codeRef.toString(zSet.length).split("");
  return zIndexes.map((zIndex) => zSet[Number(zIndex)]);
};

export const toCodePoint: ToCodePoint = (zs: string[]) => {
  const indexes = zs.map((l) => zSet.indexOf(l));
  return parseInt(indexes.join(""), zSet.length);
};

export const splitEnd: SplitEnd = (text, count) => {
  const head = text.slice(0, -count);
  const end = text.slice(-count);
  return head ? [head, end] : [end, ""];
};

export const splitUp: SplitUp = (text, count) => {
  const { floor, max } = Math;

  const minCount = max(1, count);
  const groupLen = max(1, floor(text.length / minCount));
  const groupMatch = new RegExp(`.{${groupLen}}`, "g");

  const tailLen = groupLen + (text.length % count);
  const [head, tail] = splitEnd(text, tailLen);

  const matches = head.match(groupMatch) || [""];
  return tail ? matches.concat(tail) : matches;
};

export const splitForZChars: SplitForZChars = (text, count) => {
  if (count <= 1) {
    return [text];
  }
  const [head, tail] = splitEnd(text, 1);
  const groups = head ? splitUp(head, count - 1) : [];
  return tail ? [...groups, tail] : [...groups];
};

export const interpolate: Interpolate = (text, zChars) => {
  const chars = text.split("");
  const interpolated = chars.map((c, i) => c.concat(zChars[i] || ""));
  return interpolated.join("");
};

export const canEncode: CanEncode = (text, toEncode) => {
  if (text.length > toEncode.length) {
    return true;
  }
  return false;
};

export const decode: Decode = (v) => v;

export const encode: Encode = (text, toEncode) => {
  if (!canEncode(text, toEncode)) {
    return text;
  }
  const zChars = toZChars(toEncode);
  return interpolate(text, zChars);
};
