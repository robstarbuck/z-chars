enum ErrorStatus {
  OK = -1,
  INFO = 0,
  WARN = 1,
  ERROR = 2,
}

const statusInfo = {
  ["OK"]: {
    valid: true,
    message: "OK",
    errorLevel: ErrorStatus.OK,
    errorFrom: undefined,
  },
  ["EMPTY-SUBJECT"]: {
    valid: false,
    message: "Text is empty",
    errorLevel: ErrorStatus.INFO,
    errorFrom: "subject" as const,
  },

  ["ZCHR-SUBJECT"]: {
    valid: false,
    message: "Text contains encoded characters",
    errorLevel: ErrorStatus.ERROR,
    errorFrom: "subject" as const,
  },

  ["EMPTY-ENCODE"]: {
    valid: false,
    message: "Text is empty",
    errorLevel: ErrorStatus.INFO,
    errorFrom: "encode" as const,
  },
  ["ZCHR-ENCODE"]: {
    valid: false,
    message: "Text contains encoded characters",
    errorLevel: ErrorStatus.ERROR,
    errorFrom: "encode" as const,
  },
  ["LEN-ENCODE"]: {
    valid: false,
    message: "Text too long to be encoded",
    errorLevel: ErrorStatus.WARN,
    errorFrom: "encode" as const,
  },
  ["EMPTY-DECODE"]: {
    valid: false,
    message: "Text is empty",
    errorLevel: ErrorStatus.INFO,
    errorFrom: "decode" as const,
  },

  ["ZCHR-DECODE"]: {
    valid: false,
    message: "No encoded text",
    errorLevel: ErrorStatus.WARN,
    errorFrom: "decode" as const,
  },
};

export type Statuscode = keyof typeof statusInfo;

export { statusInfo, ErrorStatus };
