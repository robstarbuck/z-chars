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
    ["A", 2, ["A", undefined]],
    ["AB", 2, ["AB", undefined]],
    ["ABC", 2, ["A", "BC"]],
    ["ABCDE", 2, ["ABC", "DE"]],
  ])("Split %s into %i", (a, b, expected) => {
    const test = t.splitEnd(a, b);
    expect(test).toMatchObject(expected);
  });
});

describe("splitUp (3 chars)", () => {
  test.each([
    ["A", -1, ["A"]],
    ["A", 0, ["A"]],
    ["", 1, [""]],
    ["A", 1, ["A"]],
    ["ABCD", 1, ["ABCD"]],
    ["", 2, [""]],
    ["A", 2, ["A"]],
    ["AB", 2, ["A", "B"]],
    ["ABCD", 2, ["AB", "CD"]],
    ["ABCDE", 2, ["ABC", "DE"]],
    ["ABCDEFGH", 2, ["ABCD", "EFGH"]],
    ["ABCDEFGHI", 2, ["ABCDE", "FGHI"]],
    ["ABCD", 3, ["AB", "C", "D"]],
    ["ABCDE", 4, ["AB", "C", "D", "E"]],
    ["ABCDE", 7, ["A", "B", "C", "D", "E"]],
    ["ABCDEFGHIJ", 3, ["ABCD", "EFG", "HIJ"]],
  ])("Split %s into %i", (a, b, expected) => {
    const test = t.splitUp(a, b);
    expect(test).toMatchObject(expected);
  });
});

describe("splitForZChars", () => {
  test.each([
    ["ABC", 0, ["ABC"]],
    ["ABC", 1, ["ABC"]],
    ["ABC", 2, ["AB", "C"]],
    ["ABC", 3, ["A", "B", "C"]],
    ["ABC", 5, ["A", "B", "C"]],
    ["ABC", 1, ["ABC"]],
    ["ABC", 2, ["AB", "C"]],
    ["ABC", 3, ["A", "B", "C"]],
    ["ABC", 4, ["A", "B", "C"]],
  ])("Split %s into %i (3 chars)", (a, b, expected) => {
    const test = t.splitForZChars(a, b);
    expect(test).toMatchObject(expected);
  });

  test.each([
    ["ABCDE", 0, ["ABCDE"]],
    ["ABCDE", 1, ["ABCDE"]],
    ["ABCDE", 2, ["ABCD", "E"]],
    ["ABCDE", 3, ["AB", "CD", "E"]],
    ["ABCDE", 4, ["AB", "C", "D", "E"]],
    ["ABCDE", 5, ["A","B", "C", "D", "E"]],
    ["ABCDE", 9, ["A","B", "C", "D", "E"]]
  ])("Split %s into %i (5 chars)", (a, b, expected) => {
    const test = t.splitForZChars(a, b);
    expect(test).toMatchObject(expected);
  });
});
