let companyNameConatiner = document.getElementById("company-name");
let categoryContainer = document.getElementById("category-con");
let locationContainer = document.getElementById("loc-con");

let findJob = document.getElementById("find-job");
findJob.addEventListener("click", (e) => {
    console.log("clicked");
    localStorage.setItem("company-name", companyNameConatiner.value);
    localStorage.setItem("category", categoryContainer.value);
    localStorage.setItem("location", locationContainer.value);
    window.location.href = "jobs.html";
    e.preventDefault();
});

const browseMoreBtn = document.querySelector("#job-list-browse-more");
browseMoreBtn.addEventListener("click", (e) => {
    localStorage.setItem("company-name", '');
    localStorage.setItem("category", -1);
    localStorage.setItem("location", -1);
    window.location.href = "jobs.html";
    e.preventDefault();
});

const categories = document.querySelectorAll(".category");
for(let i =0;i<categories.length;i++) {
    const category = categories[i];
    category.addEventListener("click", (e) => {
        localStorage.setItem("category", i);
        localStorage.setItem("company-name", '');
        localStorage.setItem("location", -1);
        window.location.href = "jobs.html";
        e.preventDefault();
    })
}

