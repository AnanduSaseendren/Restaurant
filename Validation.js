document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var isValid = true;

    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById("usernameError").textContent = "Username must be at least 3 characters long.";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    if (isValid) {
        window.location.href = "index.html";
    }
});

// document.getElementById("reservationForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 

    
//     document.getElementById("nameError").textContent = "";
//     document.getElementById("emailError").textContent = "";
//     document.getElementById("phoneError").textContent = "";
//     document.getElementById("dateError").textContent = "";
//     document.getElementById("timeError").textContent = "";
//     document.getElementById("guestsError").textContent = "";

    
//     var name = document.getElementById("name").value.trim();
//     var email = document.getElementById("email").value.trim();
//     var phone = document.getElementById("phone").value.trim();
//     var date = document.getElementById("date").value;
//     var time = document.getElementById("time").value;
//     var guests = document.getElementById("guests").value;
//     var isValid = true;

    
//     if (name === "" || name.length < 3) {
//         document.getElementById("nameError").textContent = "Please enter a valid name.";
//         isValid = false;
//     }

    
//     var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!email.match(emailPattern)) {
//         document.getElementById("emailError").textContent = "Please enter a valid email address.";
//         isValid = false;
//     }

    
//     var phonePattern = /^[0-9]{10}$/;
//     if (!phone.match(phonePattern)) {
//         document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
//         isValid = false;
//     }

    
//     if (date === "") {
//         document.getElementById("dateError").textContent = "Please select a date.";
//         isValid = false;
//     }

    
//     if (time === "") {
//         document.getElementById("timeError").textContent = "Please select a time.";
//         isValid = false;
//     }

    
//     if (guests === "" || guests <= 0) {
//         document.getElementById("guestsError").textContent = "Please enter the number of guests.";
//         isValid = false;
//     }

    
//     if (isValid) {
//         alert("Reservation successful! We look forward to serving you.");
//     }
// });
