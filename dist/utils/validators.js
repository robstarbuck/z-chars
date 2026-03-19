"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTextToDecode = exports.validateTextToEncode = exports.validateSubject = void 0;
const errors_1 = require("./errors");
const z_chars_1 = require("../z-chars");
const split_1 = require("../split");
const validateSubject = (subject) => {
    if (subject.length === 0) {
        throw new errors_1.EncodingError("Subject cannot be empty.");
    }
    if (subject.match(z_chars_1.zCharMatch)) {
        throw new errors_1.EncodingError("Subject cannot contain Z-Chars.");
    }
};
exports.validateSubject = validateSubject;
const validateTextToEncode = (toEncode, subject) => {
    if (toEncode.length === 0) {
        throw new errors_1.EncodingError("Text to encode cannot be empty.");
    }
    if (toEncode.match(z_chars_1.zCharMatch)) {
        throw new errors_1.EncodingError("Text to encode cannot contain Z-Chars.");
    }
    if ((0, split_1.splitChars)(toEncode).length >= (0, split_1.splitChars)(subject).length) {
        throw new errors_1.EncodingError("Text to encode is too long for the subject.");
    }
};
exports.validateTextToEncode = validateTextToEncode;
const validateTextToDecode = (toDecode) => {
    if (toDecode.length === 0) {
        throw new errors_1.ZCharsError("Text to decode cannot be empty.");
    }
    if (!toDecode.match(z_chars_1.zCharMatch)) {
        throw new errors_1.ZCharsError("Text to decode does not contain any Z-Chars.");
    }
};
exports.validateTextToDecode = validateTextToDecode;
//# sourceMappingURL=validators.js.map