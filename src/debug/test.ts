import { visualiseEach, visualiseZChars, visSetDefault as vSet } from "./index";
import { zCharMatch, zSet } from "../z-chars";

test("basic replacement", () => {
  const test = `A${vSet[0]}B`;
  const expected = `A${zSet[0]}B`.replaceAll(zCharMatch, visualiseEach);
  expect(test).toEqual(expected);
});

test("visualise shows character", () => {
  const test = `A${zSet[0]}${zSet[1]}${zSet[2]}B${zSet[1]}C`;
  const visible = `A${vSet[0]}${vSet[1]}${vSet[2]}B${vSet[1]}C`;
  const expected = visualiseZChars(test);
  expect(visible).toEqual(expected);
});
