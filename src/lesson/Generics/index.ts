interface List<T> {
  length: number;
  [index: number]: T;
}
const numberList: List<Number> = [1, 2, 3];
const wordList: List<string> = ['1', '2', '3'];

interface Student {
  id: number;
  name: string;
}
const studentList: List<Student> = [{ id: 1, name: 'Danh' }];
