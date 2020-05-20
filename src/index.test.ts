/* eslint-disable prettier/prettier */
import * as t from "./index";

const zChars = t.zSet;

const letter = "A";

test("Encode to ZChars", () => {
  const test = t.toZChars(letter);
  const expected = expect.arrayContaining(zChars);
  expect(test).toEqual(expected);
});

test("Decode to Codepoint", () => {
  const test = t.toCodePoint(t.toZChars(letter));
  const expected = letter.charCodeAt(0);
  expect(test).toEqual(expected);
});

test("Count interpolated zChars", () => {
  const str = [
    "A",
    t.toZChars(letter).join(""),
    "A",
    t.toZChars(letter).join(""),
    "A",
  ].join("");
  const test = t.filterZChars(str);
  expect(test?.length).toEqual(2);
});

describe("splitEnd (3 chars)", () => {
  test.each([
    ["AB", 1, ["A", "B"]],
    ["AB",0, ["AB",""]],
    ["A", 2, ["A", ""]],
    ["AB", 2, ["AB", ""]],
    ["ABC", 2, ["A", "BC"]],
    ["ABCDE", 2, ["ABC", "DE"]],
  ])("Split %s into %i", (a, b, expected) => {
    const test = t.splitEnd(a, b);
    expect(test).toMatchObject(expected);
  });
});


type Test = Array<[string,number,Array<string>]>

const misuse: Test = [
  ["A", -1, ["A"]],
  ["AB", 3, ["A","B"]],
  ["", 1, [""]],
  ["", 2, [""]]
];

const evenGroups: Test = [
  ["A", 1, ["A"]],
  ["AB", 1, ["AB"]],
  ["AB", 2, ["A", "B"]],
  ["ABCD", 2, ["AB", "CD"]],
  ["ABCDEFGHI", 3, ["ABC", "DEF", "GHI"]],
];

const bigGroups: Test = [
  ["ABC", 2 ,["A","BC"]],
  ["ABCDE", 2, ["AB", "CDE"]],
  ["ABCDEFGHI", 2, ["ABCD", "EFGHI"]],
  ["ABCD", 3, ["A", "B", "CD"]],
  ["ABCDEFGHIJ", 3, ["ABC", "DEF", "GHIJ"]],
]

test.each([
  ...misuse,
  ...bigGroups,
  ...evenGroups
])("splitUp %s into %i", (a, b, expected) => {
  const test = t.splitUp(a, b);
  expect(test).toMatchObject(expected);
});

test.each([
  ["ABC", 0, ["ABC"]],
  ["ABC", 1, ["ABC"]],
  ["ABC", 2, ["AB", "C"]],
  ["ABC", 3, ["A", "B", "C"]],
  ["ABC", 5, ["A", "B", "C"]],
])("Split %s into %i (3 chars)", (a, b, expected) => {
  const test = t.splitForZChars(a, b);
  expect(test).toMatchObject(expected);
});

test.each([
  ["ABCDE", 0, ["ABCDE"]],
  ["ABCDE", 1, ["ABCDE"]],
  ["ABCDE", 2, ["ABCD", "E"]],
  ["ABCDE", 3, ["AB", "CD", "E"]],
  ["ABCDE", 4, ["A", "B", "CD", "E"]],
  ["ABCDE", 9, ["A", "B", "C", "D", "E"]]
])("Split %s into %i (5 chars)", (a, b, expected) => {
  const test = t.splitForZChars(a, b);
  expect(test).toMatchObject(expected);
});


test.only.each([
  ["ABCDE", "INO", ["ABCDE"]],
])("Encode %s into %s (5 chars)", (a, b, expected) => {
  const test = t.encode(a, b);
  console.log(test);
  // expect(test).toMatchObject(expected);
});