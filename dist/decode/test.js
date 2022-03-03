"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var z_chars_1 = require("../z-chars");
var encode_1 = require("../encode");
var decode_1 = require("../decode");
test("Decode to Codepoint", function () {
    var letter = "A";
    var test = z_chars_1.codePoint(encode_1.encodeLetter(letter).split(""));
    var expected = letter.charCodeAt(0);
    expect(test).toEqual(expected);
});
test("decode matches hardcoded", function () {
    var test = decode_1.mustDecode("A\u202D\u202D\u202A\u202DB\u202A\u2066\u2066\u2066\u202DC\u202D\u202A\u202D\u202DDE");
    var expected = "MSG";
    expect(test).toEqual(expected);
});
test("decode matches encode", function () {
    var subject = "ABCDE";
    var message = "MSG";
    var encoded = encode_1.mustEncode(subject, message);
    var test = decode_1.mustDecode(encoded);
    expect(test).toEqual(message);
});
test.each([
    ["ABCDEFGHI", "A\nBC"],
    ["ABCDE", "ZYXW"],
    ["ABCD", "🍑🍑🍑"],
    ["A🍑C🍆E", "ZYXW"],
    ["ABCDEFGH", "👨‍👨‍👧‍👧"],
])("decode matches input", function (subject, message) {
    var encoded = encode_1.mustEncode(subject, message);
    var test = decode_1.mustDecode(encoded);
    expect(test).toEqual(message);
});
//# sourceMappingURL=test.js.map