let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeToggleLarge = document.querySelector("#dark-mode-toggle-large");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");

  //update darkMode to localStorage
  localStorage.setItem("darkMode", "enabled");
  darkModeToggle.src = "../../images/sunlight.png";
  darkModeToggleLarge.src = "../../images/sunlight.png";
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");

  //update darkMode to localStorage
  localStorage.setItem("darkMode", null);
  darkModeToggle.src = "../../images/moon.png";
  darkModeToggleLarge.src = "../../images/moon.png";
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  console.log("clicked!");
  darkMode = localStorage.getItem("darkMode");
  //check for dark mode is on or not
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

darkModeToggleLarge.addEventListener("click", () => {
  console.log("clicked!");
  darkMode = localStorage.getItem("darkMode");
  //check for dark mode is on or not
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
