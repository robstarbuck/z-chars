import { codePoint } from "../z-chars";
import { encodeLetter, encode } from "../encode";
import { decode } from "../decode";

test("Decode to Codepoint", () => {
  const letter = "A";
  const test = codePoint(encodeLetter(letter).split(""));
  const expected = letter.charCodeAt(0);
  expect(test).toEqual(expected);
});

test("decode matches hardcoded", () => {
  const test = decode(`A‭‭‪‭B‪⁦⁦⁦‭C‭‪‭‭DE`);
  const expected = "MSG";
  expect(test).toEqual(expected);
});

test("decode matches encode", () => {
  const subject = "ABCDE";
  const message = "MSG";
  const encoded = encode(subject, message);
  const test = decode(encoded);
  expect(test).toEqual(message);
});

test.each([
  ["ABCDEFGHI", "A\nBC"],
  ["ABCDE", "ZYXW"],
  ["ABCD", "🍑🍑🍑"],
  ["A🍑C🍆E", "ZYXW"],
  ["ABCDEFGH", "👨‍👨‍👧‍👧"],
])("decode matches input", (subject, message) => {
  const encoded = encode(subject, message);
  const test = decode(encoded);
  expect(test).toEqual(message);
});
