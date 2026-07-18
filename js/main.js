// General website functions

// Current page navigation highlight
var currentPage = window.location.pathname.split("/").pop();
var navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    var linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

// Mobile navigation interaction, used only if a menu button exists on a page
var menuButton = document.getElementById("menuButton");
var mainNavigation = document.querySelector("nav");

if (menuButton && mainNavigation) {
    menuButton.addEventListener("click", function() {
        mainNavigation.classList.toggle("open");
    });
}

// Application form validation
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
            formMessage.textContent = "Please complete all required fields.";
            formMessage.className = "form-message error";
            return;
        }

        formMessage.textContent = "Application submitted successfully.";
        formMessage.className = "form-message success";
        applicationForm.reset();
    });
}