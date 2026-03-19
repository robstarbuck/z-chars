"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const z_chars_1 = require("../z-chars");
const encode_1 = require("../encode");
test("encode contains Zchars", () => {
    const subject = "ABCDE";
    const message = "MSG";
    const test = (0, encode_1.encode)(subject, message);
    expect(test).toMatch(z_chars_1.zCharMatch);
});
test.each([
    ["ABCDE", "ABCDE"],
    ["A", "👨‍👨‍👧‍👧"],
])("encode returns null", (subject, message) => {
    const test = (0, encode_1.encode)(subject, message);
    expect(test).toEqual(null);
});
//# sourceMappingURL=test.js.map