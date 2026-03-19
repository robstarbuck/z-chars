"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("splitEnd (3 chars)", () => {
    test.each([
        ["AB", 1, ["A", "B"]],
        ["AB", 0, ["AB", ""]],
        ["A", 2, ["A", ""]],
        ["AB", 2, ["AB", ""]],
        ["ABC", 2, ["A", "BC"]],
        ["ABCDE", 2, ["ABC", "DE"]],
    ])("splitEnd %s into %i", (a, b, expected) => {
        const test = (0, _1.splitEnd)(a, b);
        expect(test).toMatchObject(expected);
    });
});
const misuse = [
    ["A", -1, ["A"]],
    ["AB", 3, ["A", "B"]],
    ["", 1, [""]],
    ["", 2, [""]],
];
const evenGroups = [
    ["A", 1, ["A"]],
    ["AB", 1, ["AB"]],
    ["AB", 2, ["A", "B"]],
    ["ABCD", 2, ["AB", "CD"]],
    ["ABCDEFGHI", 3, ["ABC", "DEF", "GHI"]],
];
const bigGroups = [
    ["ABC", 2, ["A", "BC"]],
    ["ABCDE", 2, ["AB", "CDE"]],
    ["ABCDEFGHI", 2, ["ABCD", "EFGHI"]],
    ["ABCD", 3, ["A", "B", "CD"]],
    ["ABCDEFGHIJ", 3, ["ABC", "DEF", "GHIJ"]],
];
const newLines = [[`AB\nBC`, 2, ["AB", "\nBC"]]];
const emoji = [["🍑🍑", 2, ["🍑", "🍑"]]];
test.each([...misuse, ...evenGroups, ...bigGroups, ...newLines, ...emoji])("splitInto %s into %i", (a, b, expected) => {
    const test = (0, _1.splitInto)(a, b);
    expect(test).toMatchObject(expected);
});
test.each([
    ["ABC", 0, ["ABC"]],
    ["ABC", 1, ["ABC"]],
    ["ABC", 2, ["AB", "C"]],
    ["ABC", 3, ["A", "B", "C"]],
    ["ABC", 5, ["A", "B", "C"]],
])("splitForZChars %s into %i (3 chars)", (a, b, expected) => {
    const test = (0, _1.splitAcross)(a, b);
    expect(test).toMatchObject(expected);
});
test.each([
    ["ABCDE", 0, ["ABCDE"]],
    ["ABCDE", 1, ["ABCDE"]],
    ["ABCDE", 2, ["ABCD", "E"]],
    ["ABCDE", 3, ["AB", "CD", "E"]],
    ["ABCDE", 4, ["A", "B", "CD", "E"]],
    ["ABCDE", 9, ["A", "B", "C", "D", "E"]],
])("splitForZChars %s into %i (5 chars)", (a, b, expected) => {
    const test = (0, _1.splitAcross)(a, b);
    expect(test).toMatchObject(expected);
});
//# sourceMappingURL=test.js.map