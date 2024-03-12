const form = document.getElementById("myform");

const email = document.getElementById("email");
const pwd = document.getElementById("password");

//event for form submitting
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Validating...");
  const isvalidAll = validateInputs();
  console.log(isvalidAll);

  const loginUser = {
    email: email.value.trim(),
    password: pwd.value.trim(),
  };
  console.log(loginUser);
  if (isvalidAll) {
    const usersApiUrl = "http://localhost:3000/Users";
    let data;
    getData(usersApiUrl)
      .then((res) => {
        console.log(res);
        const isUserInData = res.some(
          (user) =>
            user.email === loginUser.email &&
            user.password === loginUser.password
        );
        if (isUserInData) {
          localStorage.setItem("isLogin", "true");
          alert("Login successfully!");
          window.location.href = "index.html";
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  async function getData(url) {
    `   `;
    const response = await fetch(url);
    return await response.json();
  }
});

//foremail
const isValidEmail = (email) => {
  const emailRgex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRgex.test(String(email).toLowerCase());
};

//displaying the error mmessage
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

//for validation success
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  let validEmail;
  let validPwd;

  const emailValue = email.value.trim();
  const pwdValue = pwd.value.trim();

  //validating the email input
  if (emailValue === "" || emailValue == null || !isValidEmail(emailValue)) {
    setError(email, "Invalid email format!");
    validEmail = false;
  } else {
    setSuccess(email);
    validEmail = true;
  }

  //validating the password input
  if (pwdValue === "" || pwdValue == null || pwdValue.length < 6) {
    setError(password, "Password must be at least 6 characters!");
    validPwd = false;
  } else {
    setSuccess(password);
    validPwd = true;
  }

  //checking both of the inputs are valid
  if (validEmail && validPwd) {
    return true;
  } else {
    return false;
  }
};
