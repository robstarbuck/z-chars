"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodingError = exports.EncodingError = exports.ZCharsError = void 0;
class ZCharsError extends Error {
    constructor(message) {
        super(message);
        this.name = "ZCharsError";
    }
}
exports.ZCharsError = ZCharsError;
class EncodingError extends ZCharsError {
    constructor(message) {
        super(message);
        this.name = "EncodingError";
    }
}
exports.EncodingError = EncodingError;
class DecodingError extends ZCharsError {
    constructor(message) {
        super(message);
        this.name = "DecodingError";
    }
}
exports.DecodingError = DecodingError;
//# sourceMappingURL=errors.js.map