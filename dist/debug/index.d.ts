declare type Visualise = (toDecode: string, set?: Set) => string;
declare type Set = [string, string, string, string];
declare const visualiseZChars: Visualise;
declare const visualiseZCharsHTML: Visualise;
declare type SetNames = "1to4" | "harvey";
declare const visSet: Record<SetNames, Set>;
declare const visSetDefault: Set;
declare const visualiseEach: (zChars: string, replaceWith: Set) => string;
export { visualiseZChars, visualiseZCharsHTML, visualiseEach, visSetDefault, visSet, };
//# sourceMappingURL=index.d.ts.map