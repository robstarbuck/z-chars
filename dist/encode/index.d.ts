import { Statuscode, statusInfo } from "../status";
type Interpolate = (subject: string, zChars: string[]) => string;
export type EncodingStatus = typeof statusInfo[Statuscode] & {
    code: Statuscode;
};
type _OnError = (error: EncodingStatus) => void;
type CanEncode = (subject: string, toEncode: string) => boolean;
type TestEncoding = (subject: string, toEncode: string) => EncodingStatus;
type EncodeLetter = (chars: string) => string;
type EncodeEach = (chars: string) => string[];
type Encode = (subject: string, toEncode: string, onError?: _OnError) => string | null;
type MustEncode = (subject: string, toEncode: string) => string;
declare const interpolate: Interpolate;
declare const testEncode: TestEncoding;
declare const canEncode: CanEncode;
declare const encodeLetter: EncodeLetter;
declare const encodeEach: EncodeEach;
declare const encode: Encode;
declare const mustEncode: MustEncode;
export { interpolate, encodeLetter, encodeEach, testEncode, canEncode, encode, mustEncode, };
//# sourceMappingURL=index.d.ts.map