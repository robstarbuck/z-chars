const terminator = "\u2069";

const zSet = ["\u2066", "\u202a", "\u202d"];

const validSetMin = 4;

const zCharMatch = new RegExp(`[${zSet.join("")}]{${validSetMin},}`, "g");

const codePoint: CodePoint = (zChars) => {
  const indexes = zChars.map((l) => zSet.indexOf(l));
  return parseInt(indexes.join(""), zSet.length);
};

export { terminator, zSet, zCharMatch, codePoint };
