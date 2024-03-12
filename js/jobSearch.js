const performHomeSearch = () => {
    let homecompanyName = localStorage.getItem("company-name");
    let homeCategory = localStorage.getItem("category");
    let homeLocation = localStorage.getItem("location");
    console.log(homecompanyName, homeCategory, homeLocation);

    let homeSearchClick = false;

    if (homecompanyName !== '') {
        jobSearchKeyword.value = homecompanyName;
        homeSearchClick = true;
    }

    if (homeCategory > -1) {
        jobSearchCategory.value = homeCategory;
        homeSearchClick = true;
    }

    if (homeLocation > -1) {
        jobSearchLocation.value = homeLocation;
        homeSearchClick = true;
    }

    console.log(homeSearchClick);
    if (homeSearchClick) {
        searchJobs(new Event("build"));
        
        console.log("performed home search")
    }
}

const jobs = [
    //1.kbz
    {
        "title": "Head Of Corporate Governance",
        "company": "KBZ",
        "category": "14",
        "industry": "0",
        "experience": "3",
        "salary": "800000",
        "location": "Padeban | Yangon",
        "locationID": "0",
        "date": "29 March, 2024 ",
        "logo": "Companies/KBZ/images/thumb.png",
        "detailLink": "Companies/KBZ/job1-detail.html"
    },

    {
        "title": "Accounting Supervisor",
        "company": "KBZ",
        "category": "1",
        "industry": "0",
        "experience": "1",
        "salary": "520000",
        "location": "Mayangone | Yangon",
        "locationID": "0",
        "date": "28 March, 2024",
        "logo": "Companies/KBZ/images/thumb.png",
        "detailLink": "Companies/KBZ/job2-detail.html"
    },

    {
        "title": "UI/UX Design Specialist",
        "company": "KBZ",
        "category": "3",
        "industry": "0",
        "experience": "1",
        "salary": "600000",
        "location": "Sanchaung | Yangon",
        "locationID": "0",
        "date": "27 March, 2024",
        "logo": "Companies/KBZ/images/thumb.png",
        "detailLink": "Companies/KBZ/job3-detail.html"
    },

    {
        "title": "Checker - KBZPay Operation",
        "company": "KBZ",
        "category": "8",
        "industry": "0",
        "experience": "0",
        "salary": "300000",
        "location": "Mingalartaungnyunt | Yangon",
        "locationID": "0",
        "date": "26 March, 2024",
        "logo": "Companies/KBZ/images/thumb.png",
        "detailLink": "Companies/KBZ/job4-detail.html"
    },

    {
        "title": "Market Research Officer",
        "company": "KBZ",
        "category": "2",
        "industry": "0",
        "experience": "3",
        "salary": "1100000",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "25 March, 2024",
        "logo": "Companies/KBZ/images/thumb.png",
        "detailLink": "Companies/KBZ/job5-detail.html"
    },

    {
        "title": "Assistant Channel Manager (Taunggyi)",
        "company": "KBZ",
        "category": "0",
        "industry": "0",
        "experience": "0",
        "salary": "350000",
        "location": "Taunggyi | Shan State",
        "locationID": "0",
        "date": "24 March, 2024",
        "logo": "Companies/KBZ/images/thumb.png",
        "detailLink": "Companies/KBZ/job6-detail.html"
    },

    {
        "title": "Project Manager (Banking Card Operation)",
        "company": "KBZ",
        "category": "10",
        "industry": "0",
        "experience": "1",
        "salary": "420000",
        "location": " Mingalartaungnyunt | Yangon",
        "locationID": "0",
        "date": "23 March, 2024",
        "logo": "Companies/KBZ/images/thumb.png",
        "detailLink": "Companies/KBZ/job7-detail.html"
    },

    {
        "title": "Banking Assistant (ATM Operation - MDY)",
        "company": "KBZ",
        "category": "3",
        "industry": "0",
        "experience": "3",
        "salary": "530000",
        "location": "Chanayethazan | Mandalay",
        "locationID": "1",
        "date": "22 March, 2024",
        "logo": "Companies/KBZ/images/thumb.png",
        "detailLink": "Companies/KBZ/job8-detail.html"
    },

    {
        "title": "Junior Content Specialist",
        "company": "KBZ",
        "category": "13",
        "industry": "0",
        "experience": "0",
        "salary": "250000",
        "location": " Pabedan | Yangon",
        "locationID": "0",
        "date": "20 March, 2024",
        "logo": "Companies/KBZ/images/thumb.png",
        "detailLink": "Companies/KBZ/job9-detail.html"
    },

    //2.heineken
    {
        "title": "Packaging Operator",
        "company": "Heineken",
        "category": "5",
        "industry": "1",
        "experience": "2",
        "salary": "480000",
        "location": "Hmawbi | Yangon",
        "locationID": "0",
        "date": "28 Mar, 2024",
        "logo": "Companies/Heineken/images/hlo.jpg",
        "detailLink": "Companies/Heineken/job1-detail.html"
    },
    {
        "title": "Mechanical Technician",
        "company": "Heineken",
        "category": "4",
        "industry": "1",
        "experience": "1",
        "salary": "400000",
        "location": "Hmawbi | Yangon",
        "locationID": "0",
        "date": "01 Mar, 2024 ",
        "logo": "Companies/Heineken/images/hlo.jpg",
        "detailLink": "Companies/Heineken/job2-detail.html"
    },
    {
        "title": "Otc Administrator",
        "company": "Heineken",
        "category": "1",
        "industry": "1",
        "experience": "3",
        "salary": "600000",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "13 Mar, 2024",
        "logo": "Companies/Heineken/images/hlo.jpg",
        "detailLink": "Companies/Heineken/job3-detail.html"
    },
    {
        "title": "Demand Planner",
        "company": "Heineken",
        "category": "0",
        "industry": "1",
        "experience": "1",
        "salary": "350000",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "25 March, 2024",
        "logo": "Companies/Heineken/images/hlo.jpg",
        "detailLink": "Companies/Heineken/job4-detail.html"
    },
    {
        "title": "Outlet Acquisition Executive (MONT)",
        "company": "Heineken",
        "category": "0",
        "industry": "1",
        "experience": "3",
        "salary": "650000",
        "location": "Yankin | Yangon",
        "locationID": "0",
        "date": "26 Mar, 2024",
        "logo": "Companies/Heineken/images/hlo.jpg",
        "detailLink": "Companies/Heineken/job5-detail.html"
    },
    {
        "title": "Key Account Manager (MONT)",
        "company": "Heineken",
        "category": "0",
        "industry": "1",
        "experience": "3",
        "salary": "700000",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "06 Mar, 2024",
        "logo": "Companies/Heineken/images/hlo.jpg",
        "detailLink": "Companies/Heineken/job6-detail.html"
    },
    {
        "title": "Commercial Business Control Analyst",
        "company": "Heineken",
        "category": "1",
        "industry": "1",
        "experience": "2",
        "salary": "450000",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "03 Mar, 2024",
        "logo": "Companies/Heineken/images/hlo.jpg",
        "detailLink": "Companies/Heineken/job7-detail.html"
    },
    {
        "title": "Draught Beer Service Technician",
        "company": "Heineken",
        "category": "4",
        "industry": "1",
        "experience": "2",
        "salary": "450000",
        "location": "Yankin | Yangon",
        "locationID": "0",
        "date": "01 May, 2024",
        "logo": "Companies/Heineken/images/hlo.jpg",
        "detailLink": "Companies/Heineken/job8-detail.html"
    },
    {
        "title": "Brewing Operator",
        "company": "Heineken",
        "category": "5",
        "industry": "1",
        "experience": "1",
        "salary": "350000",
        "location": "Yankin | Yangon",
        "locationID": "0",
        "date": "11 Mar, 2024 ",
        "logo": "Companies/Heineken/images/hlo.jpg",
        "detailLink": "Companies/Heineken/job9-detail.html"
    },

    //3.atom
    {
        "title": "Assistant Manager,Statutory Reporting",
        "company": "ATOM",
        "category": "1",
        "industry": "2",
        "experience": "3",
        "salary": "450000",
        "location": "Kyauktada | Yangon",
        "locationID": "0",
        "date": "15 March, 2024 ",
        "logo": "Companies/ATOM/images/thumb.png",
        "detailLink": "Companies/ATOM/job1-detail.html"
    },

    {
        "title": "Asst Manager/Manager, Channel Management (Bago)",
        "company": "ATOM",
        "category": "0",
        "industry": "2",
        "experience": "2",
        "salary": "400000",
        "location": " Bago | Bago Region",
        "locationID": "2",
        "date": " 20 March, 2024 ",
        "logo": "Companies/ATOM/images/thumb.png",
        "detailLink": "Companies/ATOM/job2-detail.html"
    },

    {
        "title": "Senior Manager, Senior Business Analyst",
        "company": "ATOM",
        "category": "0",
        "industry": "2",
        "experience": "3",
        "salary": "500000",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 23 March, 2024 ",
        "logo": "Companies/ATOM/images/thumb.png",
        "detailLink": "Companies/ATOM/job3-detail.html"
    },


    {
        "title": "Finance & Accounting Lead",
        "company": "ATOM",
        "category": "1",
        "industry": "2",
        "experience": "3",
        "salary": "650000",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 17 March, 2024 ",
        "logo": "Companies/ATOM/images/thumb.png",
        "detailLink": "Companies/ATOM/job4-detail.html"
    },

    {
        "title": "Operations Lead",
        "company": "ATOM",
        "category": "10",
        "industry": "2",
        "experience": "3",
        "salary": "650000",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 23 March, 2024 ",
        "logo": "Companies/ATOM/images/thumb.png",
        "detailLink": "Companies/ATOM/job5-detail.html"
    },

    {
        "title": "Asst. Manager/Manager,IT Infrastructure & Security",
        "company": "ATOM",
        "category": "3",
        "industry": "2",
        "experience": "3",
        "salary": "500000",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 19 March, 2024 ",
        "logo": "Companies/ATOM/images/thumb.png",
        "detailLink": "Companies/ATOM/job6-detail.html"
    },
    {
        "title": "Sr. Manager, Geo Marketing Analytics",
        "company": "ATOM",
        "category": "10",
        "industry": "2",
        "experience": "3",
        "salary": "570000",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 19 March, 2024 ",
        "logo": "Companies/ATOM/images/thumb.png",
        "detailLink": "Companies/ATOM/job7-detail.html"
    },

    {
        "title": "Head Of Value Management Desk",
        "company": "ATOM",
        "category": "8",
        "industry": "2",
        "experience": "3",
        "salary": "700000",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 13 March, 2024 ",
        "logo": "Companies/ATOM/images/thumb.png",
        "detailLink": "Companies/ATOM/job8-detail.html"
    },
    {
        "title": "Manager, Call Center Service Quality Assurance",
        "company": "ATOM",
        "category": "8",
        "industry": "2",
        "experience": "3",
        "salary": "450000",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 14 March, 2024 ",
        "logo": "Companies/ATOM/images/thumb.png",
        "detailLink": "Companies/ATOM/job9-detail.html"
    },

    //4-coca-cola
    {
        "title": " Internal Control Manager ",
        "company": "Coca-cola",
        "category": "1",
        "industry": "1",
        "experience": "3",
        "salary": "620000",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": " 04 April, 2024",
        "logo": "Companies/coca-cola/images/thumb.png",
        "detailLink": "Companies/coca-cola/job1-detail.html"
    },

    {
        "title": " IT Service Engineer",
        "company": "Coca-cola",
        "category": "3",
        "industry": "1",
        "experience": "3",
        "salary": "780000",
        "location": " Hlegu| Yangon",
        "locationID": "0",
        "date": " 01 March, 2024",
        "logo": "Companies/coca-cola/images/thumb.png",
        "detailLink": "Companies/coca-cola/job2-detail.html"
    },

    {
        "title": "Business Analyst",
        "company": "Coca-cola",
        "category": "0",
        "industry": "1",
        "experience": "2",
        "salary": "500000",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": " 03 April, 2024",
        "logo": "Companies/coca-cola/images/thumb.png",
        "detailLink": "Companies/coca-cola/job3-detail.html"
    },

    {
        "title": "Safety Officer ",
        "company": "Coca-cola",
        "category": "4",
        "industry": "1",
        "experience": "1",
        "salary": "240000",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": " 09 April, 2024",
        "logo": "Companies/coca-cola/images/thumb.png",
        "detailLink": "Companies/coca-cola/job4-detail.html"
    },

    {
        "title": "Store Keeper ",
        "company": "Coca-cola",
        "category": "11",
        "industry": "1",
        "experience": "0",
        "salary": "210000",
        "location": " Hmawbi | Yangon",
        "locationID": "0",
        "date": " 30 March, 2024",
        "logo": "Companies/coca-cola/images/thumb.png",
        "detailLink": "Companies/coca-cola/job5-detail.html"
    },

    {
        "title": " Head Of Tax ",
        "company": "Coca-cola",
        "category": "1",
        "industry": "1",
        "experience": "3",
        "salary": "850000",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": "14 March, 2024",
        "logo": "Companies/coca-cola/images/thumb.png",
        "detailLink": "Companies/coca-cola/job6-detail.html"
    },

    {
        "title": " Secretary - Supply Chain",
        "company": "Coca-cola",
        "category": "7",
        "industry": "1",
        "experience": "1",
        "salary": "230000",
        "location": " Hmawbi | Yangon",
        "locationID": "0",
        "date": " 28 March, 2024",
        "logo": "Companies/coca-cola/images/thumb.png",
        "detailLink": "Companies/coca-cola/job7-detail.html"
    },

    {
        "title": " Warehouse Executive",
        "company": "Coca-cola",
        "category": "11",
        "industry": "1",
        "experience": "3",
        "salary": "850000",
        "location": " Hmawbi | Yangon",
        "locationID": "0",
        "date": " 10 April, 2024",
        "logo": "Companies/coca-cola/images/thumb.png",
        "detailLink": "Companies/coca-cola/job8-detail.html"
    },

    {
        "title": " Head Of Customer Development - Off Premises ",
        "company": "Coca-cola",
        "category": "8",
        "industry": "1",
        "experience": "3",
        "salary": "1200000",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": "16 March, 2024",
        "logo": "Companies/coca-cola/images/thumb.png",
        "detailLink": "Companies/coca-cola/job9-detail.html"
    },

    //5-miu
    {
        "title": "IT Officer",
        "company": "Myanmar Imperial University ",
        "category": "3",
        "industry": "3",
        "experience": "3",
        "salary": "1500000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 12 May, 2024 ",
        "logo": "Companies/MIU/images/thumb.png",
        "detailLink": "Companies/MIU/job1-detail.html"
    },

    {
        "title": "Operation Supervisor",
        "company": "Myanmar Imperial University ",
        "category": "10",
        "industry": "3",
        "experience": "3",
        "salary": "2000000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 15 May, 2024 ",
        "logo": "Companies/MIU/images/thumb.png",
        "detailLink": "Companies/MIU/job2-detail.html"
    },

    {
        "title": "Cashier",
        "company": "Myanmar Imperial University ",
        "category": "9",
        "industry": "3",
        "experience": "0",
        "salary": "200000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 13 May, 2024 ",
        "logo": "Companies/MIU/images/thumb.png",
        "detailLink": "Companies/MIU/job3-detail.html"
    },

    {
        "title": "Restaurant Manager",
        "company": "Myanmar Imperial University ",
        "category": "8",
        "industry": "3",
        "experience": "3",
        "salary": "500000",
        "location": " Chanayetharzan | Mandalay",
        "locationID": "1",
        "date": " 15 May, 2024 ",
        "logo": "Companies/MIU/images/thumb.png",
        "detailLink": "Companies/MIU/job4-detail.html"
    },

    {
        "title": "Student Support Officer",
        "company": "Myanmar Imperial University ",
        "category": "8",
        "industry": "3",
        "experience": "1",
        "salary": "300000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 15 May, 2024 ",
        "logo": "Companies/MIU/images/thumb.png",
        "detailLink": "Companies/MIU/job5-detail.html"
    },


    {
        "title": "Lecturer (Business/Marketing/Hospitality)",
        "company": "Myanmar Imperial University ",
        "category": "9",
        "industry": "3",
        "experience": "1",
        "salary": "350000",
        "location": " Aungmyaythazan | Mandalay ",
        "locationID": "1",
        "date": " 06 May, 2024 ",
        "logo": "Companies/MIU/images/thumb.png",
        "detailLink": "Companies/MIU/job6-detail.html"
    },

    {
        "title": "English Lecturer (Local/Expatriate)",
        "company": "Myanmar Imperial University ",
        "category": "9",
        "industry": "3",
        "experience": "1",
        "salary": "400000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 07 May, 2024 ",
        "logo": "Companies/MIU/images/thumb.png",
        "detailLink": "Companies/MIU/job7-detail.html"
    },


    {
        "title": "Program Coordinator",
        "company": "Myanmar Imperial University ",
        "category": "2",
        "industry": "3",
        "experience": "3",
        "salary": "650000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 10 May, 2024 ",
        "logo": "Companies/MIU/images/thumb.png",
        "detailLink": "Companies/MIU/job8-detail.html"
    },

    {
        "title": "Sales /Marketing Manager",
        "company": "Myanmar Imperial University ",
        "category": "0",
        "industry": "3",
        "experience": "3",
        "salary": "400000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 10 May, 2024 ",
        "logo": "Companies/MIU/images/thumb.png",
        "detailLink": "Companies/MIU/job9-detail.html"
    },

    //6-marga
    {
        "title": "Sales Executive",
        "company": "MARGA ",
        "category": "0",
        "industry": "4",
        "experience": "3",
        "salary": "450000",
        "location": "Yankin | Yangon",
        "locationID": "0",
        "date": " 01 May, 2024 ",
        "logo": "Companies/MARGA/images/thumb.png",
        "detailLink": "Companies/MARGA/job1-detail.html"
    },

    {
        "title": "HR Specialist - Compensation And Benefit",
        "company": "MARGA ",
        "category": "6",
        "industry": "4",
        "experience": "3",
        "salary": "550000",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "01 May 2024",
        "logo": "Companies/MARGA/images/thumb.png",
        "detailLink": "Companies/MARGA/job2-detail.html"
    },

    {
        "title": "English Teacher",
        "company": "MARGA ",
        "category": "9",
        "industry": "4",
        "experience": "3",
        "salary": "500000",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "01 May 2024",
        "logo": "Companies/MARGA/images/thumb.png",
        "detailLink": "Companies/MARGA/job3-detail.html"
    },

    {
        "title": "Graphic Designer",
        "company": "MARGA ",
        "category": "2",
        "industry": "4",
        "experience": "3",
        "salary": "575000",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "14 Mar 2024",
        "logo": "Companies/MARGA/images/thumb.png",
        "detailLink": "Companies/MARGA/job4-detail.html"
    },

    {
        "title": "Customer Service Executive",
        "company": "MARGA ",
        "category": "8",
        "industry": "4",
        "experience": "1",
        "salary": "350000",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "14 Mar 2024",
        "logo": "Companies/MARGA/images/thumb.png",
        "detailLink": "Companies/MARGA/job5-detail.html"
    },

    {
        "title": "Assistant Structural Design Manager-Civil",
        "company": "MARGA ",
        "category": "4",
        "industry": "4",
        "experience": "3",
        "salary": "750000",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "14 Mar 2024",
        "logo": "Companies/MARGA/images/thumb.png",
        "detailLink": "Companies/MARGA/job6-detail.html"
    },

    {
        "title": "Digital Marketing",
        "company": "MARGA ",
        "category": "2",
        "industry": "4",
        "experience": "2",
        "salary": "500000",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "23 Mar 2024",
        "logo": "Companies/MARGA/images/thumb.png",
        "detailLink": "Companies/MARGA/job7-detail.html"
    },

    {
        "title": "Assistant Property Officer",
        "company": "MARGA ",
        "category": "10",
        "industry": "4",
        "experience": "2",
        "salary": "450000",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "18 Mar 2024",
        "logo": "Companies/MARGA/images/thumb.png",
        "detailLink": "Companies/MARGA/job8-detail.html"
    },

    {
        "title": "Senior MEP Design Engineer",
        "company": "MARGA ",
        "category": "4",
        "industry": "4",
        "experience": "3",
        "salary": "550000",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "18 Mar 2024",
        "logo": "Companies/MARGA/images/thumb.png",
        "detailLink": "Companies/MARGA/job9-detail.html"
    },


    //9-yoma
    {
        "title": "Senior Officer - Corporate Secretary",
        "company": "Yoma Bank",
        "category": "7",
        "industry": "0",
        "experience": "1",
        "salary": "400000",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "02 May, 2024 ",
        "logo": "Companies/Yoma/images/thumb.png",
        "detailLink": "Companies/Yoma/job1-detail.html"
    },

    {
        "title": "Assistant Manager - Valuation (Treasury & FI)",
        "company": "Yoma Bank",
        "category": "1",
        "industry": "0",
        "experience": "2",
        "salary": "520000",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "04 May, 2024 ",
        "logo": "Companies/Yoma/images/thumb.png",
        "detailLink": "Companies/Yoma/job2-detail.html"
    },

    {
        "title": "Assistant Manager – Financial Institutions",
        "company": "Yoma Bank",
        "category": "1",
        "industry": "0",
        "experience": "3",
        "salary": "600000",
        "location": "Mandalay",
        "locationID": "1",
        "date": "06 May, 2024 ",
        "logo": "Companies/Yoma/images/thumb.png",
        "detailLink": "Companies/Yoma/job3-detail.html"
    },

    {
        "title": "Assistant Manager -Business Process Analyst",
        "company": "Yoma Bank",
        "category": "10",
        "industry": "0",
        "experience": "2",
        "salary": "600000",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "01 May, 2024 ",
        "logo": "Companies/Yoma/images/thumb.png",
        "detailLink": "Companies/Yoma/job4-detail.html"
    },

    {
        "title": "Receptionist",
        "company": "Yoma Bank",
        "category": "8",
        "industry": "0",
        "experience": "1",
        "salary": "350000",
        "location": "Mandalay",
        "locationID": "1",
        "date": "03 May, 2024 ",
        "logo": "Companies/Yoma/images/thumb.png",
        "detailLink": "Companies/Yoma/job5-detail.html"
    },

    {
        "title": "Officer - Business Analyst",
        "company": "Yoma Bank",
        "category": "3",
        "industry": "0",
        "experience": "3",
        "salary": "700000",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "05 May, 2024 ",
        "logo": "Companies/Yoma/images/thumb.png",
        "detailLink": "Companies/Yoma/job6-detail.html"
    },

    {
        "title": "Relationship Manager- Transaction Banking Services",
        "company": "Yoma Bank",
        "category": "0",
        "industry": "0",
        "experience": "3",
        "salary": "700000",
        "location": "Chanmyathazi | Mandalay",
        "locationID": "1",
        "date": "06 May, 2024 ",
        "logo": "Companies/Yoma/images/thumb.png",
        "detailLink": "Companies/Yoma/job7-detail.html"
    },

    {
        "title": "Senior IT Security Engineer",
        "company": "Yoma Bank",
        "category": "3",
        "industry": "0",
        "experience": "3",
        "salary": "800000",
        "location": "Mandalay",
        "locationID": "1",
        "date": "05 May, 2024 ",
        "logo": "Companies/Yoma/images/thumb.png",
        "detailLink": "Companies/Yoma/job8-detail.html"
    },

    {
        "title": "Assistant Manager - Trade Finance Sales & Advisory",
        "company": "Yoma Bank",
        "category": "0",
        "industry": "0",
        "experience": "3",
        "salary": "800000",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "04 May, 2024 ",
        "logo": "Companies/Yoma/images/thumb.png",
        "detailLink": "Companies/Yoma/job9-detail.html"
    },

    //8-grand-royal
    {
        "title": "Senior Brand Executive - Activation",
        "company": "Grand Royal",
        "category": "0",
        "industry": "1",
        "experience": "3",
        "salary": "3000000",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GrandRoyal/images/thumb.png",
        "detailLink": "Companies/GrandRoyal/job1-detail.html"
    },

    {
        "title": "Export Manager",
        "company": "Grand Royal",
        "category": "11",
        "industry": "1",
        "experience": "3",
        "salary": "2000000",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GrandRoyal/images/thumb.png",
        "detailLink": "Companies/GrandRoyal/job2-detail.html"
    },

    {
        "title": "Legal Manager",
        "company": "Grand Royal",
        "category": "14",
        "industry": "1",
        "experience": "3",
        "salary": "900000",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GrandRoyal/images/thumb.png",
        "detailLink": "Companies/GrandRoyal/job3-detail.html"
    },

    {
        "title": "Sr. Executive - Digital Marketing",
        "company": "Grand Royal",
        "category": "2",
        "industry": "1",
        "experience": "3",
        "salary": "1500000",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GrandRoyal/images/thumb.png",
        "detailLink": "Companies/GrandRoyal/job4-detail.html"
    },

    {
        "title": "Assistant SAP ERP Manager",
        "company": "Grand Royal",
        "category": "3",
        "industry": "1",
        "experience": "3",
        "salary": "1800000",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GrandRoyal/images/thumb.png",
        "detailLink": "Companies/GrandRoyal/job5-detail.html"
    },

    {
        "title": "Audit Manager",
        "company": "Grand Royal",
        "category": "1",
        "industry": "1",
        "experience": "3",
        "salary": "2500000",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GrandRoyal/images/thumb.png",
        "detailLink": "Companies/GrandRoyal/job6-detail.html"
    },

    {
        "title": "SAP ERP Executive",
        "company": "Grand Royal",
        "category": "3",
        "industry": "1",
        "experience": "2",
        "salary": "800000",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GrandRoyal/images/thumb.png",
        "detailLink": "Companies/GrandRoyal/job7-detail.html"
    },

    {
        "title": "Senior Insights Executive",
        "company": "Grand Royal",
        "category": "2",
        "industry": "1",
        "experience": "3",
        "salary": "2500000",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": "15 March, 2024 ",
        "logo": "Companies/GrandRoyal/images/thumb.png",
        "detailLink": "Companies/GrandRoyal/job8-detail.html"
    },

    {
        "title": "Brand Manager",
        "company": "Grand Royal",
        "category": "2",
        "industry": "1",
        "experience": "3",
        "salary": "2000000",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GrandRoyal/images/thumb.png",
        "detailLink": "Companies/GrandRoyal/job9-detail.html"
    },

    //9-cdsg
    {
        "title": "Assistant Process Control Engineer -Port Business ",
        "company": "Capital Diamond Star Group",
        "category": "4",
        "industry": "4",
        "experience": "2",
        "salary": "750000",
        "location": " Thanlyin | Yangon",
        "locationID": "0",
        "date": " 05 April, 2024",
        "logo": "Companies/CDSG/images/thumb.png",
        "detailLink": "Companies/CDSG/job1-detail.html"
    },

    {
        "title": "Software Engineer ",
        "company": "Capital Diamond Star Group",
        "category": "3",
        "industry": "4",
        "experience": "2",
        "salary": "800000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 05 April, 2024",
        "logo": "Companies/CDSG/images/thumb.png",
        "detailLink": "Companies/CDSG/job2-detail.html"
    },

    {
        "title": " Merchandiser (Food/Non-Food/Pharmacy)",
        "company": "Capital Diamond Star Group",
        "category": "0",
        "industry": "4",
        "experience": "2",
        "salary": "500000",
        "location": " Sanchaung | Yangon",
        "locationID": "0",
        "date": " 07 April, 2024",
        "logo": "Companies/CDSG/images/thumb.png",
        "detailLink": "Companies/CDSG/job3-detail.html"
    },

    {
        "title": " Product Manager (Citizens Pay) ",
        "company": "Capital Diamond Star Group",
        "category": "10",
        "industry": "4",
        "experience": "2",
        "salary": "500000",
        "location": " Pabedan | Yangon",
        "locationID": "0",
        "date": " 07 April, 2024",
        "logo": "Companies/CDSG/images/thumb.png",
        "detailLink": "Companies/CDSG/job4-detail.html"
    },

    {
        "title": "Assistant Sales Manager (Wheat Flour) ",
        "company": "Capital Diamond Star Group",
        "category": "0",
        "industry": "4",
        "experience": "1",
        "salary": "300000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 08 April, 2024",
        "logo": "Companies/CDSG/images/thumb.png",
        "detailLink": "Companies/CDSG/job5-detail.html"
    },

    {
        "title": "Customer Care Specialist (Digital Channel) ",
        "company": "Capital Diamond Star Group",
        "category": "0",
        "industry": "4",
        "experience": "1",
        "salary": "250000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 09 April, 2024",
        "logo": "Companies/CDSG/images/thumb.png",
        "detailLink": "Companies/CDSG/job6-detail.html"
    },

    {
        "title": "Senior Accountant ",
        "company": "Capital Diamond Star Group",
        "category": "8",
        "industry": "4",
        "experience": "2",
        "salary": "400000",
        "location": "Dagon | Yangon",
        "locationID": "0",
        "date": " 09 April, 2024",
        "logo": "Companies/CDSG/images/thumb.png",
        "detailLink": "Companies/CDSG/job7-detail.html"
    },

    {
        "title": "Assistant Operation Control Officer ",
        "company": "Capital Diamond Star Group",
        "category": "1",
        "industry": "4",
        "experience": "2",
        "salary": "450000",
        "location": " Thanlyin | Yangon",
        "locationID": "0",
        "date": " 11 April, 2024",
        "logo": "Companies/CDSG/images/thumb.png",
        "detailLink": "Companies/CDSG/job8-detail.html"
    },

    {
        "title": " Assistant Procurement Manager ",
        "company": "Capital Diamond Star Group",
        "category": "4",
        "industry": "4",
        "experience": "1",
        "salary": "350000",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 12 April, 2024",
        "logo": "Companies/CDSG/images/thumb.png",
        "detailLink": "Companies/CDSG/job9-detail.html"
    },

    //10-wall-street
    {
        "title": "Paid Search Assistant Manager",
        "company": "Wall Street English Myanmar",
        "category": "2",
        "industry": "3",
        "experience": "3",
        "salary": "670000",
        "location": " Kamaryut | Yangon",
        "locationID": "0",
        "date": " 10 March, 2024 ",
        "logo": "Companies/wall-street/images/thumb.png",
        "detailLink": "Companies/wall-street/job1-detail.html"
    },

    {
        "title": "Coach-Personal Tutor",
        "company": "Wall Street English Myanmar",
        "category": "9",
        "industry": "3",
        "experience": "3",
        "salary": "510000",
        "location": " Kamaryut | Yangon",
        "locationID": "0",
        "date": " 11 March, 2024 ",
        "logo": "Companies/wall-street/images/thumb.png",
        "detailLink": "Companies/wall-street/job2-detail.html"
    },

    {
        "title": "Career Service Executive - Auston University",
        "company": "Wall Street English Myanmar",
        "category": "9",
        "industry": "3",
        "experience": "1",
        "salary": "130000",
        "location": " Aungmyaythazan | Mandalay",
        "locationID": "1",
        "date": " 12 March, 2024 ",
        "logo": "Companies/wall-street/images/thumb.png",
        "detailLink": "Companies/wall-street/job3-detail.html"
    },

    {
        "title": "Trainer (Logiscool)",
        "company": "Wall Street English Myanmar",
        "category": "9",
        "industry": "3",
        "experience": "0",
        "salary": "300000",
        "location": " Kamaryut | Yangon",
        "locationID": "0",
        "date": " 10 March, 2024 ",
        "logo": "Companies/wall-street/images/thumb.png",
        "detailLink": "Companies/wall-street/job4-detail.html"
    },

    {
        "title": "Internal Event Specialist",
        "company": "Wall Street English Myanmar",
        "category": "6",
        "industry": "3",
        "experience": "3",
        "salary": "420000",
        "location": " Bahan | Yangon",
        "locationID": "0",
        "date": " 11 March, 2024 ",
        "logo": "Companies/wall-street/images/thumb.png",
        "detailLink": "Companies/wall-street/job5-detail.html"
    },

    {
        "title": "Sales Consultant (Education)",
        "company": "Wall Street English Myanmar",
        "category": "0",
        "industry": "3",
        "experience": "3",
        "salary": "330000",
        "location": " Kamaryut | Yangon",
        "locationID": "0",
        "date": " 12 March, 2024 ",
        "logo": "Companies/wall-street/images/thumb.png",
        "detailLink": "Companies/wall-street/job6-detail.html"
    },

    {
        "title": "Sales Manager - B2B",
        "company": "Wall Street English Myanmar",
        "category": "0",
        "industry": "3",
        "experience": "3",
        "salary": "450000",
        "location": "  Lanmadaw  | Yangon",
        "locationID": "0",
        "date": " 10 March, 2024 ",
        "logo": "Companies/wall-street/images/thumb.png",
        "detailLink": "Companies/wall-street/job7-detail.html"
    },

    {
        "title": "Admin Executive (Auston/Kids&Us)",
        "company": "Wall Street English Myanmar",
        "category": "7",
        "industry": "3",
        "experience": "1",
        "salary": "480000",
        "location": "  Kamaryut | Yangon",
        "locationID": "0",
        "date": " 11 March, 2024 ",
        "logo": "Companies/wall-street/images/thumb.png",
        "detailLink": "Companies/wall-street/job8-detail.html"
    },

    {
        "title": "School Academic Supervisor ( Logiscool )",
        "company": "Wall Street English Myanmar",
        "category": "9",
        "industry": "3",
        "experience": "1",
        "salary": "452000",
        "location": " Lanmadaw  | Yangon",
        "locationID": "0",
        "date": " 13 March, 2024 ",
        "logo": "Companies/wall-street/images/thumb.png",
        "detailLink": "Companies/wall-street/job9-detail.html"
    },

    //11-young
    {
        "title": "Dev Ops Engineer",
        "company": "Young Investment Group",
        "category": "3",
        "industry": "0",
        "experience": "3",
        "salary": "1000000",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 15 March 2024 ",
        "logo": "Companies/Young/images/icon.png",
        "detailLink": "Companies/Young/job1-detail.html"
    },

    {
        "title": "Mobile Developer",
        "company": "Young Investment Group",
        "category": "3",
        "industry": "0",
        "experience": "2",
        "salary": "800000",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": "14 March 2024 ",
        "logo": "Companies/Young/images/icon.png",
        "detailLink": "Companies/Young/job2-detail.html"
    },

    {
        "title": "Admin Assistant",
        "company": "Young Investment Group",
        "category": "7",
        "industry": "0",
        "experience": "0",
        "salary": "500000",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": "03 March 2024 ",
        "logo": "Companies/Young/images/icon.png",
        "detailLink": "Companies/Young/job3-detail.html"
    },

    {
        "title": "Deputy Chief Technology Officer",
        "company": "Young Investment Group",
        "category": "3",
        "industry": "0",
        "experience": "3",
        "salary": "1500000",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 15 March 2024 ",
        "logo": "Companies/Young/images/icon.png",
        "detailLink": "Companies/Young/job4-detail.html"
    },

    {
        "title": "UI/ UX Designer",
        "company": "Young Investment Group",
        "category": "3",
        "industry": "0",
        "experience": "2",
        "salary": "700000",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": "17 March 2024 ",
        "logo": "Companies/Young/images/icon.png",
        "detailLink": "Companies/Young/job5-detail.html"
    },

    {
        "title": "Quality Assurance - Information Technology",
        "company": "Young Investment Group",
        "category": "3",
        "industry": "0",
        "experience": "2",
        "salary": "600000",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 16 March 2024 ",
        "logo": "Companies/Young/images/icon.png",
        "detailLink": "Companies/Young/job6-detail.html"
    },

    {
        "title": "O&M Engineer",
        "company": "Young Investment Group",
        "category": "4",
        "industry": "0",
        "experience": "1",
        "salary": "400000",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 15 March 2024 ",
        "logo": "Companies/Young/images/icon.png",
        "detailLink": "Companies/Young/job7-detail.html"
    },

    {
        "title": "Head Of Underwriter (Life Insurances)",
        "company": "Young Investment Group",
        "category": "12",
        "industry": "0",
        "experience": "3",
        "salary": "700000",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 16 March 2024 ",
        "logo": "Companies/Young/images/icon.png",
        "detailLink": "Companies/Young/job8-detail.html"
    },

    {
        "title": "HR Assistant",
        "company": "Young Investment Group",
        "category": "6",
        "industry": "0",
        "experience": "0",
        "salary": "300000",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 16 March 2024 ",
        "logo": "Companies/Young/images/icon.png",
        "detailLink": "Companies/Young/job9-detail.html"
    },
    //12-global net
    {
        "title": "Chief Technology Officer (CTO)",
        "company": "Global Net",
        "category": "4",
        "industry": "5",
        "experience": "3",
        "salary": "1000000",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GlobalNet/images/logo.jpg",
        "detailLink": "Companies/GlobalNet/job1-detail.html"
    },

    {
        "title": "Assistant General Manager - Sales & Marketing",
        "company": "Global Net",
        "category": "0",
        "industry": "5",
        "experience": "3",
        "salary": "1000000",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 14 March, 2024 ",
        "logo": "Companies/GlobalNet/images/logo.jpg",
        "detailLink": "Companies/GlobalNet/job2-detail.html"
    },

    {
        "title": "Chief Engineer - Core Network",
        "company": "Global Net",
        "category": "4",
        "industry": "5",
        "experience": "1",
        "salary": "1000000",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 03 March, 2024 ",
        "logo": "Companies/GlobalNet/images/logo.jpg",
        "detailLink": "Companies/GlobalNet/job3-detail.html"
    },

    {
        "title": "Chief Engineer - IT & Internet",
        "company": "Global Net",
        "category": "3",
        "industry": "5",
        "experience": "3",
        "salary": "3000000",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GlobalNet/images/logo.jpg",
        "detailLink": "Companies/GlobalNet/job4-detail.html"
    },

    {
        "title": "Chief Engineer - Fiber Network",
        "company": "Global Net",
        "category": "4",
        "industry": "5",
        "experience": "3",
        "salary": "800000",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 17 March, 2024 ",
        "logo": "Companies/GlobalNet/images/logo.jpg",
        "detailLink": "Companies/GlobalNet/job5-detail.html"
    },

    {
        "title": "Deputy Chief Engineer - Core Network",
        "company": "Global Net",
        "category": "4",
        "industry": "5",
        "experience": "3",
        "salary": "3000000",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 16 March, 2024 ",
        "logo": "Companies/GlobalNet/images/logo.jpg",
        "detailLink": "Companies/GlobalNet/job6-detail.html"
    },

    {
        "title": "Manager - Sales & Marketing (5BB)",
        "company": "Global Net",
        "category": "0",
        "industry": "5",
        "experience": "3",
        "salary": "1000000",
        "location": " Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GlobalNet/images/logo.jpg",
        "detailLink": "Companies/GlobalNet/job7-detail.html"
    },

    {
        "title": "Business Development Manager",
        "company": "Global Net",
        "category": "0",
        "industry": "5",
        "experience": "3",
        "salary": "2000000",
        "location": " Yangon",
        "locationID": "0",
        "date": " 16 March, 2024 ",
        "logo": "Companies/GlobalNet/images/logo.jpg",
        "detailLink": "Companies/GlobalNet/job8-detail.html"
    },

    {
        "title": "Assistant Marketing Manager (Global Net)",
        "company": "Global Net",
        "category": "0",
        "industry": "5",
        "experience": "3",
        "salary": "1000000",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "Companies/GlobalNet/images/logo.jpg",
        "detailLink": "Companies/GlobalNet/job9-detail.html"
    }

]
const categories = [
    "Sales, Business Development",
    "Finance, Accounting, Audit",
    "Marketing, Media, Creative",
    "IT Hardware, Software",
    "Engineering, Technical",
    "Manufacturing, Factory",
    "HR, Training and Recruitment",
    "Administrative",
    "Customer Service, Support",
    "Teaching, Education, Childcare",
    "Project, Operations Management",
    "Logistics, Warehousing, Port",
    "Medical, Nursing, Pharmacy",
    "Content Writing",
    "Legal, Risk and Compliance"
]
const industries = [
    "Banking/ Insurance/ Microfinance",
    "Food and Beverage",
    "Telecommunications",
    "Education/Training",
    "Construction/Building",
    "IT Software & Hardware"
]
const jobSearchButton = document.querySelector(".job-search-button");
let jobSearchKeyword = document.querySelector("#job-search-keyword");
let jobSearchCategory = document.querySelector("#job-search-category");
let jobSearchLocation = document.querySelector("#job-search-location");

const industriesInputs = document.getElementsByName("industry");
const experiences = document.getElementsByName("experience");
const salaryTag = document.getElementById("minSalary");
const filterApplyBtn = document.querySelector("#filter-apply");

const jobOfferList = document.querySelector(".job-offer-list");

let selectedIndustry = -1;
let selectedExperience = -1;
let minimunSalary = "";
const getFilterInputValue = () => {
    //get selected industry
    for (let i = 0; i < industriesInputs.length; i++) {
        if (industriesInputs[i].checked) {
            selectedIndustry = industriesInputs[i].value;
            //console.log(selectedIndustry);
        }
    }
    //get selected experience
    for (let i = 0; i < experiences.length; i++) {
        if (experiences[i].checked) {
            selectedExperience = experiences[i].value;
        }
    }
    minimunSalary = salaryTag.value;
}

let selectedJobs = [];
const searchJobs = (e) => {
    e.preventDefault();
    selectedJobs = jobs;

    const keyword = jobSearchKeyword.value.toLowerCase();
    //filter by company name, keyword
    if (keyword != "") {
        selectedJobs = selectedJobs.filter((job) => {
            return job.title.toLowerCase().includes(keyword) ||
                job.company.toLowerCase().includes((keyword));
        })
    }

    const selectedCategory = jobSearchCategory.value;
    //filter jobs by category
    if (selectedCategory >= 0) {
        //console.log("Inside selectedCategory");
        selectedJobs = selectedJobs.filter((job) => {
            return job.category == selectedCategory;
        })
    }

    const location = jobSearchLocation.value;
    if (location >= 0) {
        selectedJobs = selectedJobs.filter((job) => {
            return job.locationID == location;
        })
    }
    getFilterInputValue();
    //console.log("selectedIndutry ", selectedIndustry);
    //console.log("selectedExperience ", selectedExperience);
    //console.log("minimunSalary ", minimunSalary);

    //filter by industry
    if (selectedIndustry >= 0) {
        //console.log("Inside selected industry");
        selectedJobs = selectedJobs.filter((job) => {
            return job.industry == selectedIndustry;
        })
    }
    //filter by experience
    if (selectedExperience >= 0) {
        //console.log("Inside selected experience");
        selectedJobs = selectedJobs.filter((job) => {
            return job.experience == selectedExperience;
        })
    }
    //filter by salary
    if (minimunSalary != "") {
        selectedJobs = selectedJobs.filter((job) => {
            console.log(minimunSalary);
            return job.salary >= minimunSalary;
        })
    }

    //update job lists
    jobOfferList.innerHTML = "";
    for (let i = 0; i < selectedJobs.length; i++) {
        const job = selectedJobs[i];
        //console.log(job);
        const jobOfferTag = `
             <a href="${job.detailLink}" target="_blank" class="job-offer">
                 <img src="${job.logo}">
                 <div class="flex-grow">
                     <div class="flex-row">
                         <div class="flex-grow">
                             <h5 class="job-title">${job.title}</h5>
                         </div>
                         <div>
                             <div class="my-btn btn-view view-1">View Detail</div>
                         </div>
                     </div>
                     <div class="company">${job.company}</div>
                     <div class="second-flex-row mt-2">
                         <div class="flex-grow">
                             <div class="location-category">
                                 <div><i class="fa-solid fa-location-dot"></i>${job.location}</div>
                                 <div><i class="fa-regular fa-folder"></i> ${categories[job.category]}
                                 </div>
                             </div>
                         </div>
                         <div><i class="fa-solid fa-calendar-days"></i> Date Line: ${job.date}</div>
                     </div>
                 </div>
             </a>`;
        jobOfferList.innerHTML += jobOfferTag;
    }

    //when no job is found
    if (selectedJobs.length == 0) {
        const notFoundDiv = `
        <div class="container">
            <div class="not-found">
                <div class="red">Oops!</div>
                <div class="capital">JOB Not Found</div>
            </div>
        </div>
        `
        jobOfferList.innerHTML = notFoundDiv;
    }
}

performHomeSearch();
jobSearchButton.addEventListener("click", searchJobs);
filterApplyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    jobSearchButton.click();
});


/*
const homeSearchBtn = document.querySelector("#home-search-button");
const homeSearchKeyword = document.querySelector("#home-search-keyword");
const homeSearchCategory = document.querySelector("#home-search-category");
const homeSearchLocation = document.querySelector("#home-search-location");


if(homeSearchBtn != null) {
    homeSearchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Inside homeSearch event listener");
        console.log(homeSearchKeyword.value);
        console.log(homeSearchCategory.value);
        console.log(homeSearchLocation.value);

        jobSearchCategory.value = homeSearchCategory;
        console.log("jobSearchCategory.value = ",jobSearchCategory);
        searchJobs();
    });
}
*/
/*
function fetchJSONData() {
    fetch("./js/jobs.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
              console.log(data))
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}
*/

/*
let http = new XMLHttpRequest();
http.open("get", "js/jobs.json", true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        jobs = JSON.parse(this.responseText).jobs;
        console.log(jobs);
    }
}
*/