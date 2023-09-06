let agreementCheckbox, submitApplicationBtn;

function initConfirmation() {
    agreementCheckbox = document.getElementById("agreementCheckbox");
    submitApplicationBtn = document.getElementById("submitApplication");

    agreementCheckbox.addEventListener("change", function(e) {
        if(agreementCheckbox.checked) {
            submitApplicationBtn.style.display = "block";
        } else {
            submitApplicationBtn.style.display = "none";
        }
    });
}