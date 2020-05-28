import * as t from "./index";
import * as encode from "./encode";
import * as split from "./split";
import * as zChars from "./z-chars";

const letter = "A";

test("encodeLetter to ZChars", () => {
  const test = encode.encodeLetter(letter);
  const expected = expect.arrayContaining(zChars.zSet);
  expect(test.split("")).toEqual(expected);
});

test("Decode to Codepoint", () => {
  const test = zChars.codePoint(encode.encodeLetter(letter).split(""));
  const expected = letter.charCodeAt(0);
  expect(test).toEqual(expected);
});

test("Count interpolated zChars", () => {
  const str = [
    "A",
    encode.encodeLetter(letter),
    "A",
    encode.encodeLetter(letter),
    "A",
  ].join("");
  const test = str.match(zChars.zCharMatch);
  expect(test?.length).toEqual(2);
});

describe("splitEnd (3 chars)", () => {
  test.each([
    ["AB", 1, ["A", "B"]],
    ["AB", 0, ["AB", ""]],
    ["A", 2, ["A", ""]],
    ["AB", 2, ["AB", ""]],
    ["ABC", 2, ["A", "BC"]],
    ["ABCDE", 2, ["ABC", "DE"]],
  ])("splitEnd %s into %i", (a, b, expected) => {
    const test = split.splitEnd(a, b);
    expect(test).toMatchObject(expected);
  });
});

type Test = Array<[string, number, Array<string>]>;

const misuse: Test = [
  ["A", -1, ["A"]],
  ["AB", 3, ["A", "B"]],
  ["", 1, [""]],
  ["", 2, [""]],
];

const evenGroups: Test = [
  ["A", 1, ["A"]],
  ["AB", 1, ["AB"]],
  ["AB", 2, ["A", "B"]],
  ["ABCD", 2, ["AB", "CD"]],
  ["ABCDEFGHI", 3, ["ABC", "DEF", "GHI"]],
];

const bigGroups: Test = [
  ["ABC", 2, ["A", "BC"]],
  ["ABCDE", 2, ["AB", "CDE"]],
  ["ABCDEFGHI", 2, ["ABCD", "EFGHI"]],
  ["ABCD", 3, ["A", "B", "CD"]],
  // [`ABCD`, 2, ["A"]],
  ["ABCDEFGHIJ", 3, ["ABC", "DEF", "GHIJ"]],
];

const newLines: Test = [[`AB\nBC`, 2, ["AB", "\nBC"]]];

const emoji: Test = [["🍑🍑", 2, ["🍑", "🍑"]]];

test.only.each([...newLines])("splitUp %s into %i", (a, b, expected) => {
  const test = split.splitInto(a, b);
  expect(test).toMatchObject(expected);
});

test.each([
  ["ABC", 0, ["ABC"]],
  ["ABC", 1, ["ABC"]],
  ["ABC", 2, ["AB", "C"]],
  ["ABC", 3, ["A", "B", "C"]],
  ["ABC", 5, ["A", "B", "C"]],
])("splitForZChars %s into %i (3 chars)", (a, b, expected) => {
  const test = split.splitAcross(a, b);
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
  const test = split.splitAcross(a, b);
  expect(test).toMatchObject(expected);
});

// test.each([
//   [`AB\nCDE`, 0, ["AB\nCDE"]],
//   [`AB\nCDE`, 2, ["AB\nCDE"]],
// ])("TEST4 splitForZChars %s into %i (5 chars)", (a, b, expected) => {
//   const test = split.splitAcross(a, b);
//   expect(test).toMatchObject(expected);
// });

test("encode contains Zchars", () => {
  const subject = "ABCDE";
  const message = "MSG";
  const test = t.encode(subject, message);
  expect(test).toMatch(zChars.zCharMatch);
});

test.each([
  ["ABCDE", "ABCDE"],
  ["A", "👨‍👨‍👧‍👧"],
])("encode returns subject", (subject, message) => {
  const test = t.encode(subject, message);
  expect(test).toEqual(subject);
});

test("decode matches hardcoded", () => {
  const test = t.decode(`A‭‭‪‭B‪⁦⁦⁦‭C‭‪‭‭DE`);
  const expected = "MSG";
  expect(test).toEqual(expected);
});

test("decode matches encode", () => {
  const subject = "ABCDE";
  const message = "MSG";
  const encoded = t.encode(subject, message);
  const test = t.decode(encoded);
  expect(test).toEqual(message);
});

test.each([
  ["ABCDE", "ZYXW"],
  ["ABCDE", "ZYXW"],
  ["ABCD", "🍑🍑🍑"],
  ["A🍑C🍆E", "ZYXW"],
  ["ABCDEFGH", "👨‍👨‍👧‍👧"],
])("decode matches input", (subject, message) => {
  const encoded = t.encode(subject, message);
  const test = t.decode(encoded);
  expect(test).toEqual(message);
});
