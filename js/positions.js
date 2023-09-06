const positions = {
    "Food Service": [
        "Dining Room Server Assistant***",
        "Employee Dining Room Crew***",
        "Fast Food Crew***",
        "Kitchen Crew***",
        "Barista",
        "Bartender",
        "Chef",
        "Cocktail Server",
        "Cook",
        "Cookout Entertainer",
        "Dining Room Host",
        "Dining Room Host Lead",
        "Dining Room Management",
        "Dining Room Server",
        "Pantry Supervisor",
        "Sous Chef",
        "Steward"
    ],
    "Housekeeping": [
        "Laundry Help***",
        "Room Attendant***",
        "Housekeeping Room Inspector",
        "Housekeeping Trainer",
        "Housekeeping Office Assistant"
    ],
    "Management": [
        "Activities Sales Agent",
        "Administrative Assistant Maintenance",
        "Asst. HR Manager",
        "Audit Clerk",
        "Bar Lead",
        "Cafeteria Management",
        "Employee Dining Room Management",
        "Employee Pub Crew/Lead",
        "Fast Food Management",
        "Finish Floor Supervisor",
        "Food and Beverage Management",
        "Food and Beverage Office Assistant",
        "Front Office Management",
        "General Accounting Office",
        "Housing Manager",
        "Personnel Management",
        "Retail Management",
        "Retail Sales Associate",
        "R&M Staff Assistant"
    ],
    "Maintenance and Repair": [
        "Boiler Technician (D.L.)",
        "Bus Driver/Guide (D.L.)",
        "Bus Service Person (D.L.)",
        "Carpenter (D.L.)",
        "Carpet Cleaning Technician (D.L.)",
        "Electrician (D.L.)",
        "Fire Systems Technician (D.L.)",
        "Floor Cleaning Technician (D.L.)",
        "Heavy Equipment Operator (D.L.)",
        "Kitchen Technician (D.L.)",
        "Laundry Technician (D.L.)",
        "Laundry Truck Driver (D.L.)",
        "Linen Truck Driver  (D.L.)",
        "Locksmith (D.L.)",
        "Plumber (D.L.)",
        "Recycling Technician (D.L.)",
        "Warehouse Driver (OFI)"
    ],
    "Guest Services": [
        "Guest Services Agent",
        "Guest Services Agent (Campground)",
        "Night Auditor",
        "Night Guest Services Agent",
        "Reservations Sales Agent",
        "Senior Guest Services Agent (Campground)"
    ],
    "Transportation": [
        "Distribution Center Associate",
        "Distribution Center Truck Driver (D.L.)",
        "Distribution Lead",
        "Dock Help (D.L.)",
        "Marina Fishing Guide (D.L.)",
        "Marina Manager (D.L.)",
        "Scenic Cruise Operator (D.L.)",
        "Tour Guide (D.L.)",
        "Touring Car Driver- Interpretive Guide Non CDL (D.L.)",
        "Traveling Night Auditor",
        "Warehouse Manager",
        "Warehouse Help",
        "Warehouse Driver (OFI)",
        "Wash Deck Supervisor",
        "Wash Deck Lead",
        "Wrangler/Driver"
    ],
    "Miscellaneous": [
        "Campground Attendant (D.L.)",
        "Campground Management",
        "Dorm Custodian",
        "Internship",
        "Pianist",
        "Seamstress",
        "Security Guard And Location Safety (D.L.)",
        "Vending Clerk",
        "Vending Driver (D.L.)",
        "Vending Service Technician"
    ]
}

let positionsDropdownList;

function formatListItem(positionName) {
    return `<li>
                <label>
                    <input type="checkbox" value="${positionName}">
                    ${positionName}
                </label>
            </li>`;
}

function formatCategoryLabel(categoryLabel) {
    return `<li><label class="fw-bolder">${categoryLabel}</label></li>`;
}

function renderPositions() {
    let out = "";
    for (const [key, value] of Object.entries(positions)) {
        out += formatCategoryLabel(key);
        for(let i = 0; i < value.length; i++) {
            out += formatListItem(value[i]);
        }
    }
    positionsDropdownList.innerHTML = out;
}

function initPositions() {
    positionsDropdownList = document.getElementById("positionsDropdownList");
    renderPositions();

    const checked = document.querySelectorAll(".dropdown-menu input[type='checkbox']");
    const button = document.getElementById("positionsDropdown");
    let selectedPositions = [];

    const handlePositionSelect = (e) => {
        let selectedPositionsText = "";

        if(e.target.checked) {
            if(selectedPositions.length >= 3) {
                checked.forEach((box) => {
                    if(box.value === selectedPositions[0]) {
                        box.checked = false;
                    }
                });
                selectedPositions.splice(0, 1);
                selectedPositions.push(e.target.value);
            } else {
                selectedPositions.push(e.target.value);
            }
        } else {
            let index = selectedPositions.indexOf(e.target.value);
            checked.forEach((box) => {
                if(box.value === e.target.value) {
                    box.checked = false;
                }
            });
            selectedPositions.splice(index, 1);
        }

        for(let i = 0; i < selectedPositions.length; i++) {
            if(i === selectedPositions.length-1) {
                selectedPositionsText += selectedPositions[i];
            } else selectedPositionsText += selectedPositions[i] + ", ";
        }
        button.innerText = selectedPositions.length > 0 ? selectedPositionsText : "Select";
    }

    checked.forEach((box) => {
        box.addEventListener('change', handlePositionSelect);
    })

}
