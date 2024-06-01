// type Alias : a type alias is exactly that -a name for any type
// Interface: A way to name an object type

// Primitive type
type StudentName = string;
type StudentAge = number;
type IsTopStudent = boolean;

// Object type
type Student = {
  readonly id: number /** don't allow update id */;
  name: string;
  age?: number /** optional  */;
};

const studentA: Student = {
  id: 1,
  name: 'Nguyen Van A',
};
const studentB: Student = {
  id: 2,
  name: 'Nguyen Van B',
  age: 23,
};

// studentA.id = 2;  error : Cannot assign to 'id' because it is a read-only property

// Union type : Can accepted this type or an other one;

type Status = 'active' | 'inactive'; /** có thể nhận giá trị là active hoặc inactive */
type ProductStatus = 0 | 1 | 2 | 3 | 4;
type StudentId = number | string;

interface StudentType {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D';
}

// Ex
let x: number | string = 1;
x = 'super';
x = 123;

// x = false  error: Type 'boolean' is not assignable to type 'string | number'.ts(2322)

// Intersection type

interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

const employee1: Employee = {
  id: 1,
  name: 'Nguyen van A',
  email: 'nguyenvana@gmail.com',
  phone: '3294934',
};

const customer: Customer = {
  name: 'Cty A',
  credit: 1213,
  email: 'cty@gmail.com',
  phone: '33943924032',
};

// Add new prop
// declaration mergin
//  add property age for Identity
interface Identity {
  age?: number;
}

const identity: Identity = {
  id: 1,
  name: 'Nguyen van A',
  age: 22,
};