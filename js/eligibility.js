let yesCriminalHistoryRadio, noCriminalHistoryRadio, criminalDetailsContainer;

function initEligibility() {
    yesCriminalHistoryRadio = document.getElementById("criminalRadio1");
    noCriminalHistoryRadio = document.getElementById("criminalRadio2");
    criminalDetailsContainer = document.getElementById("criminalDetailsContainer");
    yesCriminalHistoryRadio.addEventListener("change", function() {
        criminalDetailsContainer.style.display = "block";
    });
    noCriminalHistoryRadio.addEventListener("change", function() {
        criminalDetailsContainer.style.display = "none";
    });
}