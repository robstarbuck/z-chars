import { zCharMatch, codePoint } from "./z-chars";

const decode: Decode = (toDecode) => {
  const zSet = toDecode.match(zCharMatch);
  if (!zSet) {
    return "";
  }
  const codePoints = zSet?.map((z) => codePoint(z.split("")));
  return String.fromCodePoint(...codePoints);
};

export { decode };
