// 1. Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2. Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 3. Director Class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// 4. Teacher Class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// 5. createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Example usage
const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);
const emp3 = createEmployee("500");

console.log(emp1.workFromHome()); // "Cannot work from home"
console.log(emp2.workFromHome()); // "Working from home"
console.log(emp3.workFromHome()); // "Working from home"



// Assuming Director and Teacher from previous code

// Type Predicate Function
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function executeWork
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    return employee.workDirectorTasks(), return employee.workTeacherTasks()
    
  }
}

// Example usage
executeWork(createEmployee(200));  // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks



// 1. String literal type
type Subjects = "Math" | "History";

// 2. Function implementation
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Example usage
console.log(teachClass("Math"));    // Output: Teaching Math
console.log(teachClass("History")); // Output: Teaching History

// The following would throw a TypeScript error:
// console.log(teachClass("Science"));

export function isDirector
