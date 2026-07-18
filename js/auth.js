// Login and signup interactions

// Login demonstration function
var loginForm = document.getElementById("loginForm");
var authMessage = document.getElementById("authMessage");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var email = document.getElementById("loginEmail").value.trim();
        var password = document.getElementById("loginPassword").value.trim();
        var accountType = document.getElementById("accountType").value;

        if (email === "" || password === "" || accountType === "") {
            authMessage.textContent = "Please complete all required fields.";
            authMessage.className = "form-message error";
            return;
        }

        authMessage.textContent = "Demo login successful.";
        authMessage.className = "form-message success";

        if (accountType === "admin") {
            window.location.href = "../admin/dashboard.html";
        } else {
            window.location.href = "../member/dashboard.html";
        }
    });
}

// Signup form validation
var signupForm = document.getElementById("signupForm");
var signupMessage = document.getElementById("signupMessage");

if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var fullName = document.getElementById("fullName").value.trim();
        var email = document.getElementById("signupEmail").value.trim();
        var password = document.getElementById("signupPassword").value.trim();
        var confirmPassword = document.getElementById("confirmPassword").value.trim();
        var accountType = document.getElementById("signupAccountType").value;

        if (fullName === "" || email === "" || password === "" || confirmPassword === "" || accountType === "") {
            signupMessage.textContent = "Please complete all required fields.";
            signupMessage.className = "form-message error";
            return;
        }

        if (password !== confirmPassword) {
            signupMessage.textContent = "Passwords do not match.";
            signupMessage.className = "form-message error";
            return;
        }

        signupMessage.textContent = "Account created successfully. Please login.";
        signupMessage.className = "form-message success";
        signupForm.reset();
    });
}