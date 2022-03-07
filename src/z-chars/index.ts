const terminator = "\u2069";

type CodePoint = (set: string[]) => number;

const zSet = ["\u2066", "\u202a", "\u202d"];

const zCharMatch = new RegExp(`[${zSet.join("")}]+`, "g");

const zCharMatchWithTerminator = new RegExp(
  `[${zSet.concat(terminator).join("")}]+`,
  "g"
);

const codePoint: CodePoint = (zChars) => {
  const indexes = zChars.map((l) => zSet.indexOf(l));
  return parseInt(indexes.join(""), zSet.length);
};

export { terminator, zSet, zCharMatch, zCharMatchWithTerminator, codePoint };
