type SplitUnicode = (text: string) => string[];
type SplitAcross = (text: string, count: number) => string[];
type SplitEnd = (toSplit: string, tailCount: number) => [string, string];
type SplitInto = (toSplit: string, count: number) => string[];
declare const splitChars: SplitUnicode;
declare const splitEnd: SplitEnd;
declare const splitInto: SplitInto;
declare const splitAcross: SplitAcross;
export { splitChars, splitEnd, splitInto, splitAcross };
//# sourceMappingURL=index.d.ts.map