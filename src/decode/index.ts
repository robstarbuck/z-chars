import { zCharMatch, codePoint } from "../z-chars";
import { Statuscode, status } from "../status";

type _OnError = (error: Statuscode) => void;

type Decode = (toDecode: string, onError?: _OnError) => string | null;

type MustDecode = (toDecode: string) => string;

type CanDecode = (toDecode: string) => boolean;

type TestDecoding = (toDecode: string) => Statuscode;

const testDecode: TestDecoding = (toDecode) => {
  if (toDecode.length === 0) {
    return "EMPTY-DECODE";
  }
  if (!toDecode.match(zCharMatch)) {
    return "ZCHR-DECODE";
  }
  return "OK";
};

const canDecode: CanDecode = (toDecode) => {
  const statusKey = testDecode(toDecode);
  return status[statusKey].valid;
};

const decode: Decode = (toDecode) => {
  const zSet = toDecode.match(zCharMatch);
  if (!zSet) {
    return null;
  }
  const codePoints = zSet?.map((z) => codePoint(z.split("")));
  return String.fromCodePoint(...codePoints);
};

const mustDecode: MustDecode = (toDecode) => {
  const zSet = toDecode.match(zCharMatch);
  const codePoints = zSet!.map((z) => codePoint(z.split("")));
  return String.fromCodePoint(...codePoints);
};

export { testDecode, canDecode, decode, mustDecode };
