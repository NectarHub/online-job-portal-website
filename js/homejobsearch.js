const homeSearchBtn = document.querySelector("#home-search-button");
const homeSearchKeyword = document.querySelector("#home-search-keyword");
const homeSearchCategory = document.querySelector("#home-search-category");
const homeSearchLocation = document.querySelector("#home-search-location");


homeSearchBtn.addEventListener("click", (e) => {
    console.log(homeSearchKeyword.value);
    console.log(homeSearchCategory.value);
    console.log(homeSearchLocation.value);
}); 