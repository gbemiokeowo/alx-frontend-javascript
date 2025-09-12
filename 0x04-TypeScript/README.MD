## 📝 Frontend-javascript

### 1️⃣ Setup Configuration

Copy the following configuration files (provided above) into the `task_0` directory:

- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

---

### 2️⃣ Write Your Code in `main.ts`

1. **Create an Interface**
   - Define an interface named `Student` with the following properties:
     - `firstName` *(string)*
     - `lastName` *(string)*
     - `age` *(number)*
     - `location` *(string)*

2. **Create Student Objects**
   - Create **two student objects** that implement the `Student` interface.
   - Create an array named `studentsList` containing the two student variables.

3. **Render a Table**
   - Using **Vanilla JavaScript**, dynamically render a table.
   - For each element in `studentsList`, append a **new row** to the table.
   - Each row should contain:
     - The student’s **first name**
     - The student’s **location**

---

### ✅ Requirements

- When running the project, **Webpack** should display:
  ```text
  No type errors found.
