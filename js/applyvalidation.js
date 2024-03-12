let applyJob = document.getElementById("apply-job");
const isLogin = localStorage.getItem("isLogin");
console.log(isLogin);

applyJob.addEventListener("click",(e)=>{
    
    if(isLogin === "true"){
        applyJob.href = "../../apply-job.html";
    }else{
        alert("Please login first to apply!");
        applyJob.href="#";
    }
    
})