const industriesbtn = document.querySelector(".industries");
const experiencebtn = document.querySelector(".experience");
const salaryBoxbtn = document.querySelector(".salary-box");

const industriesChoices = document.querySelector(".industries-choices");
const experienceChoices = document.querySelector(".experience-choices");
const salaryInput = document.querySelector(".salary-input");

industriesbtn.addEventListener("click", () => {
    industriesChoices.classList.toggle("displayChoices");
})
experiencebtn.addEventListener("click", () => {
    experienceChoices.classList.toggle("displayChoices")
});
salaryBoxbtn.addEventListener("click", () => {
    salaryInput.classList.toggle("displayChoices")
});
