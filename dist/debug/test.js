"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var z_chars_1 = require("../z-chars");
test("basic replacement", function () {
    var test = "A" + index_1.visSetDefault[0] + "B";
    var expected = ("A" + z_chars_1.zSet[0] + "B").replaceAll(z_chars_1.zCharMatch, index_1.visualiseEach);
    expect(test).toEqual(expected);
});
test("visualise shows character", function () {
    var test = "A" + z_chars_1.zSet[0] + z_chars_1.zSet[1] + z_chars_1.zSet[2] + "B" + z_chars_1.zSet[1] + "C";
    var visible = "A" + index_1.visSetDefault[0] + index_1.visSetDefault[1] + index_1.visSetDefault[2] + "B" + index_1.visSetDefault[1] + "C";
    var expected = index_1.visualiseZChars(test);
    expect(visible).toEqual(expected);
});
//# sourceMappingURL=test.js.map