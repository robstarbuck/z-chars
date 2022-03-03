import { Statuscode } from "../status";
declare type Interpolate = (subject: string, zChars: string[]) => string;
declare type _OnError = (error: Statuscode) => void;
declare type CanEncode = (subject: string, toEncode: string) => boolean;
declare type TestEncoding = (subject: string, toEncode: string) => Statuscode;
declare type EncodeLetter = (chars: string) => string;
declare type EncodeEach = (chars: string) => string[];
declare type Encode = (subject: string, toEncode: string, onError?: _OnError) => string | null;
declare type MustEncode = (subject: string, toEncode: string) => string;
declare const interpolate: Interpolate;
declare const testEncode: TestEncoding;
declare const canEncode: CanEncode;
declare const encodeLetter: EncodeLetter;
declare const encodeEach: EncodeEach;
declare const encode: Encode;
declare const mustEncode: MustEncode;
export { interpolate, encodeLetter, encodeEach, testEncode, canEncode, encode, mustEncode, };
//# sourceMappingURL=index.d.ts.map