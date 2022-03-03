"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var z_chars_1 = require("../z-chars");
var encode_1 = require("../encode");
test("encode contains Zchars", function () {
    var subject = "ABCDE";
    var message = "MSG";
    var test = encode_1.encode(subject, message);
    expect(test).toMatch(z_chars_1.zCharMatch);
});
test.each([
    ["ABCDE", "ABCDE"],
    ["A", "👨‍👨‍👧‍👧"],
])("encode returns null", function (subject, message) {
    var test = encode_1.encode(subject, message);
    expect(test).toEqual(null);
});
//# sourceMappingURL=test.js.map