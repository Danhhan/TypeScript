// premitive type
type studentName = string;
type studentAge = number;
type isTopStudent = boolean;
// Object type
// type student = {
//   readonly id: number;
//   name: string;
//   age?: number; //optional
// };
interface student {
  readonly id: number;
  name: string;
  age?: number; //optional
}
const studentA: student = {
  id: 1,
  name: 'Danh',
};
