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

describe("Split Ends", () => {
  test("One Character", () => {
    const test = t.splitEnd("AB", 1);
    expect(test).toMatchObject(["A", "B"]);
  });

  test("One Character", () => {
    const test = t.splitEnd("A", 2);
    expect(test).toMatchObject(["A", undefined]);
  });

  test("Two Characters", () => {
    const test = t.splitEnd("AB", 2);
    expect(test).toMatchObject(["AB", undefined]);
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

describe("Split Into 1", () => {
  test("No Characters", () => {
    const test = t.splitUp("A", 0);
    expect(test).toMatchObject([]);
  });
});

describe("Split Into 1", () => {
  test("No Characters", () => {
    const test = t.splitUp("", 1);
    expect(test).toMatchObject([]);
  });

  test("One Characters", () => {
    const test = t.splitUp("A", 1);
    expect(test).toMatchObject(["A"]);
  });

  test("Four Characters", () => {
    const test = t.splitUp("ABCD", 1);
    expect(test).toMatchObject(["ABCD"]);
  });
});

describe("Split Into 2", () => {
  test("No Characters", () => {
    const test = t.splitUp("", 2);
    expect(test).toMatchObject([]);
  });

  test("One Characters", () => {
    const test = t.splitUp("A", 2);
    expect(test).toMatchObject([]);
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
});

describe("Split into 3", () => {
  test.each([
    ["ABC", 0, ["ABC"]],
    ["ABC", 1, ["ABC"]],
    ["ABC", 2, ["AB", "C"]],
    ["ABC", 3, ["A", "B", "C"]],
    ["ABC", 4, ["A", "B", "C"]],
  ])("Split %s into %i", (a, b, expected) => {
    const toInterpolate = 4;
    const test = ["ABC"];
    const expect = ["A", "B", "C"];
  });
  test.each([
    ["ABCDE", 0, ["ABCDE"]],
    ["ABCDE", 1, ["ABCDE"]],
    ["ABCDE", 2, ["ABCD", "E"]],
    ["ABCDE", 3, ["AB", "CD", "E"]],
    ["ABCDE", 4, ["A", "B", "C"]],
  ])("Split %s into %i", (a, b, expected) => {
    const test = t.splitForZChars(a, b);
    expect(test).toMatchObject(expected);
  });
});

describe("Split into 5", () => {
  test("No characters", () => {
    const test = ["ABCDE"];
    const toInterpolate = 0;
    const expect = ["ABCDE"];
  });

  test("One characters", () => {
    const toInterpolate = 1;
    const test = ["ABCDE"];
    const expect = ["ABCDE", "E"];
  });

  test("Two characters", () => {
    const toInterpolate = 2;
    const test = ["ABCDE"];
    const expect = ["A", "B", "C"];
  });

  test("Three characters", () => {
    const toInterpolate = 3;
    const test = ["ABCDE"];
    const expect = ["A", "B", "C"];
  });

  test("Four characters", () => {
    const toInterpolate = 4;
    const test = ["ABCDE"];
    const expect = ["A", "B", "C"];
  });
});
