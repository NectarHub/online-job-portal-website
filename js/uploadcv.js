const uploadcv = document.getElementById("uploadcv");
const fileInput = document.getElementById("fileInput");
const isLogin = localStorage.getItem("isLogin");

uploadcv.addEventListener("click", () => {
  if(isLogin === "true"){
    fileInput.click();
  }
  else{
    alert("Please Register first to upload CV!");
  }
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const uploadedFile = e.target.result;
      window.alert("CV Upload successfully!");
    };

    reader.readAsDataURL(file);
  } else {
    window.alert("No file selected!");
  }
});
