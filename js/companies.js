const companies = [
    {
        "name": "KBZ",
        "industry": "0",
        "locationId": "0",
        "bg": "Companies/KBZ/images/bg.jpg",
        "thumb": "Companies/KBZ/images/thumb.png",
        "link": "Companies/KBZ/index.html"
    },
    {
        "name": "Heineken",
        "industry": "1",
        "locationId": "0",
        "bg": "Companies/Heineken/images/h2.jpg",
        "thumb": "Companies/Heineken/images/hlo.jpg",
        "link": "Companies/Heineken/index.html"
    },
    {
        "name": "ATOM",
        "industry": "2",
        "locationId": "0",
        "bg": "Companies/Atom/images/bg1.jpg",
        "thumb": "Companies/Atom/images/thumb.png",
        "link": "Companies/Atom/index.html"
    },
    {
        "name": "Coca-Cola",
        "industry": "1",
        "locationId": "0",
        "bg": "Companies/coca-cola/images/bg.jpg",
        "thumb": "Companies/coca-cola/images/thumb.png",
        "link": "Companies/coca-cola/index.html"
    },
    {
        "name": "Myanmar Imperial University",
        "industry": "3",
        "locationId": "1",
        "bg": "Companies/MIU/images/bg.jpg",
        "thumb": "Companies/MIU/images/thumb.png",
        "link": "Companies/MIU/index.html"
    },
    {
        "name": "MARGA Group",
        "industry": "4",
        "locationId": "0",
        "bg": "Companies/MARGA/images/bg.jpg",
        "thumb": "Companies/MARGA/images/thumb.png",
        "link": "Companies/MARGA/index.html"
    },
    {
        "name": "Yoma Bank",
        "industry": "0",
        "locationId": "0",
        "bg": "Companies/Yoma/images/y2.jpg",
        "thumb": "Companies/Yoma/images/ylo.png",
        "link": "Companies/Yoma/index.html"
    },
    {
        "name": "Grand Royal",
        "industry": "1",
        "locationId": "0",
        "bg": "Companies/GrandRoyal/images/bg.jpg",
        "thumb": "Companies/GrandRoyal/images/thumb.png",
        "link": "Companies/GrandRoyal/index.html"
    },
    {
        "name": "Capital Diamond Star Group",
        "industry": "4",
        "locationId": "0",
        "bg": "Companies/CDSG/images/bg.jpg",
        "thumb": "Companies/CDSG/images/thumb.png",
        "link": "Companies/CDSG/index.html"
    },
    {
        "name": "Wall Street English Myanmar",
        "industry": "3",
        "locationId": "1",
        "bg": "Companies/wall-street/images/img1.jpg",
        "thumb": "Companies/wall-street/images/thumb.png",
        "link": "Companies/wall-street/index.html"
    },
    {
        "name": "Young Investment Group",
        "industry": "0",
        "locationId": "0",
        "bg": "Companies/Young/images/img5.jpg",
        "thumb": "Companies/Young/images/icon.png",
        "link": "Companies/Young/index.html"
    },
    {
        "name": "Global Net",
        "industry": "5",
        "locationId": "0",
        "bg": "Companies/GlobalNet/images/p2.jpg",
        "thumb": "Companies/GlobalNet/images/logo.jpg",
        "link": "Companies/GlobalNet/index.html"
    }
]

const industries = [
    "Banking/ Insurance/ Microfinance",
    "Food and Beverage",
    "Telecommunications",
    "Education/Training",
    "Construction/Building",
    "IT Software & Hardware",
    "Logistics, Warehousing, Port"
]

const companiesResultTag = document.querySelector("#companies-result");
const companyName = document.querySelector("#com-name");
const companyIndustry = document.querySelector("#com-industry");

const companySearchBtn = document.querySelector("#company-search");

companySearchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let selectedCompanies = companies;

    //filter by company name
    if (companyName != "") {
        selectedCompanies = selectedCompanies.filter((com) => {
            return com.name.toLowerCase().includes(companyName.value.toLowerCase());
        })
    }
    console.log(selectedCompanies);
    //filter by industry
    if (companyIndustry.value >= 0) {
        selectedCompanies = selectedCompanies.filter((com) => {
            console.log(com.industry);
            console.log(companyIndustry.value);
            console.log(com.industry == companyIndustry.value);
            return com.industry == companyIndustry.value;
        })
    }

    companiesResultTag.innerHTML = "";
    for (let i = 0; i < selectedCompanies.length; i++) {
        const company = selectedCompanies[i];
        const companyTag = `
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <a href="${company.link}" target="_blank" class="card company-container">
                            <img src="${company.bg}" class="company-bg-img card-image-top">
                            <div>
                                <h4 class="company-name">${company.name}</h4>
                                <div>
                                    <div class="d-flex pb-2 company-industry">
                                        <i class="fa-regular fa-folder d-block"> </i>
                                        <span>${industries[company.industry]}</span>
                                    </div>
                                    <div class="d-flex company-industry"><i class="fa-regular fa-envelope"></i>
                                        107 open jobs
                                    </div>
                                </div>
                            </div>
                            <img src="${company.thumb}" class="company-thumbnail">
                        </a>

                    </div>
        `
        companiesResultTag.innerHTML += companyTag;
    }
    //console.log(companyName.value, companyIndustry.value, companyLocation.value);
})
