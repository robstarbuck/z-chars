"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorStatus = exports.statusInfo = void 0;
var ErrorStatus;
(function (ErrorStatus) {
    ErrorStatus[ErrorStatus["OK"] = -1] = "OK";
    ErrorStatus[ErrorStatus["INFO"] = 0] = "INFO";
    ErrorStatus[ErrorStatus["WARN"] = 1] = "WARN";
    ErrorStatus[ErrorStatus["ERROR"] = 2] = "ERROR";
})(ErrorStatus || (ErrorStatus = {}));
exports.ErrorStatus = ErrorStatus;
var statusInfo = (_a = {},
    _a["OK"] = {
        valid: true,
        message: "OK",
        errorLevel: ErrorStatus.OK,
        errorFrom: undefined,
    },
    _a["EMPTY-SUBJECT"] = {
        valid: false,
        message: "Text is empty",
        errorLevel: ErrorStatus.INFO,
        errorFrom: "subject",
    },
    _a["ZCHR-SUBJECT"] = {
        valid: false,
        message: "Text contains encoded characters",
        errorLevel: ErrorStatus.ERROR,
        errorFrom: "subject",
    },
    _a["EMPTY-ENCODE"] = {
        valid: false,
        message: "Text is empty",
        errorLevel: ErrorStatus.INFO,
        errorFrom: "encode",
    },
    _a["ZCHR-ENCODE"] = {
        valid: false,
        message: "Text contains encoded characters",
        errorLevel: ErrorStatus.ERROR,
        errorFrom: "encode",
    },
    _a["LEN-ENCODE"] = {
        valid: false,
        message: "Text too long to be encoded",
        errorLevel: ErrorStatus.WARN,
        errorFrom: "encode",
    },
    _a["EMPTY-DECODE"] = {
        valid: false,
        message: "Text is empty",
        errorLevel: ErrorStatus.INFO,
        errorFrom: "decode",
    },
    _a["ZCHR-DECODE"] = {
        valid: false,
        message: "No encoded text",
        errorLevel: ErrorStatus.WARN,
        errorFrom: "decode",
    },
    _a);
exports.statusInfo = statusInfo;
//# sourceMappingURL=index.js.map