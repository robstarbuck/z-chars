enum ErrorLevel {
  INFO = 0,
  WARN = 1,
  ERROR = 2,
}

const errors = {
  "A/EMPT": {
    message: "Text is empty",
    level: ErrorLevel.INFO,
    from: "subject" as const,
  },
  "A/ZCHR": {
    message: "Text contains encoded characters",
    level: ErrorLevel.ERROR,
    from: "subject" as const,
  },

  "B/EMPT": {
    message: "Text is empty",
    level: ErrorLevel.INFO,
    from: "hidden" as const,
  },
  "B/ZCHR": {
    message: "Text contains encoded characters",
    level: ErrorLevel.ERROR,
    from: "hidden" as const,
  },
  "B/LENG": {
    message: "Text too long to be encoded",
    level: ErrorLevel.WARN,
    from: "hidden" as const,
  },

  "E/EMPT": {
    message: "Text is empty",
    level: ErrorLevel.INFO,
    from: "encoded" as const,
  },

  "E/ZCHR": {
    message: "No encoded text",
    level: ErrorLevel.WARN,
    from: "encoded" as const,
  },
};

export type Errorcode = keyof typeof errors;

export { errors, ErrorLevel };
