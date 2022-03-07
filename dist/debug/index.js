"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.visSet = exports.visSetDefault = exports.visualiseEach = exports.visualiseZCharsHTML = exports.visualiseZChars = void 0;
var z_chars_1 = require("../z-chars");
var visualiseZChars = function (toDecode, replaceWith) {
    if (replaceWith === void 0) { replaceWith = visSet["1to4"]; }
    var result = toDecode.replaceAll(z_chars_1.zCharMatchWithTerminator, function (match) {
        return visualiseEach(match, replaceWith);
    });
    return result;
};
exports.visualiseZChars = visualiseZChars;
var visualiseZCharsHTML = function (toDecode, replaceWith) {
    if (replaceWith === void 0) { replaceWith = visSet["1to4"]; }
    var result = toDecode.replaceAll(z_chars_1.zCharMatchWithTerminator, function (match) { return "<code>" + visualiseEach(match, replaceWith) + "</code>"; });
    return "<p>" + result + "</p>";
};
exports.visualiseZCharsHTML = visualiseZCharsHTML;
var visSet = (_a = {},
    _a["1to4"] = ["0", "1", "2", "3"],
    _a["harvey"] = ["◓", "◑", "◒", "◐"],
    _a);
exports.visSet = visSet;
var visSetDefault = visSet["1to4"];
exports.visSetDefault = visSetDefault;
var visualiseEach = function (zChars, replaceWith) {
    var eachZ = zChars.split("");
    return eachZ
        .map(function (zChar) {
        return replaceWith[z_chars_1.zSet.findIndex(function (z) { return z === zChar; })];
    })
        .join("");
};
exports.visualiseEach = visualiseEach;
//# sourceMappingURL=index.js.map