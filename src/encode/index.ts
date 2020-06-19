import { splitAcross, splitChars } from "../split";
import { terminator, zSet, zCharMatch } from "../z-chars";
import { Statuscode, statusInfo } from "../status";

type Interpolate = (subject: string, zChars: string[]) => string;

type _OnError = (error: Statuscode) => void;

type CanEncode = (subject: string, toEncode: string) => boolean;

type TestEncoding = (subject: string, toEncode: string) => Statuscode;

type EncodeLetter = (chars: string) => string;

type EncodeEach = (chars: string) => string[];

type Encode = (
  subject: string,
  toEncode: string,
  onError?: _OnError
) => string | null;

type MustEncode = (subject: string, toEncode: string) => string;

const interpolate: Interpolate = (subject, zChars) => {
  const chars = splitAcross(subject, zChars.length + 1);
  const interpolated = chars.map((c, i) => c.concat(zChars[i] || ""));
  return interpolated.join("");
};

const testEncode: TestEncoding = (subject, toEncode) => {
  const textLen = splitChars(subject).length;
  const encodeLen = splitChars(toEncode).length;

  if (textLen === 0) {
    return "EMPTY-SUBJECT";
  }

  if (encodeLen === 0) {
    return "EMPTY-ENCODE";
  }

  if (subject.match(zCharMatch)) {
    return "ZCHR-SUBJECT";
  }

  if (toEncode.match(zCharMatch)) {
    return "ZCHR-ENCODE";
  }

  if (encodeLen >= textLen) {
    return "LEN-ENCODE";
  }

  return "OK";
};

const canEncode: CanEncode = (subject, toEncode) => {
  const statusKey = testEncode(subject, toEncode);
  return statusInfo[statusKey].valid;
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

const encode: Encode = (subject, toEncode, onError) => {
  const statusKey = testEncode(subject, toEncode);
  if (!statusInfo[statusKey].valid) {
    onError?.(statusKey);
    return null;
  }
  const encoded = interpolate(subject, encodeEach(toEncode));
  return encoded.concat(terminator);
};

const mustEncode: MustEncode = (subject, toEncode) => {
  const encoded = interpolate(subject, encodeEach(toEncode));
  return encoded.concat(terminator);
};

export {
  interpolate,
  encodeLetter,
  encodeEach,
  testEncode,
  canEncode,
  encode,
  mustEncode,
};
