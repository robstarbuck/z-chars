"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitAcross = exports.splitInto = exports.splitEnd = exports.splitChars = void 0;
const splitChars = (text) => {
    return text?.match(/[\s\S]/gu) || [];
};
exports.splitChars = splitChars;
const splitEnd = (text, count) => {
    const head = text.slice(0, -count);
    const end = text.slice(-count);
    return head ? [head, end] : [end, ""];
};
exports.splitEnd = splitEnd;
const splitInto = (text, count) => {
    const { floor, max } = Math;
    const minCount = max(1, count);
    const groupLen = max(1, floor(text.length / minCount));
    const groupMatch = new RegExp(`[\\s\\S]{${groupLen}}`, "g");
    const tailLen = groupLen + (text.length % count);
    const [head, tail] = splitEnd(text, tailLen);
    const matches = head.match(groupMatch) || [""];
    return tail ? matches.concat(tail) : matches;
};
exports.splitInto = splitInto;
const splitAcross = (text, count) => {
    if (count <= 1) {
        return [text];
    }
    const [head, tail] = splitEnd(text, 1);
    const groups = head ? splitInto(head, count - 1) : [];
    return tail ? [...groups, tail] : [...groups];
};
exports.splitAcross = splitAcross;
//# sourceMappingURL=index.js.map