interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "gbem gbem",
  lastName: " Okemoney",
  age: 20,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Moh",
  lastName: " Popsicle",
  age: 21,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];

function renderTable(studentsss: Student[]) {
  const tableBody = document.querySelector("#myTable tbody") as HTMLTableSectionElement | null;
  if (!tableBody) {
    console.error("No table body found!");
    return;
  }

  tableBody.innerHTML = "";

  studentsss.forEach(studentItem => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = studentItem.firstName;
    locationCell.textContent = studentItem.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
}

renderTable(studentsList);
