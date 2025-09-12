interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: student = {
    firstName: "gbem gbem",
    lastName: " Okemoney",
    age: 20,
    location: "Lagos",
}

const student2: student = {
    firstName: "Moh",
    lastName: " Popsicle",
    age: 21,
    location: "Abuja",
}


const studentsList : student[] = [student1, student2, ]

function renderTable(studentsss: student[]) {
    const tableBody = document.querySelector("#myTable tbody") 
    console.log(tableBody)
    tableBody.innerHTML = "";

    studentsss.forEach(studentItem => {
        const row = document.createElement("tr")
        const firstNameCell = document.createElement("td")
        const locationCell = document.createElement("td")
        firstNameCell.append(studentItem.firstName)
        locationCell.append(studentItem.location)
        row.appendChild(firstNameCell)
        row.appendChild(locationCell)
        tableBody.appendChild(row)
    });

}

renderTable(studentsList)


