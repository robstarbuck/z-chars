"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mustEncode = exports.encode = exports.canEncode = exports.testEncode = exports.encodeEach = exports.encodeLetter = exports.interpolate = void 0;
var split_1 = require("../split");
var z_chars_1 = require("../z-chars");
var status_1 = require("../status");
var interpolate = function (subject, zChars) {
    var chars = split_1.splitAcross(subject, zChars.length + 1);
    var interpolated = chars.map(function (c, i) { return c.concat(zChars[i] || ""); });
    return interpolated.join("");
};
exports.interpolate = interpolate;
var testEncode = function (subject, toEncode) {
    var textLen = split_1.splitChars(subject).length;
    var encodeLen = split_1.splitChars(toEncode).length;
    if (textLen === 0) {
        return "EMPTY-SUBJECT";
    }
    if (encodeLen === 0) {
        return "EMPTY-ENCODE";
    }
    if (subject.match(z_chars_1.zCharMatch)) {
        return "ZCHR-SUBJECT";
    }
    if (toEncode.match(z_chars_1.zCharMatch)) {
        return "ZCHR-ENCODE";
    }
    if (encodeLen >= textLen) {
        return "LEN-ENCODE";
    }
    return "OK";
};
exports.testEncode = testEncode;
var canEncode = function (subject, toEncode) {
    var statusKey = testEncode(subject, toEncode);
    return status_1.statusInfo[statusKey].valid;
};
exports.canEncode = canEncode;
var encodeLetter = function (letter) {
    var codeRef = letter.codePointAt(0);
    var zPointers = codeRef === null || codeRef === void 0 ? void 0 : codeRef.toString(z_chars_1.zSet.length).split("").map(Number);
    return (zPointers === null || zPointers === void 0 ? void 0 : zPointers.map(function (p) { return z_chars_1.zSet[p]; }).join("")) || "";
};
exports.encodeLetter = encodeLetter;
var encodeEach = function (toEncode) {
    var letters = split_1.splitChars(toEncode);
    return letters ? letters.map(encodeLetter) : [""];
};
exports.encodeEach = encodeEach;
var encode = function (subject, toEncode, onError) {
    var statusKey = testEncode(subject, toEncode);
    if (!status_1.statusInfo[statusKey].valid) {
        onError === null || onError === void 0 ? void 0 : onError(statusKey);
        return null;
    }
    var encoded = interpolate(subject, encodeEach(toEncode));
    return encoded.concat(z_chars_1.terminator);
};
exports.encode = encode;
var mustEncode = function (subject, toEncode) {
    var encoded = interpolate(subject, encodeEach(toEncode));
    return encoded.concat(z_chars_1.terminator);
};
exports.mustEncode = mustEncode;
//# sourceMappingURL=index.js.map