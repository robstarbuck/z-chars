"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codePoint = exports.zCharMatchWithTerminator = exports.zCharMatch = exports.zSet = exports.terminator = void 0;
const terminator = "\u2069";
exports.terminator = terminator;
const zSet = ["\u2066", "\u202a", "\u202d"];
exports.zSet = zSet;
const zCharMatch = new RegExp(`[${zSet.join("")}]+`, "g");
exports.zCharMatch = zCharMatch;
const zCharMatchWithTerminator = new RegExp(`[${zSet.concat(terminator).join("")}]+`, "g");
exports.zCharMatchWithTerminator = zCharMatchWithTerminator;
const codePoint = (zChars) => {
    const indexes = zChars.map((l) => zSet.indexOf(l));
    return parseInt(indexes.join(""), zSet.length);
};
exports.codePoint = codePoint;
//# sourceMappingURL=index.js.map