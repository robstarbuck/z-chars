import { splitAcross, splitChars } from "../split";
import { terminator, zSet, zCharMatch } from "../z-chars";
import { Errorcode } from "errors";

type Interpolate = (text: string, zChars: string[]) => string;

type _OnError = (error: Errorcode) => void;

type CanEncode = (
  text: string,
  toEncode: string,
  onError?: _OnError
) => boolean;

type EncodeLetter = (chars: string) => string;

type EncodeEach = (chars: string) => string[];

type Encode = (text: string, toEncode: string) => string;

const interpolate: Interpolate = (text, zChars) => {
  const chars = splitAcross(text, zChars.length + 1);
  const interpolated = chars.map((c, i) => c.concat(zChars[i] || ""));
  return interpolated.join("");
};

const canEncode: CanEncode = (text, toEncode, onError?) => {
  const textLen = splitChars(text).length;
  const encodeLen = splitChars(toEncode).length;

  if (textLen === 0) {
    onError?.("A/EMPT");
    return false;
  }

  if (encodeLen === 0) {
    onError?.("B/EMPT");
    return false;
  }

  if (text.match(zCharMatch)) {
    onError?.("A/ZCHR");
    return false;
  }

  if (toEncode.match(zCharMatch)) {
    onError?.("B/ZCHR");
    return false;
  }

  if (encodeLen >= textLen) {
    onError?.("B/LENG");
    return false;
  }

  return true;
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

const mustEncode: Encode = (text, toEncode) => {
  const encoded = interpolate(text, encodeEach(toEncode));
  return encoded.concat(terminator);
};

export { interpolate, canEncode, encodeLetter, encodeEach, encode, mustEncode };
