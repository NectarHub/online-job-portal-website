const name = document.getElementById("apply-name");
const email = document.getElementById("apply-email");
const phoneNumber = document.getElementById("apply-ph");
const message = document.getElementById("apply-message");

const sendApplication = document.getElementById("send-application");

sendApplication.addEventListener("click", (e) => {
  e.preventDefault();
  const isValidAll = validateInputs();
  if(isValidAll){
    console.log("validated!");

    //sending data to the json file
    const newData = {
      username: name.value.trim(),
      email: email.value.trim(),
      phoneNumber: phoneNumber.value.trim(),
      message: message.value.trim(),
    };
    console.log(newData);

    const applicationApiUrl = "http://localhost:3000/applications";

    postData(applicationApiUrl, newData)
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

    //success sending applications
    alert("Application sent!");
    window.location.href = "index.html";
  }

});

const validateInputs = () => {
  let validName;
  let validEmail;
  let validPhoneNo;

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();

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

  //validating the name input
  if (nameValue === "" || nameValue == null) {
    setError(name, "Name can't be empty!");
    validName = false;
  } else {
    setSuccess(name);
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

  //validating the phone number
  if (phoneNumberValue === "" || phoneNumberValue == null) {
    setError(phoneNumber, "Invalid phone number!");
    validPhoneNo = false;
  } else {
    setSuccess(phoneNumber);
    validPhoneNo = true;
  }

  if (validName && validEmail && validPhoneNo) {
    return true;
  } else {
    return false;
  }
};
