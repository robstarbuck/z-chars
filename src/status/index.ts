enum Status {
  OK = -1,
  INFO = 0,
  WARN = 1,
  ERROR = 2,
}

const status = {
  ["OK"]: {
    valid: true,
    message: "OK",
    level: Status.OK,
    errorFrom: undefined,
  },

  ["EMPTY-SUBJECT"]: {
    valid: false,
    message: "Text is empty",
    level: Status.INFO,
    errorFrom: "subject" as const,
  },
  ["ZCHR-SUBJECT"]: {
    valid: false,
    message: "Text contains encoded characters",
    level: Status.ERROR,
    errorFrom: "subject" as const,
  },

  ["EMPTY-ENCODE"]: {
    valid: false,
    message: "Text is empty",
    level: Status.INFO,
    errorFrom: "encode" as const,
  },
  ["ZCHR-ENCODE"]: {
    valid: false,
    message: "Text contains encoded characters",
    level: Status.ERROR,
    errorFrom: "encode" as const,
  },
  ["LEN-ENCODE"]: {
    valid: false,
    message: "Text too long to be encoded",
    level: Status.WARN,
    errorFrom: "encode" as const,
  },

  ["EMPTY-DECODE"]: {
    valid: false,
    message: "Text is empty",
    level: Status.INFO,
    errorFrom: "decode" as const,
  },

  ["ZCHR-DECODE"]: {
    valid: false,
    message: "No encoded text",
    level: Status.WARN,
    errorFrom: "decode" as const,
  },
};

export type Statuscode = keyof typeof status;

export { status, Status };
