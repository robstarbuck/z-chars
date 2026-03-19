"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visSet = exports.visSetDefault = exports.visualiseEach = exports.visualiseZCharsHTML = exports.visualiseZChars = void 0;
const z_chars_1 = require("../z-chars");
const visualiseZChars = (toDecode, replaceWith = visSet["1to4"]) => {
    const result = toDecode.replaceAll(z_chars_1.zCharMatchWithTerminator, (match) => visualiseEach(match, replaceWith));
    return result;
};
exports.visualiseZChars = visualiseZChars;
const visualiseZCharsHTML = (toDecode, replaceWith = visSet["1to4"]) => {
    const result = toDecode.replaceAll(z_chars_1.zCharMatchWithTerminator, (match) => `<code>${visualiseEach(match, replaceWith)}</code>`);
    return `<p>${result}</p>`;
};
exports.visualiseZCharsHTML = visualiseZCharsHTML;
const visSet = {
    ["1to4"]: ["0", "1", "2", "3"],
    ["harvey"]: ["◓", "◑", "◒", "◐"],
};
exports.visSet = visSet;
const visSetDefault = visSet["1to4"];
exports.visSetDefault = visSetDefault;
const visualiseEach = (zChars, replaceWith) => {
    const eachZ = zChars.split("");
    return eachZ
        .map((zChar) => {
        return replaceWith[z_chars_1.zSet.findIndex((z) => z === zChar)];
    })
        .join("");
};
exports.visualiseEach = visualiseEach;
//# sourceMappingURL=index.js.map