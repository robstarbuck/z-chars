import * as t from "./index";

const zChars = t.zChars;

const letter = "A";

test("Encode to ZChars", () => {
  const expected = t.toZChars(letter);
  expect(zChars).toEqual(expect.arrayContaining(expected));
});

test("Decode to Codepoint", () => {
  const expected = t.toZChars(letter);
  expect(t.toCodePoint(expected)).toEqual(letter.charCodeAt(0));
});
