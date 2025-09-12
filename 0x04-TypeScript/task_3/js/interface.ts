// interface.ts

// 1. Create a type RowID and set it equal to number
export type RowID = number;

// 2. Create an interface RowElement with the required fields
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional
}
