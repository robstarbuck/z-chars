export class ZCharsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ZCharsError";
  }
}

export class EncodingError extends ZCharsError {
  constructor(message: string) {
    super(message);
    this.name = "EncodingError";
  }
}

export class DecodingError extends ZCharsError {
  constructor(message: string) {
    super(message);
    this.name = "DecodingError";
  }
}
