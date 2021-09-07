// 1. Number enum
var Status;
(function (Status) {
    Status[Status["PENDING"] = 0] = "PENDING";
    Status[Status["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    Status[Status["DONE"] = 2] = "DONE";
    Status[Status["CANCELED"] = 3] = "CANCELED";
})(Status || (Status = {}));
var Status2;
(function (Status2) {
    Status2[Status2["PENDING"] = 3] = "PENDING";
    Status2[Status2["IN_PROGRESS"] = 4] = "IN_PROGRESS";
    Status2[Status2["DONE"] = 5] = "DONE";
    Status2[Status2["CANCELED"] = 6] = "CANCELED";
})(Status2 || (Status2 = {}));
var Status3;
(function (Status3) {
    Status3[Status3["PENDING"] = 3] = "PENDING";
    Status3[Status3["IN_PROGRESS"] = 5] = "IN_PROGRESS";
    Status3[Status3["DONE"] = 8] = "DONE";
    Status3[Status3["CANCELED"] = 10] = "CANCELED";
})(Status3 || (Status3 = {}));
// can assign any number to you enum variable
var stats1 = Status.PENDING;
var stats2 = 1;
var stats3 = -1;
// number enum --> support reverse mapping
console.log(Status[0]);
console.log(Status['DONE']);
