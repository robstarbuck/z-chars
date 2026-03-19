"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorStatus = exports.statusInfo = void 0;
var ErrorStatus;
(function (ErrorStatus) {
    ErrorStatus[ErrorStatus["OK"] = -1] = "OK";
    ErrorStatus[ErrorStatus["INFO"] = 0] = "INFO";
    ErrorStatus[ErrorStatus["WARN"] = 1] = "WARN";
    ErrorStatus[ErrorStatus["ERROR"] = 2] = "ERROR";
})(ErrorStatus || (exports.ErrorStatus = ErrorStatus = {}));
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
        errorFrom: "subject",
    },
    ["ZCHR-SUBJECT"]: {
        valid: false,
        message: "Text contains encoded characters",
        errorLevel: ErrorStatus.ERROR,
        errorFrom: "subject",
    },
    ["EMPTY-ENCODE"]: {
        valid: false,
        message: "Text is empty",
        errorLevel: ErrorStatus.INFO,
        errorFrom: "encode",
    },
    ["ZCHR-ENCODE"]: {
        valid: false,
        message: "Text contains encoded characters",
        errorLevel: ErrorStatus.ERROR,
        errorFrom: "encode",
    },
    ["LEN-ENCODE"]: {
        valid: false,
        message: "Text too long to be encoded",
        errorLevel: ErrorStatus.WARN,
        errorFrom: "encode",
    },
    ["EMPTY-DECODE"]: {
        valid: false,
        message: "Text is empty",
        errorLevel: ErrorStatus.INFO,
        errorFrom: "decode",
    },
    ["ZCHR-DECODE"]: {
        valid: false,
        message: "No encoded text",
        errorLevel: ErrorStatus.WARN,
        errorFrom: "decode",
    },
};
exports.statusInfo = statusInfo;
//# sourceMappingURL=index.js.map