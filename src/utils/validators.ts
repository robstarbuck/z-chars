import { ZCharsError, EncodingError } from "./errors";
import { zCharMatch } from "../z-chars";
import { splitChars } from "../split";

export const validateSubject = (subject: string): void => {
  if (subject.length === 0) {
    throw new EncodingError("Subject cannot be empty.");
  }
  if (subject.match(zCharMatch)) {
    throw new EncodingError("Subject cannot contain Z-Chars.");
  }
};

export const validateTextToEncode = (toEncode: string, subject: string): void => {
  if (toEncode.length === 0) {
    throw new EncodingError("Text to encode cannot be empty.");
  }
  if (toEncode.match(zCharMatch)) {
    throw new EncodingError("Text to encode cannot contain Z-Chars.");
  }
  if (splitChars(toEncode).length >= splitChars(subject).length) {
    throw new EncodingError("Text to encode is too long for the subject.");
  }
};

export const validateTextToDecode = (toDecode: string): void => {
  if (toDecode.length === 0) {
    throw new ZCharsError("Text to decode cannot be empty.");
  }
  if (!toDecode.match(zCharMatch)) {
    throw new ZCharsError("Text to decode does not contain any Z-Chars.");
  }
};
