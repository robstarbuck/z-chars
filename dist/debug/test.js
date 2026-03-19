"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const z_chars_1 = require("../z-chars");
test("basic replacement", () => {
    const test = `A${index_1.visSetDefault[0]}B`;
    const expected = `A${z_chars_1.zSet[0]}B`.replaceAll(z_chars_1.zCharMatch, (match) => (0, index_1.visualiseEach)(match, index_1.visSetDefault));
    expect(test).toEqual(expected);
});
test("visualise shows character", () => {
    const test = `A${z_chars_1.zSet[0]}${z_chars_1.zSet[1]}${z_chars_1.zSet[2]}B${z_chars_1.zSet[1]}C`;
    const visible = `A${index_1.visSetDefault[0]}${index_1.visSetDefault[1]}${index_1.visSetDefault[2]}B${index_1.visSetDefault[1]}C`;
    const expected = (0, index_1.visualiseZChars)(test);
    expect(visible).toEqual(expected);
});
//# sourceMappingURL=test.js.map