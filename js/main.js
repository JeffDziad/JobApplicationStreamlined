window.onload = initAll;

let toPersonalInformationBtn, toPositionBtn, toExperienceBtn, toEducationBtn, toConfirmationBtn;
let backEligibilityBtn, backPersonalInformationBtn, backPositionBtn, backExperienceBtn, backEducationBtn;

function initAll() {
    toPersonalInformationBtn = document.getElementById("toPersonalInformation");
    toPersonalInformationBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#personalInformation']");
        t[0].click();
    });

    toPositionBtn = document.getElementById("toPosition");
    toPositionBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#positions']");
        t[0].click();
    });

    toExperienceBtn = document.getElementById("toExperience");
    toExperienceBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#experience']");
        t[0].click();
    });

    toEducationBtn = document.getElementById("toEducation");
    toEducationBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#education']");
        t[0].click();
    });

    toConfirmationBtn = document.getElementById("toConfirmation");
    toConfirmationBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#confirmation']");
        t[0].click();
    });

    backEligibilityBtn = document.getElementById("backEligibility");
    backEligibilityBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#eligibility']");
        t[0].click();
    });

    backPersonalInformationBtn = document.getElementById("backPersonalInformation");
    backPersonalInformationBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#personalInformation']");
        t[0].click();
    });

    backPositionBtn = document.getElementById("backPosition");
    backPositionBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#positions']");
        t[0].click();
    });

    backExperienceBtn = document.getElementById("backExperience");
    backExperienceBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#experience']");
        t[0].click();
    });

    backEducationBtn = document.getElementById("backEducation");
    backEducationBtn.addEventListener("click", function() {
        let t = document.querySelectorAll("a[href='#education']");
        t[0].click();
    });

    initStateCountryPopulator();
    initEligibility();
    initPositions();
    initExperience();
    initEducation();
    initConfirmation();
}