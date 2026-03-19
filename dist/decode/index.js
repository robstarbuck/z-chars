"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mustDecode = exports.decode = exports.canDecode = exports.testDecode = void 0;
const z_chars_1 = require("../z-chars");
const status_1 = require("../status");
const testDecode = (toDecode) => {
    if (toDecode.length === 0) {
        return "EMPTY-DECODE";
    }
    if (!toDecode.match(z_chars_1.zCharMatch)) {
        return "ZCHR-DECODE";
    }
    return "OK";
};
exports.testDecode = testDecode;
const canDecode = (toDecode) => {
    const statusKey = testDecode(toDecode);
    return status_1.statusInfo[statusKey].valid;
};
exports.canDecode = canDecode;
const decode = (toDecode, onError) => {
    const statusKey = testDecode(toDecode);
    if (!status_1.statusInfo[statusKey].valid) {
        onError?.(statusKey);
        return null;
    }
    const zSet = toDecode.match(z_chars_1.zCharMatch);
    const codePoints = zSet.map((z) => (0, z_chars_1.codePoint)(z.split("")));
    return String.fromCodePoint(...codePoints);
};
exports.decode = decode;
const mustDecode = (toDecode) => {
    const zSet = toDecode.match(z_chars_1.zCharMatch);
    const codePoints = zSet.map((z) => (0, z_chars_1.codePoint)(z.split("")));
    return String.fromCodePoint(...codePoints);
};
exports.mustDecode = mustDecode;
//# sourceMappingURL=index.js.map