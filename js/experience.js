let experienceList = [];
let addExperienceBtn;
let saveExperienceBtn;
let workExpModal;
let experienceTableBody;
let experienceId,
    employerNameInput,
    streetInput,
    cityInput,
    stateInput,
    zipcodeInput,
    countryInput,
    phoneInput,
    positionInput,
    supervisorNameInput,
    startDateInput,
    endDateInput,
    dutiesInput,
    reasonToLeaveInput;

class WorkExperience {
    constructor(employerName, street, city, state, zipcode, country, phone, position, supervisorName, startDate, endDate, duties, reasonToLeave) {
        this.id = experienceList.length+1;
        this.employerName = employerName;
        this.address = {
            street: street,
            city: city,
            state: state,
            zipcode: zipcode,
            country: country
        };
        this.phone = phone;
        this.position = position;
        this.supervisorName = supervisorName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duties = duties;
        this.reasonToLeave = reasonToLeave;
    }
}

function clearAllModalInputs() {
    employerNameInput.value = "";
    streetInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
    zipcodeInput.value = "";
    countryInput.selectedIndex = 0;
    phoneInput.value = "";
    positionInput.value = "";
    supervisorNameInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
    dutiesInput.value = "";
    reasonToLeaveInput.value = "";
}

function populateAllModalInputs(entry) {
    employerNameInput.value = entry.employerName;
    streetInput.value = entry.address.street;
    cityInput.value = entry.address.city;
    stateInput.value = entry.address.state;
    zipcodeInput.value = entry.address.zipcode;
    countryInput.selectedIndex = entry.address.country;
    phoneInput.value = entry.phone;
    positionInput.value = entry.position;
    supervisorNameInput.value = entry.supervisorName;
    startDateInput.value = entry.startDate;
    endDateInput.value = entry.endDate;
    dutiesInput.value = entry.duties;
    reasonToLeaveInput.value = entry.reasonToLeave;
    workExpModal.show();
}

function renderTable() {
    experienceTableBody.innerHTML = "";
    let out = "";
    for(let i = 0; i < experienceList.length; i++) {
        let item = experienceList[i];
        let el = document.createElement("tr");

        let id = document.createElement("th");
        id.scope = "row";
        id.innerText = item.id;

        let employerName = document.createElement("td");
        employerName.innerText = item.employerName;

        let supervisorName = document.createElement("td");
        supervisorName.innerText = item.supervisorName;

        let position = document.createElement("td");
        position.innerText = item.position;

        let options = document.createElement("td");
        let editEntryBtn = document.createElement("button");
        editEntryBtn.innerText = "Edit";
        editEntryBtn.classList.add("btn");
        editEntryBtn.classList.add("btn-info");
        editEntryBtn.dataset.entryId = item.id;
        editEntryBtn.addEventListener("click", editEntry);
        options.appendChild(editEntryBtn);
        let deleteEntryBtn = document.createElement("button");
        deleteEntryBtn.innerText = "Delete";
        deleteEntryBtn.classList.add("btn");
        deleteEntryBtn.classList.add("btn-danger");
        deleteEntryBtn.dataset.entryId = item.id;
        deleteEntryBtn.addEventListener("click", deleteEntry);
        options.appendChild(deleteEntryBtn);

        el.appendChild(id);
        el.appendChild(employerName);
        el.appendChild(supervisorName);
        el.appendChild(position);
        el.appendChild(options);
        experienceTableBody.appendChild(el);
    }
}

function editEntry(e) {
    experienceId.dataset.exid = e.target.dataset.entryId;
    populateAllModalInputs(experienceList[e.target.dataset.entryId-1]);
}

function deleteEntry(e) {
    experienceList.splice(e.target.dataset.entryId-1, 1);
    renderTable();
}

function createWorkExperience() {
    return new WorkExperience(
        employerNameInput.value,
        streetInput.value,
        cityInput.value,
        stateInput.value,
        zipcodeInput.value,
        countryInput.value,
        phoneInput.value,
        positionInput.value,
        supervisorNameInput.value,
        startDateInput.value,
        endDateInput.value,
        dutiesInput.value,
        reasonToLeaveInput.value
    );
}

function saveModalEntry() {
    if(experienceId.dataset.exid !== "0") {
        for(let i = 0; i < experienceList.length; i++) {
            if(String(experienceList[i].id) === String(experienceId.dataset.exid)) {
                let overwrite = createWorkExperience();
                overwrite.id = experienceId.dataset.exid;
                experienceList[i] = overwrite;
            }
        }
    } else {
        experienceList.push(createWorkExperience());
    }
    workExpModal.hide();
    renderTable();
}

function addNewEntry() {
    experienceId.dataset.exid = "0";
    clearAllModalInputs();
}

function initializeInputs() {
    experienceId = document.getElementById("experienceId");
    employerNameInput = document.getElementById("workExpModalEmployerName");
    streetInput = document.getElementById("workExpModalStreet");
    cityInput = document.getElementById("workExpModalCity");
    stateInput = document.getElementById("workExpModalState");
    zipcodeInput = document.getElementById("workExpModalZipcode");
    countryInput = document.getElementById("workExpModalCountry");
    phoneInput = document.getElementById("workExpModalPhone");
    positionInput = document.getElementById("workExpModalPosition");
    supervisorNameInput = document.getElementById("workExpModalSupervisorName");
    startDateInput = document.getElementById("workExpModalStartDate");
    endDateInput = document.getElementById("workExpModalEndDate");
    dutiesInput = document.getElementById("workExpModalDuties");
    reasonToLeaveInput = document.getElementById("workExpModalReasonToLeave");
}

function initExperience() {
    initializeInputs();
    workExpModal = new bootstrap.Modal(document.getElementById("workExperienceModal"));
    experienceTableBody = document.getElementById("experienceTableBody");

    saveExperienceBtn = document.getElementById("saveExperienceBtn");
    saveExperienceBtn.addEventListener("click", saveModalEntry);

    addExperienceBtn = document.getElementById("addWorkExperienceBtn");
    addExperienceBtn.addEventListener("click", addNewEntry);
}