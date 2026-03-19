"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const z_chars_1 = require("../z-chars");
const encode_1 = require("../encode");
const decode_1 = require("../decode");
test("Decode to Codepoint", () => {
    const letter = "A";
    const test = (0, z_chars_1.codePoint)((0, encode_1.encodeLetter)(letter).split(""));
    const expected = letter.charCodeAt(0);
    expect(test).toEqual(expected);
});
test("decode matches hardcoded", () => {
    const test = (0, decode_1.mustDecode)(`A‭‭‪‭B‪⁦⁦⁦‭C‭‪‭‭DE`);
    const expected = "MSG";
    expect(test).toEqual(expected);
});
test("decode matches encode", () => {
    const subject = "ABCDE";
    const message = "MSG";
    const encoded = (0, encode_1.mustEncode)(subject, message);
    const test = (0, decode_1.mustDecode)(encoded);
    expect(test).toEqual(message);
});
test.each([
    ["ABCDEFGHI", "A\nBC"],
    ["ABCDE", "ZYXW"],
    ["ABCD", "🍑🍑🍑"],
    ["A🍑C🍆E", "ZYXW"],
    ["ABCDEFGH", "👨‍👨‍👧‍👧"],
])("decode matches input", (subject, message) => {
    const encoded = (0, encode_1.mustEncode)(subject, message);
    const test = (0, decode_1.mustDecode)(encoded);
    expect(test).toEqual(message);
});
//# sourceMappingURL=test.js.map