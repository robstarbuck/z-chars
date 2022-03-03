"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codePoint = exports.zCharMatch = exports.zSet = exports.terminator = void 0;
var terminator = "\u2069";
exports.terminator = terminator;
var zSet = ["\u2066", "\u202a", "\u202d"];
exports.zSet = zSet;
var zCharMatch = new RegExp("[" + zSet.join("") + "]+", "g");
exports.zCharMatch = zCharMatch;
var codePoint = function (zChars) {
    var indexes = zChars.map(function (l) { return zSet.indexOf(l); });
    return parseInt(indexes.join(""), zSet.length);
};
exports.codePoint = codePoint;
//# sourceMappingURL=index.js.map