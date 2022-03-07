import { zCharMatchWithTerminator, zSet } from "../z-chars";

type Visualise = (toDecode: string, set?: Set) => string;

type Set = [string, string, string, string];

const visualiseZChars: Visualise = (toDecode, replaceWith = visSet["1to4"]) => {
  const result = toDecode.replaceAll(zCharMatchWithTerminator, (match) =>
    visualiseEach(match, replaceWith)
  );
  return result;
};

const visualiseZCharsHTML: Visualise = (
  toDecode,
  replaceWith = visSet["1to4"]
) => {
  const result = toDecode.replaceAll(
    zCharMatchWithTerminator,
    (match) => `<code>${visualiseEach(match, replaceWith)}</code>`
  );
  return `<p>${result}</p>`;
};

type SetNames = "1to4" | "harvey";

const visSet: Record<SetNames, Set> = {
  ["1to4"]: ["0", "1", "2", "3"],
  ["harvey"]: ["◓", "◑", "◒", "◐"],
};

const visSetDefault = visSet["1to4"];

const visualiseEach = (zChars: string, replaceWith: Set) => {
  const eachZ = zChars.split("");
  return eachZ
    .map((zChar) => {
      return replaceWith[zSet.findIndex((z) => z === zChar)];
    })
    .join("");
};

export {
  visualiseZChars,
  visualiseZCharsHTML,
  visualiseEach,
  visSetDefault,
  visSet,
};
