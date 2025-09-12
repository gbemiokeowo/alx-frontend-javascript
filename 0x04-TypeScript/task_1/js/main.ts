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
