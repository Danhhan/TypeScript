// 1. Number enum
enum Status {
  PENDING, //0
  IN_PROGRESS, //1
  DONE, //2
  CANCELED, //3
}
enum Status2 {
  PENDING = 3,
  IN_PROGRESS, //4
  DONE, //5
  CANCELED, //6
}
enum Status3 {
  PENDING = 3,
  IN_PROGRESS = 5,
  DONE = 8,
  CANCELED = 10,
}
// can assign any number to you enum variable
const stats1: Status = Status.PENDING;
const stats2: Status = 1;
const stats3: Status = -1;

// number enum --> support reverse mapping
console.log(Status[0]);
console.log(Status['DONE']);

//2. string enum
enum MediaType {
  JSON = 'application/json',
  XML = 'aplication/xml'
}
