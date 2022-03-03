"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitAcross = exports.splitInto = exports.splitEnd = exports.splitChars = void 0;
var splitChars = function (text) {
    return (text === null || text === void 0 ? void 0 : text.match(/[\s\S]/gu)) || [];
};
exports.splitChars = splitChars;
var splitEnd = function (text, count) {
    var head = text.slice(0, -count);
    var end = text.slice(-count);
    return head ? [head, end] : [end, ""];
};
exports.splitEnd = splitEnd;
var splitInto = function (text, count) {
    var floor = Math.floor, max = Math.max;
    var minCount = max(1, count);
    var groupLen = max(1, floor(text.length / minCount));
    var groupMatch = new RegExp("[\\s\\S]{" + groupLen + "}", "g");
    var tailLen = groupLen + (text.length % count);
    var _a = splitEnd(text, tailLen), head = _a[0], tail = _a[1];
    var matches = head.match(groupMatch) || [""];
    return tail ? matches.concat(tail) : matches;
};
exports.splitInto = splitInto;
var splitAcross = function (text, count) {
    if (count <= 1) {
        return [text];
    }
    var _a = splitEnd(text, 1), head = _a[0], tail = _a[1];
    var groups = head ? splitInto(head, count - 1) : [];
    return tail ? __spreadArrays(groups, [tail]) : __spreadArrays(groups);
};
exports.splitAcross = splitAcross;
//# sourceMappingURL=index.js.map