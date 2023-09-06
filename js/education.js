let educationTableBody, addEducationBtn;

function addNewEducationRow() {
    let row = document.createElement("tr");

    let schoolName = document.createElement("th");
    schoolName.innerHTML = `<input type="text" class="form-control" aria-label="School Name" aria-describedby="inputGroup-sizing-sm">`;

    let location = document.createElement("td");
    location.innerHTML = `<input type="text" class="form-control" aria-label="Location" aria-describedby="inputGroup-sizing-sm">`;

    let degreeReceived = document.createElement("td");
    degreeReceived.innerHTML = `<input type="text" class="form-control" aria-label="Degree Received" aria-describedby="inputGroup-sizing-sm">`;

    let graduated = document.createElement("td");
    graduated.innerHTML = `<input class="form-check-input" type="checkbox" id="eduTableGraduated" value="" aria-label="Graduated">`;

    row.appendChild(schoolName);
    row.appendChild(location);
    row.appendChild(degreeReceived);
    row.appendChild(graduated);

    educationTableBody.appendChild(row);
}

function initEducation() {
    educationTableBody = document.getElementById("educationTableBody");
    addEducationBtn = document.getElementById("addEducationBtn");
    addEducationBtn.addEventListener("click", addNewEducationRow);
}