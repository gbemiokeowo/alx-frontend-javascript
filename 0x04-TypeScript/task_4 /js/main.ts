// / <reference path="./Teacher.ts" />
// / <reference path="./Subject.ts" />
// / <reference path="./Cpp.ts" />
// / <reference path="./Java.ts" />
// / <reference path="./React.ts" />

// Create and export the constants
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export a Teacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10, // experience for Cpp
};

// ----- Cpp subject -----
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ----- Java subject -----
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ----- React subject -----
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
