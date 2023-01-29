const loginLink = document.querySelector("#login-link");
const signupLink = document.querySelector("#signup-link");
const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");

loginLink.addEventListener("click", e => {
  e.preventDefault();
  loginForm.classList.remove("inactive-form");
  loginForm.classList.add("active-form");
  signupForm.classList.remove("active-form");
  signupForm.classList.add("inactive-form");
});

signupLink.addEventListener("click", e => {
  e.preventDefault();
  signupForm.classList.remove("inactive-form");
  signupForm.classList.add("active-form");
  loginForm.classList.remove("active-form");
  loginForm.classList.add("inactive-form");
});
// Get the element where the data should be inserted


// Function to populate the login form
function populateLoginForm() {
    fetch ('jobs-data.json')
    // Iterate through the users array
    for (let i = 0; i < users.length; i++) {
        // Create a new option element
        const option = document.createElement('option');
        // Set the value and text of the option
        option.value = users[i].email;
        option.text = users[i].name;
        // Add the option to the select element
        loginForm.appendChild(option);
    }
}

// Function to populate the signup form
function populateSignupForm() {
    // Iterate through the users array
    for (let i = 0; i < users.length; i++) {
        // Create a new div element for each user
        const div = document.createElement('div');
        // Create a new span element for the name
        const nameSpan = document.createElement('span');
        // Set the text of the span to the user's name
        nameSpan.textContent = users[i].name;
        // Append the span to the div
        div.appendChild(nameSpan);
        // Create a new span element for the email
        const emailSpan = document.createElement('span');
        // Set the text of the span to the user's email
        emailSpan.textContent = users[i].email;
        // Append the span to the div
        div.appendChild(emailSpan);
        // Add the div to the signup form
        signupForm.appendChild(div);
    }
}

populateLoginForm();
populateSignupForm();
