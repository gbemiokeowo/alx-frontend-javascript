// Teacher interface definition
interface Teacher {
  readonly firstName: string; // Can only be set when initialized
  readonly lastName: string;  // Can only be set when initialized
  fullTimeEmployee: boolean;  // Always required
  yearsOfExperience?: number; // Optional
  location: string;           // Always required
  [key: string]: any;         // Allow any additional attributes like contract, etc.
}

// Example usage
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  contract: false, // additional property allowed
};

console.log(teacher1);

// This will throw an error because firstName is read-only
// teacher1.firstName = "Jane"; 

interface Director extends Teacher {
//   readonly firstName: string; // Can only be set when initialized
//   readonly lastName: string;  // Can only be set when initialized
//   fullTimeEmployee: boolean;  // Always required
//   yearsOfExperience?: number; // Optional
//   location: string;           // Always required
  numberOfReports: number;

}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);



// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the function
function printTeacher({ firstName, lastName }) {
 return `${firstName}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Alice", "Smith")); // Output: A. Smith


// Interface describing the StudentClass instance
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor for StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Implementation of the class
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student: StudentClassInterface = new StudentClass("John", "Doe");
console.log(student.displayName());  // Output: John
console.log(student.workOnHomework()); // Output: Currently working





