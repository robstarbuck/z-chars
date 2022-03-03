"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe("splitEnd (3 chars)", function () {
    test.each([
        ["AB", 1, ["A", "B"]],
        ["AB", 0, ["AB", ""]],
        ["A", 2, ["A", ""]],
        ["AB", 2, ["AB", ""]],
        ["ABC", 2, ["A", "BC"]],
        ["ABCDE", 2, ["ABC", "DE"]],
    ])("splitEnd %s into %i", function (a, b, expected) {
        var test = _1.splitEnd(a, b);
        expect(test).toMatchObject(expected);
    });
});
var misuse = [
    ["A", -1, ["A"]],
    ["AB", 3, ["A", "B"]],
    ["", 1, [""]],
    ["", 2, [""]],
];
var evenGroups = [
    ["A", 1, ["A"]],
    ["AB", 1, ["AB"]],
    ["AB", 2, ["A", "B"]],
    ["ABCD", 2, ["AB", "CD"]],
    ["ABCDEFGHI", 3, ["ABC", "DEF", "GHI"]],
];
var bigGroups = [
    ["ABC", 2, ["A", "BC"]],
    ["ABCDE", 2, ["AB", "CDE"]],
    ["ABCDEFGHI", 2, ["ABCD", "EFGHI"]],
    ["ABCD", 3, ["A", "B", "CD"]],
    ["ABCDEFGHIJ", 3, ["ABC", "DEF", "GHIJ"]],
];
var newLines = [["AB\nBC", 2, ["AB", "\nBC"]]];
var emoji = [["🍑🍑", 2, ["🍑", "🍑"]]];
test.each(__spreadArrays(misuse, evenGroups, bigGroups, newLines, emoji))("splitInto %s into %i", function (a, b, expected) {
    var test = _1.splitInto(a, b);
    expect(test).toMatchObject(expected);
});
test.each([
    ["ABC", 0, ["ABC"]],
    ["ABC", 1, ["ABC"]],
    ["ABC", 2, ["AB", "C"]],
    ["ABC", 3, ["A", "B", "C"]],
    ["ABC", 5, ["A", "B", "C"]],
])("splitForZChars %s into %i (3 chars)", function (a, b, expected) {
    var test = _1.splitAcross(a, b);
    expect(test).toMatchObject(expected);
});
test.each([
    ["ABCDE", 0, ["ABCDE"]],
    ["ABCDE", 1, ["ABCDE"]],
    ["ABCDE", 2, ["ABCD", "E"]],
    ["ABCDE", 3, ["AB", "CD", "E"]],
    ["ABCDE", 4, ["A", "B", "CD", "E"]],
    ["ABCDE", 9, ["A", "B", "C", "D", "E"]],
])("splitForZChars %s into %i (5 chars)", function (a, b, expected) {
    var test = _1.splitAcross(a, b);
    expect(test).toMatchObject(expected);
});
//# sourceMappingURL=test.js.map