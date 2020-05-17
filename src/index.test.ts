import * as t from "./index";

const zChars = t.zChars;

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

describe("Split Ends", () => {
  test("One Character", () => {
    const test = t.splitEnd("A", 2);
    expect(test).toMatchObject(["", "A"]);
  });

  test("Two Characters", () => {
    const test = t.splitEnd("AB", 2);
    expect(test).toMatchObject(["", "AB"]);
  });

  test("Three Characters", () => {
    const test = t.splitEnd("ABC", 2);
    expect(test).toMatchObject(["A", "BC"]);
  });

  test("Five Characters", () => {
    const test = t.splitEnd("ABCDE", 2);
    expect(test).toMatchObject(["ABC", "DE"]);
  });
});

describe("Split Up", () => {
  test("No Characters", () => {
    const test = t.splitUp("", 2);
    expect(test).toMatchObject([]);
  });

  test("One Characters", () => {
    const test = t.splitUp("A", 2);
    expect(test).toMatchObject(["A"]);
  });

  test("Four Characters", () => {
    const test = t.splitUp("ABCD", 2);
    expect(test).toMatchObject(["AB", "CD"]);
  });

  test("Five Characters", () => {
    const test = t.splitUp("ABCDE", 2);
    expect(test).toMatchObject(["ABC", "DE"]);
  });

  test("Eight Characters", () => {
    const test = t.splitUp("ABCDEFGH", 2);
    expect(test).toMatchObject(["ABCD", "EFGH"]);
  });

  test("Nine Characters", () => {
    const test = t.splitUp("ABCDEFGHI", 2);
    expect(test).toMatchObject(["ABCDE", "FGHI"]);
  });

  // test("Two Characters", () => {
  //   const test = t.splitUp("AB", 2);
  //   expect(test).toMatchObject(["A", "B"]);
  // });
});
