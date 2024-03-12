const login = document.getElementById("login");
const logout = document.getElementById("logout");
const logoutSmall = document.getElementById("logout-small");
const loginSmall = document.getElementById("login-small");


document.addEventListener("DOMContentLoaded", () => {
  const isLogin = localStorage.getItem("isLogin");
  
  if(isLogin === "true"){
    logout.classList.remove("none");
    login.classList.add("none");
    logoutSmall.classList.remove("none");
    loginSmall.classList.add("none");
  }
  else{
    logout.classList.add("none");
    login.classList.remove("none");
    logoutSmall.classList.add("none");
    loginSmall.classList.remove("none");
  }
});

logout.addEventListener("click", () => {
  localStorage.setItem("isLogin","false");
  logout.classList.add("none");
  login.classList.remove("none");
  logoutSmall.classList.add("none");
  loginSmall.classList.remove("none");
});
