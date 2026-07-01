// Highlight the active navigation link
var currentPage = window.location.pathname.split("/").pop();
var navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Show a message when a choir is selected
var choirSelect = document.getElementById("choir");
var choirMessage = document.getElementById("choirMessage");

var choirMessages = {
    youth: "Great choice! Youth Choir is perfect for young singers.",
    adult: "Adult Choir is great for mature singers who love worship music.",
    children: "Children Choir helps young children grow through music.",
    worship: "Worship Team is for singers who want to lead praise and worship.",
    school: "School Choir is good for students who enjoy singing together."
};

if (choirSelect) {
    choirSelect.addEventListener("change", function() {
        var selectedChoir = choirSelect.value;
        choirMessage.textContent = choirMessages[selectedChoir] || "";
    });
}

// Validate the application form
var applicationForm = document.getElementById("applicationForm");
var formMessage = document.getElementById("formMessage");

if (applicationForm) {
    applicationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var fullName = document.getElementById("fullname").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var age = document.getElementById("age").value.trim();
        var choir = document.getElementById("choir").value;

        if (fullName === "" || email === "" || phone === "" || age === "" || choir === "") {
            formMessage.textContent = "Please fill in Full Name, Email, Phone Number, Age, and Choir.";
            formMessage.className = "form-message error";
        } else {
            formMessage.textContent = "Thank you for applying. We will contact you soon.";
            formMessage.className = "form-message success";
            applicationForm.reset();
            choirMessage.textContent = "";
        }
    });
}
