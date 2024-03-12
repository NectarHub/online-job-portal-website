//selecting inputs
const form = document.getElementById("myform");

const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("conpassword");

//calling validation function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Validating input");
  const isValidAll = validateInputs();
  console.log(isValidAll);
  if (isValidAll) {
    //sending data to the json file
    const newData = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    console.log(newData);

    const usersApiUrl = "http://localhost:3000/Users";

    postData(usersApiUrl, newData)
      .then((res) => console.log(res))
      .catch((error) => console.error("Error:", error));

    // posting the data
    async function postData(url, data) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    }
  }
});

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

//for username
const isValidName = (username) => {
  const nameRgex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  return nameRgex.test(username);
};
//foremail
const isValidEmail = (email) => {
  const emailRgex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRgex.test(String(email).toLowerCase());
};

const validateInputs = () => {
  let validName;
  let validEmail;
  let validPas;
  let validPasRepeat;

  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPassValue = confirmpassword.value.trim();

  //validating the name input
  if (nameValue === "" || nameValue == null || !isValidName(nameValue)) {
    setError(username, "Invalid Name!");
    validName = false;
  } else {
    setSuccess(username);
    validName = true;
  }

  //validating the email input
  if (emailValue === "" || emailValue == null || !isValidEmail(emailValue)) {
    setError(email, "Invalid email format!");
    validEmail = false;
  } else {
    setSuccess(email);
    validEmail = true;
  }

  //validating the password input
  if (
    passwordValue === "" ||
    passwordValue == null ||
    passwordValue.length < 6
  ) {
    setError(password, "Password must be at least 6 characters!");
    validPas = false;
  } else {
    setSuccess(password);
    validPas = true;
  }

  //validating the confirmPassword input
  if (confirmPassValue === "" || confirmPassValue == null) {
    setError(
      confirmpassword,
      "Confirm password must be at least 6 characters!"
    );
    validPasRepeat = false;
  } else if (confirmPassValue !== passwordValue) {
    setError(confirmpassword, "Should be the same with the above!");
    validPasRepeat = false;
  } else {
    setSuccess(confirmpassword);
    validPasRepeat = true;
  }
  if (validName && validEmail && validPas && validPasRepeat) {
    return true;
  } else {
    return false;
  }
};
 