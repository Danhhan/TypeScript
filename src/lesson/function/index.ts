function sayHello() {
  console.log('sayHello');
}
// function sum(a: number, b: number) {
//   return a + b;
// }
// work===========
// function sum(a: number, b: number): number {
//   return a + b;
// }
//not work =============
// function sum(a: number, b: number): number {
//   return a + b.toString();
// }

// Optional param
// function getLength(numberList?: number[]) {
//   return Array.isArray(numberList) ? numberList.length : 0;
// Default param
function getLength(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// type never
type NewType = number & string;

// destructuring param
// option 1
// function createStudent(student: { id: number; name: string; age: number }) {
//   const { id, name, age } = student;
//   console.log(id, name, age);
// }
// option 2
// function createStudent({ id, name, age }: { id: number; name: string; age: number }) {
//   console.log(id, name, age);
// }
// option 3
// interface Student {
//   id: number;
//   name: string;
//   age: number;
// }
// function createStudent({ id, name, age }: Student) {
//   console.log(id, name, age);
// }

// createStudent({
//   id: 1,
//   name: 'Danh',
//   age: 18,
// });
