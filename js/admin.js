// Admin page interactions

// Admin sidebar active link
var currentAdminPage = window.location.pathname.split("/").pop();
var adminLinks = document.querySelectorAll(".admin-nav a");

adminLinks.forEach(function(link) {
    if (link.getAttribute("href") === currentAdminPage) {
        link.classList.add("active");
    }
});

// Admin button demonstration messages
var adminButtons = document.querySelectorAll("button");

adminButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var buttonText = button.textContent.trim();
        var pageName = currentAdminPage;

        if (pageName === "applications.html" && buttonText === "Approve") {
            alert("Application approved.");
        } else if (pageName === "applications.html" && buttonText === "Reject") {
            alert("Application rejected.");
        } else if (pageName === "applications.html" && buttonText === "View") {
            alert("Select an application row to view details.");
        } else if (pageName === "members.html" && buttonText === "Edit") {
            alert("Edit member information.");
        } else if (pageName === "members.html" && buttonText === "Remove") {
            alert("Remove member.");
        } else if (pageName === "members.html" && buttonText === "Add Member") {
            alert("Open the member form area.");
        } else if (pageName === "attendance.html" && buttonText === "Save Attendance") {
            alert("Attendance recorded.");
        } else if (pageName === "songs.html") {
            alert("Song form action selected.");
        } else if (pageName === "events.html" && buttonText === "Add Event") {
            alert("Event form action selected.");
        } else if (pageName === "rehearsals.html" && buttonText === "Create Rehearsal") {
            alert("Rehearsal form action selected.");
        } else if (pageName === "meetings.html" && buttonText === "Add Meeting") {
            alert("Meeting form action selected.");
        } else if (pageName === "profile.html" && buttonText === "Update Profile") {
            alert("Profile form action selected.");
        } else {
            var message = button.getAttribute("data-message");

            if (message) {
                alert(message);
            }
        }
    });
});