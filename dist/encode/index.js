"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mustEncode = exports.encode = exports.canEncode = exports.testEncode = exports.encodeEach = exports.encodeLetter = exports.interpolate = void 0;
const split_1 = require("../split");
const z_chars_1 = require("../z-chars");
const status_1 = require("../status");
const interpolate = (subject, zChars) => {
    const chars = (0, split_1.splitAcross)(subject, zChars.length + 1);
    const interpolated = chars.map((c, i) => c.concat(zChars[i] || ""));
    return interpolated.join("");
};
exports.interpolate = interpolate;
const testEncode = (subject, toEncode) => {
    const textLen = (0, split_1.splitChars)(subject).length;
    const encodeLen = (0, split_1.splitChars)(toEncode).length;
    const getStatus = (code) => ({
        code,
        ...status_1.statusInfo[code],
    });
    if (textLen === 0) {
        return getStatus("EMPTY-SUBJECT");
    }
    if (encodeLen === 0) {
        return getStatus("EMPTY-ENCODE");
    }
    if (subject.match(z_chars_1.zCharMatch)) {
        return getStatus("ZCHR-SUBJECT");
    }
    if (toEncode.match(z_chars_1.zCharMatch)) {
        return getStatus("ZCHR-ENCODE");
    }
    if (encodeLen >= textLen) {
        return getStatus("LEN-ENCODE");
    }
    return getStatus("OK");
};
exports.testEncode = testEncode;
const canEncode = (subject, toEncode) => {
    const status = testEncode(subject, toEncode);
    return status.valid;
};
exports.canEncode = canEncode;
const encodeLetter = (letter) => {
    const codeRef = letter.codePointAt(0);
    const zPointers = codeRef?.toString(z_chars_1.zSet.length).split("").map(Number);
    return zPointers?.map((p) => z_chars_1.zSet[p]).join("") || "";
};
exports.encodeLetter = encodeLetter;
const encodeEach = (toEncode) => {
    const letters = (0, split_1.splitChars)(toEncode);
    return letters ? letters.map(encodeLetter) : [""];
};
exports.encodeEach = encodeEach;
const encode = (subject, toEncode, onError) => {
    const status = testEncode(subject, toEncode);
    if (!status.valid) {
        onError?.(status);
        return null;
    }
    const encoded = interpolate(subject, encodeEach(toEncode));
    return encoded.concat(z_chars_1.terminator);
};
exports.encode = encode;
const mustEncode = (subject, toEncode) => {
    const encoded = interpolate(subject, encodeEach(toEncode));
    return encoded.concat(z_chars_1.terminator);
};
exports.mustEncode = mustEncode;
//# sourceMappingURL=index.js.map