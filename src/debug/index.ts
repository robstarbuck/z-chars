import { zCharMatch, zSet } from "../z-chars";

type Visualise = (toDecode: string) => string;

const visualiseZChars: Visualise = (toDecode) => {
  const result = toDecode.replaceAll(zCharMatch, visualiseEach);
  return result;
};

const visualiseZCharsHTML: Visualise = (toDecode) => {
  const result = toDecode.replaceAll(
    zCharMatch,
    (match) => `<code>${visualiseEach(match)}</code>`
  );
  return `<p>${result}</p>`;
};

const vSet = ["➊", "➋", "➌", "➍"];

const visualiseEach = (zChars: string) => {
  const eachZ = zChars.split("");
  return eachZ
    .map((zChar) => {
      return vSet[zSet.findIndex((z) => z === zChar)];
    })
    .join("");
};

export { visualiseZChars, visualiseZCharsHTML, visualiseEach, vSet };
