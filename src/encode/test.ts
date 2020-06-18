import { zCharMatch } from "../z-chars";
import { encode } from "../encode";

test("encode contains Zchars", () => {
  const subject = "ABCDE";
  const message = "MSG";
  const test = encode(subject, message);
  expect(test).toMatch(zCharMatch);
});

test.each([
  ["ABCDE", "ABCDE"],
  ["A", "👨‍👨‍👧‍👧"],
])("encode returns null", (subject, message) => {
  const test = encode(subject, message);
  expect(test).toEqual(null);
});
