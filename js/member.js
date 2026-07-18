// Member page interactions

// Member sidebar active link
var currentMemberPage = window.location.pathname.split("/").pop();
var memberLinks = document.querySelectorAll(".member-nav a");

memberLinks.forEach(function(link) {
    if (link.getAttribute("href") === currentMemberPage) {
        link.classList.add("active");
    }
});

// Member button messages
var memberButtons = document.querySelectorAll("button");

memberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var buttonText = button.textContent.trim();

        if (buttonText === "View Lyrics") {
            alert("Select a song to view lyrics.");
        } else if (buttonText === "Listen") {
            alert("Select a song to listen.");
        } else if (buttonText === "Download") {
            alert("Select a song to download.");
        } else if (buttonText === "Update Profile") {
            alert("Profile form action selected.");
        } else {
            var message = button.getAttribute("data-message");

            if (message) {
                alert(message);
            }
        }
    });
});

// Song search input
var songSearch = document.getElementById("songSearch");

if (songSearch) {
    songSearch.addEventListener("input", function() {
        if (songSearch.value.trim() !== "") {
            console.log("Search input changed.");
        }
    });
}