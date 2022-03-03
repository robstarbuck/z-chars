import { Statuscode } from "../status";
declare type _OnError = (error: Statuscode) => void;
declare type Decode = (toDecode: string, onError?: _OnError) => string | null;
declare type MustDecode = (toDecode: string) => string;
declare type CanDecode = (toDecode: string) => boolean;
declare type TestDecoding = (toDecode: string) => Statuscode;
declare const testDecode: TestDecoding;
declare const canDecode: CanDecode;
declare const decode: Decode;
declare const mustDecode: MustDecode;
export { testDecode, canDecode, decode, mustDecode };
//# sourceMappingURL=index.d.ts.map