"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vSet = exports.visualiseEach = exports.visualiseZCharsHTML = exports.visualiseZChars = void 0;
var z_chars_1 = require("../z-chars");
var visualiseZChars = function (toDecode) {
    var result = toDecode.replaceAll(z_chars_1.zCharMatch, visualiseEach);
    return result;
};
exports.visualiseZChars = visualiseZChars;
var visualiseZCharsHTML = function (toDecode) {
    var result = toDecode.replaceAll(z_chars_1.zCharMatch, function (match) { return "<code>" + visualiseEach(match) + "</code>"; });
    return "<p>" + result + "</p>";
};
exports.visualiseZCharsHTML = visualiseZCharsHTML;
var vSet = ["➊", "➋", "➌", "➍"];
exports.vSet = vSet;
var visualiseEach = function (zChars) {
    var eachZ = zChars.split("");
    return eachZ
        .map(function (zChar) {
        return vSet[z_chars_1.zSet.findIndex(function (z) { return z === zChar; })];
    })
        .join("");
};
exports.visualiseEach = visualiseEach;
//# sourceMappingURL=index.js.map