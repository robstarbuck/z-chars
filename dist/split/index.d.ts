declare type SplitUnicode = (text: string) => string[];
declare type SplitAcross = (text: string, count: number) => string[];
declare type SplitEnd = (toSplit: string, tailCount: number) => [string, string];
declare type SplitInto = (toSplit: string, count: number) => string[];
declare const splitChars: SplitUnicode;
declare const splitEnd: SplitEnd;
declare const splitInto: SplitInto;
declare const splitAcross: SplitAcross;
export { splitChars, splitEnd, splitInto, splitAcross };
//# sourceMappingURL=index.d.ts.map