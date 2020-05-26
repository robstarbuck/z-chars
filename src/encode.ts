import { splitAcross, splitChars } from "./split";
import { terminator, zSet } from "./z-chars";

const interpolate: Interpolate = (text, zChars) => {
  const chars = splitAcross(text, splitChars(text).length);
  const interpolated = chars.map((c, i) => c.concat(zChars[i] || ""));
  return interpolated.join("");
};

const canEncode: CanEncode = (text, toEncode) => {
  if (splitChars(text).length > splitChars(toEncode).length) {
    return true;
  }
  return false;
};

const encodeLetter: EncodeLetter = (letter) => {
  const codeRef = letter.codePointAt(0);
  const zPointers = codeRef?.toString(zSet.length).split("");
  const pointerToZ = (zIndex: string) => zSet[Number(zIndex)];
  return zPointers?.map(pointerToZ).join("") || "";
};

const encodeEach: EncodeEach = (toEncode) => {
  const letters = splitChars(toEncode);
  return letters ? letters.map(encodeLetter) : [""];
};

const encode: Encode = (text, toEncode) => {
  if (!canEncode(text, toEncode)) {
    return text;
  }
  const encoded = interpolate(text, encodeEach(toEncode));
  return encoded.concat(terminator);
};

export { interpolate, canEncode, encodeLetter, encodeEach, encode };
