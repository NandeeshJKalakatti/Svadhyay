const loginLink = document.querySelector("#login-link");
const signupForm = document.querySelector("#signup-form");

loginLink.addEventListener("click", e => {
  e.preventDefault();
  console.log("Redirecting to login page...");
});

signupForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const passwordConfirm = document.querySelector("#password-confirm").value;
  if (password === passwordConfirm) {
    console.log(`Creating account with name: ${name}, email: ${email}, and password: ${password}`);
  } else {}
    console.log("Passwords do not match");
    ,jbkjb
  }
});

