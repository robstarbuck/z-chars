const errors = {
  "A/EMPT": {
    message: "Text is empty",
    level: "WARN",
    from: "original",
  },
  "A/ZCHR": {
    message: "Text containers encoded characters",
    level: "ERROR",
    from: "original",
  },

  "B/EMPT": {
    message: "Text is empty",
    level: "WARN",
    from: "hidden",
  },
  "B/ZCHR": {
    message: "Text containers encoded characters",
    level: "ERROR",
    from: "hidden",
  },
  "B/LENG": {
    message: "Text too long to be encoded",
    level: "ERROR",
    from: "hidden",
  },

  "E/EMPT": {
    message: "Text is empty",
    level: "WARN",
    from: "encoded",
  },
};

export type Errorcode = keyof typeof errors;
