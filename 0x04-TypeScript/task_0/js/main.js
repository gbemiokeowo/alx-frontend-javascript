var student1 = {
    firstName: "gbem gbem",
    lastName: " Okemoney",
    age: 20,
    location: "Lagos",
};
var student2 = {
    firstName: "Moh",
    lastName: " Popsicle",
    age: 21,
    location: "Abuja",
};

var studentsList = [student1, student2,];
function renderTable(studentsss) {
    var tableBody = document.querySelector("#myTable tbody");
    console.log(tableBody);
    tableBody.innerHTML = "";
    studentsss.forEach(function (studentItem) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        var locationCell = document.createElement("td");
        firstNameCell.append(studentItem.firstName);
        locationCell.append(studentItem.location);
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
}
renderTable(studentsList);
