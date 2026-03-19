import { Statuscode } from "../status";
type _OnError = (error: Statuscode) => void;
type Decode = (toDecode: string, onError?: _OnError) => string | null;
type MustDecode = (toDecode: string) => string;
type CanDecode = (toDecode: string) => boolean;
type TestDecode = (toDecode: string) => Statuscode;
declare const testDecode: TestDecode;
declare const canDecode: CanDecode;
declare const decode: Decode;
declare const mustDecode: MustDecode;
export { testDecode, canDecode, decode, mustDecode };
//# sourceMappingURL=index.d.ts.map