"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mustDecode = exports.decode = exports.canDecode = exports.testDecode = void 0;
var z_chars_1 = require("../z-chars");
var status_1 = require("../status");
var testDecode = function (toDecode) {
    if (toDecode.length === 0) {
        return "EMPTY-DECODE";
    }
    if (!toDecode.match(z_chars_1.zCharMatch)) {
        return "ZCHR-DECODE";
    }
    return "OK";
};
exports.testDecode = testDecode;
var canDecode = function (toDecode) {
    var statusKey = testDecode(toDecode);
    return status_1.statusInfo[statusKey].valid;
};
exports.canDecode = canDecode;
var decode = function (toDecode) {
    var zSet = toDecode.match(z_chars_1.zCharMatch);
    if (!zSet) {
        return null;
    }
    var codePoints = zSet === null || zSet === void 0 ? void 0 : zSet.map(function (z) { return z_chars_1.codePoint(z.split("")); });
    return String.fromCodePoint.apply(String, codePoints);
};
exports.decode = decode;
var mustDecode = function (toDecode) {
    var zSet = toDecode.match(z_chars_1.zCharMatch);
    var codePoints = zSet.map(function (z) { return z_chars_1.codePoint(z.split("")); });
    return String.fromCodePoint.apply(String, codePoints);
};
exports.mustDecode = mustDecode;
//# sourceMappingURL=index.js.map