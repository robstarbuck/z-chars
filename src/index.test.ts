import * as zChars from "./index";

test("Decode", () => {
  expect(zChars.decode("A")).toBe("A");
});

test("Encode", () => {
  expect(zChars.encode("A")).toBe("A");
});
