declare enum ErrorStatus {
    OK = -1,
    INFO = 0,
    WARN = 1,
    ERROR = 2
}
declare const statusInfo: {
    OK: {
        valid: boolean;
        message: string;
        errorLevel: ErrorStatus;
        errorFrom: undefined;
    };
    "EMPTY-SUBJECT": {
        valid: boolean;
        message: string;
        errorLevel: ErrorStatus;
        errorFrom: "subject";
    };
    "ZCHR-SUBJECT": {
        valid: boolean;
        message: string;
        errorLevel: ErrorStatus;
        errorFrom: "subject";
    };
    "EMPTY-ENCODE": {
        valid: boolean;
        message: string;
        errorLevel: ErrorStatus;
        errorFrom: "encode";
    };
    "ZCHR-ENCODE": {
        valid: boolean;
        message: string;
        errorLevel: ErrorStatus;
        errorFrom: "encode";
    };
    "LEN-ENCODE": {
        valid: boolean;
        message: string;
        errorLevel: ErrorStatus;
        errorFrom: "encode";
    };
    "EMPTY-DECODE": {
        valid: boolean;
        message: string;
        errorLevel: ErrorStatus;
        errorFrom: "decode";
    };
    "ZCHR-DECODE": {
        valid: boolean;
        message: string;
        errorLevel: ErrorStatus;
        errorFrom: "decode";
    };
};
export declare type Statuscode = keyof typeof statusInfo;
export { statusInfo, ErrorStatus };
//# sourceMappingURL=index.d.ts.map