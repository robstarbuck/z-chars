type SplitUnicode = (text: string) => string[];

type SplitAcross = (text: string, count: number) => string[];

type SplitEnd = (toSplit: string, tailCount: number) => [string, string];

type SplitInto = (toSplit: string, count: number) => string[];

const splitChars: SplitUnicode = (text) => {
  return text?.match(/[\s\S]/gu) || [""];
};

const splitEnd: SplitEnd = (text, count) => {
  const head = text.slice(0, -count);
  const end = text.slice(-count);
  return head ? [head, end] : [end, ""];
};

const splitInto: SplitInto = (text, count) => {
  const { floor, max } = Math;

  const minCount = max(1, count);
  const groupLen = max(1, floor(text.length / minCount));
  const groupMatch = new RegExp(`[\\s\\S]{${groupLen}}`, "g");

  const tailLen = groupLen + (text.length % count);
  const [head, tail] = splitEnd(text, tailLen);

  const matches = head.match(groupMatch) || [""];
  return tail ? matches.concat(tail) : matches;
};

const splitAcross: SplitAcross = (text, count) => {
  if (count <= 1) {
    return [text];
  }
  const [head, tail] = splitEnd(text, 1);
  const groups = head ? splitInto(head, count - 1) : [];
  return tail ? [...groups, tail] : [...groups];
};

export { splitChars, splitEnd, splitInto, splitAcross };
