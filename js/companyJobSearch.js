const jobs = [
    //kbz
    {
        "title": "Head Of Corporate Governance",
        "company": "KBZ",
        "category": "11",
        "location": "Padeban | Yangon",
        "locationID": "0",
        "date": "29 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job1-detail.html",
        "shortDesc": "The role holder is responsible for setting up the overall Governance framework at KBZ," +
            "including" +
            "managing and ...."
    },

    {
        "title": "Accounting Supervisor",
        "company": "KBZ",
        "category": "1",
        "location": "Mayangone | Yangon",
        "locationID": "0",
        "date": "28 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job2-detail.html",
        "shortDesc": " Responsible for accurate month end closing procedures with supporting schedules..."
    },

    {
        "title": "UI/UX Design Specialist",
        "company": "KBZ",
        "category": "3",
        "location": "Sanchaung | Yangon",
        "locationID": "0",
        "date": "27 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job3-detail.html",
        "shortDesc": " The UI/UX Design Specialist will be responsible for creating user-centered UI/UX designs" +
            "by" +
            "understanding business requirements, the voice of the customer, user journeys, ..."
    },

    {
        "title": "Checker - KBZPay Operation",
        "company": "KBZ",
        "category": "8",
        "location": "Mingalartaungnyunt | Yangon",
        "locationID": "0",
        "date": "26 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job4-detail.html",
        "shortDesc": "The role is mainly responsible to handle all tickets (Service Requests) as Level-2" +
            "support" +
            "within defined SLA. ..."
    },

    {
        "title": "Market Research Officer",
        "company": "KBZ",
        "category": "2",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "25 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job5-detail.html",
        "shortDesc": " To lead and drive marketing strategies by providing data-driven insights and analytics" +
            "in" +
            "the banking sector ..."
    },

    {
        "title": "Assistant Channel Manager (Taunggyi)",
        "company": "KBZ",
        "category": "0",
        "location": "Taunggyi | Shan State",
        "locationID": "0",
        "date": "24 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job6-detail.html",
        "shortDesc": "The Assistant Channel Manager is responsible for developing and managing relationships" +
            "with" +
            "channel partners (Insurers, Branches and other Key Stakeholders) to drive sales and re" +
            "..."
    },

    {
        "title": "Project Manager (Banking Card Operation)",
        "company": "KBZ",
        "category": "10",
        "location": " Mingalartaungnyunt | Yangon",
        "locationID": "0",
        "date": "23 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job7-detail.html",
        "shortDesc": "The Card Operations Project Manager is responsible to manage the projects under Card" +
            "Operations and keep the proper track and always f ..."
    },

    {
        "title": "Banking Assistant (ATM Operation - MDY)",
        "company": "KBZ",
        "category": "3",
        "location": "Chanayethazan | Mandalay",
        "locationID": "1",
        "date": "22 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job8-detail.html",
        "shortDesc": "Being able to do 'servicing' and 'maintenance' of ATMs in bank branches and public areas" +
            "for" +
            "the deployme ..."

    },

    {
        "title": "Junior Content Specialist",
        "company": "KBZ",
        "category": "12",
        "location": " Pabedan | Yangon",
        "locationID": "0",
        "date": "20 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "The Junior Content Specialist will be responsible to increase customer engagement," +
            "provide" +
            "creative contents, support in creating campaigns..."
    },

    //3.atom
    {
        "title": "Assistant Manager,Statutory Reporting",
        "company": "ATOM",
        "category": "1",
        "location": "Kyauktada | Yangon",
        "locationID": "0",
        "date": "15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job1-detail.html",
        "shortDesc": "The successfully appointed individual will be responsible for daily general ledger transactions, intercompany accounting ..."
    },

    {
        "title": "Asst Manager/Manager, Channel Management (Bago)",
        "company": "ATOM",
        "category": "0",
        "location": " Bago | Bago Region",
        "locationID": "2",
        "date": " 20 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job2-detail.html",
        "shortDesc": "Oversee the development of overall sales strategy and plan for small and medium enterprise ..."
    },

    {
        "title": "Senior Manager, Senior Business Analyst",
        "company": "ATOM",
        "category": "0",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 23 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job3-detail.html",
        "shortDesc": "Reporting to the respective line manager, this role involves overseeing the collection, analysis, and ..."
    },

    {
        "title": "Finance & Accounting Lead",
        "company": "ATOM",
        "category": "1",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 17 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job4-detail.html",
        "shortDesc": "The Accounting & Finance Lead is a key leadership position responsible for overseeing all accounting ..."
    },

    {
        "title": "Operations Lead",
        "company": "ATOM",
        "category": "10",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 23 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job5-detail.html",
        "shortDesc": "The Operations and Process Head will be the Lead –Central Operations for the Mobile Money business ..."
    },

    {
        "title": "Asst. Manager/Manager,IT Infrastructure & Security",
        "company": "ATOM",
        "category": "3",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 19 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job6-detail.html",
        "shortDesc": "Maintaining data systems, making travel arrangements for managers, taking phone calls, producing reports ..."
    },

    {
        "title": "Sr. Manager, Geo Marketing Analytics",
        "company": "ATOM",
        "category": "10",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 19 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job7-detail.html",
        "shortDesc": "An enthusiastic professional with extensive understanding of Myanmar geography, people, culture and seasonality along ..."
    },

    {
        "title": "Head Of Value Management Desk",
        "company": "ATOM",
        "category": "8",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 13 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job8-detail.html",
        "shortDesc": "Senior Manager, Value Management Desk Operation Management is responsible for managing Value Management Desk ..."
    },

    {
        "title": "Manager, Call Center Service Quality Assurance",
        "company": "ATOM",
        "category": "8",
        "location": " Kyauktada | Yangon",
        "locationID": "0",
        "date": " 14 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "Manager, Call Center Quality Assurance is responsible for focusing to improve Call" +
            "Center service quality, establishing and communicating service metrics; monitoring and" +
            "analyzing results ..."
    },

    //CDSG
    {
        "title": "Assistant Process Control Engineer -Port Business ",
        "company": "CDSG",
        "category": "4",
        "location": " Thanlyin | Yangon",
        "locationID": "0",
        "date": " 05 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job1-detail.html",
        "shortDesc": "Handling drive, control, basic repair and keep maintain Control System, motor control panels, ..."
    },

    {
        "title": "Software Engineer ",
        "company": "CDSG",
        "category": "3",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 05 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job2-detail.html",
        "shortDesc": "Design, code, test, and debug software applications, ensuring high-quality and scalable..."
    },

    {
        "title": " Merchandiser (Food/Non-Food/Pharmacy)",
        "company": "CDSG",
        "category": "0",
        "location": " Sanchaung | Yangon",
        "locationID": "0",
        "date": " 07 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job3-detail.html",
        "shortDesc": "Review existing stores' product offerings Evaluate and make suggestions for new product offerings..."
    },

    {
        "title": " Product Manager (Citizens Pay) ",
        "company": "CDSG",
        "category": "10",
        "location": " Pabedan | Yangon",
        "locationID": "0",
        "date": " 07 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job4-detail.html",
        "shortDesc": "Owned the end-to-end product development process, from ideation to launch, ensuring ..."
    },

    {
        "title": "Assistant Sales Manager (Wheat Flour) ",
        "company": "CDSG",
        "category": "0",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 08 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job5-detail.html",
        "shortDesc": "Develop a sales strategy to achieve organizational sales goals Formulate sales policies and..."
    },

    {
        "title": "Customer Care Specialist (Digital Channel) ",
        "company": "CDSG",
        "category": "0",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 09 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job6-detail.html",
        "shortDesc": "Social Media Community Management Engage with customers across various social media..."
    },

    {
        "title": "Senior Accountant ",
        "company": "CDSG",
        "category": "8",
        "location": "Dagon | Yangon",
        "locationID": "0",
        "date": " 09 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job7-detail.html",
        "shortDesc": "Discussed with finance team for daily work load and arranged for finance operation process ..."
    },

    {
        "title": "Assistant Operation Control Officer ",
        "company": "CDSG",
        "category": "1",
        "location": " Thanlyin | Yangon",
        "locationID": "0",
        "date": " 11 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job8-detail.html",
        "shortDesc": " Summarize daily delivery data, Vessel discharging data and send e-mail to customers. Calculate mid-..."
    },

    {
        "title": " Assistant Procurement Manager ",
        "company": "CDSG",
        "category": "4",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 12 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "Responsible for overall control key of functions including: Enter local or oversea vendor list in- ..."
    },

    //coca-cola
    {
        "title": " Internal Control Manager ",
        "company": "Coca-cola",
        "category": "1",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": " 04 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job1-detail.html",
        "shortDesc": "Be the company’s expert on SPPs of The Coca-Cola Company. Be the company’s expert on the..."
    },

    {
        "title": " IT Service Engineer",
        "company": "Coca-cola",
        "category": "3",
        "location": " Hlegu| Yangon",
        "locationID": "0",
        "date": " 01 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job2-detail.html",
        "shortDesc": " Setting up and configuring new laptops, desktops and printers, troubleshooting and ..."
    },

    {
        "title": "Business Analyst",
        "company": "Coca-cola",
        "category": "0",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": " 03 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job3-detail.html",
        "shortDesc": "A Business Analyst is a professional who works closely with stakeholders to identify" +
            "goals, develop best practices for data ..."
    },

    {
        "title": "Safety Officer ",
        "company": "Coca-cola",
        "category": "4",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": " 09 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job4-detail.html",
        "shortDesc": "Identify hazards, conduct specific risk assessments and preventive control measures. ..."
    },

    {
        "title": "Store Keeper ",
        "company": "Coca-cola",
        "category": "11",
        "location": " Hmawbi | Yangon",
        "locationID": "0",
        "date": " 30 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job5-detail.html",
        "shortDesc": "Proper follow storage policy, stacking policy and TPM board display on time. - Ensure that ..."
    },

    {
        "title": " Head Of Tax ",
        "company": "Coca-cola",
        "category": "1",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": " 14 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job6-detail.html",
        "shortDesc": "Manage tax compliance by ensuring complete and accurate tax filings, approve tax payments ..."
    },

    {
        "title": " Secretary - Supply Chain",
        "company": "Coca-cola",
        "category": "7",
        "location": " Hmawbi | Yangon",
        "locationID": "0",
        "date": " 28 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job7-detail.html",
        "shortDesc": " Assist all supply chain director administration work and coordinate all supply chain function level administration work Manage ..."
    },

    {
        "title": " Warehouse Executive",
        "company": "Coca-cola",
        "category": "11",
        "location": " Hmawbi | Yangon",
        "locationID": "0",
        "date": " 10 April, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job8-detail.html",
        "shortDesc": " Smooth and efficient depot operations. Proper manning & resourcing. Coordinate for maintaining Depot stocks as per norms..."
    },

    {
        "title": " Head Of Customer Development - Off Premises ",
        "company": "Coca-cola",
        "category": "8",
        "location": " Hlaingtharya | Yangon",
        "locationID": "0",
        "date": "16 March, 2024",
        "logo": "images/thumb.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "To achieve yearly NSR & PADE growth target and OI margin target. To achieve targeted" +
            "TCCC’s basket incidence and market v ..."
    },

    //grand royal
    {
        "title": "Senior Brand Executive - Activation",
        "company": "Grand Royal",
        "category": "0",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job1-detail.html",
        "shortDesc": " Reporting to the respective line manager, this role involves overseeing the collection," +
            " analysis, andSupport the Brand Manager and coordinate with all internal teams from the" +
            " following functions: ..."
    },

    {
        "title": "Export Manager",
        "company": "Grand Royal",
        "category": "11",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job2-detail.html",
        "shortDesc": " To manage and prepare the required document for export customs clearance process and shipping..."
    },

    {
        "title": "Legal Manager",
        "company": "Grand Royal",
        "category": "14",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job3-detail.html",
        "shortDesc": "The responsibility of a Legal Manager is responsible for overseeing and managing legal.."

    },

    {
        "title": "Sr. Executive - Digital Marketing",
        "company": "Grand Royal",
        "category": "2",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job4-detail.html",
        "shortDesc": "To support the Digital Marketing and Media Team to execute key online campaign components...."
    },

    {
        "title": "Assistant SAP ERP Manager",
        "company": "Grand Royal",
        "category": "3",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job5-detail.html",
        "shortDesc": "SAP (FI): Oversee the financial operations within the SAP ERP system, including general ledger..."
    },

    {
        "title": "Audit Manager",
        "company": "Grand Royal",
        "category": "1",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job6-detail.html",
        "shortDesc": "Internal Audit works with its internal business customers to help develop and improve..."


    },

    {
        "title": "SAP ERP Executive",
        "company": "Grand Royal",
        "category": "3",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job7-detail.html",
        "shortDesc": " SAP ERP Module Management: Take ownership of our SAP ERP system with a particular focus on the ..."
    },

    {
        "title": "Senior Insights Executive",
        "company": "Grand Royal",
        "category": "2",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": "15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job8-detail.html",
        "shortDesc": "Planning, implementing and controlling research projects-both planned and ad-hoc-in an efficient..."

    },

    {
        "title": "Brand Manager",
        "company": "Grand Royal",
        "category": "2",
        "location": "Hlaing | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "This is a role focusing on Brand Strategy and Marketing Communications. Determine brand ..."
    },

    //miu
    {
        "title": "IT Officer",
        "company": "Myanmar Imperial University",
        "category": "3",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 12 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job1-detail.html",
        "shortDesc": "Managing information technology and computer systems Managing IT staff, Controlling, Evaluating ..."
    },

    {
        "title": "Operation Supervisor",
        "company": "Myanmar Imperial University",
        "category": "10",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 15 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job2-detail.html",
        "shortDesc": "Develop, implement and review operational policies and procedures • Contribute operations ..."
    },

    {
        "title": "Cashier",
        "company": "Myanmar Imperial University",
        "category": "9",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 13 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job3-detail.html",
        "shortDesc": "Collect cash and makes payments for income and expenditure Record the day-to-day cash/bank ..."
    },

    {
        "title": "Restaurant Manager",
        "company": "Myanmar Imperial University",
        "category": "8",
        "location": " Chanayetharzan | Mandalay",
        "locationID": "1",
        "date": " 15 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job4-detail.html",
        "shortDesc": "Efficiently coordinate daily operations of both Front of the House and Back of the House within..."
    },

    {
        "title": "Student Support Officer",
        "company": "Myanmar Imperial University",
        "category": "8",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 15 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job5-detail.html",
        "shortDesc": "Collect and analyze data for the purpose of evaluating student progress.Identify needs in ..."
    },

    {
        "title": "Lecturer (Business/Marketing/Hospitality)",
        "company": "Myanmar Imperial University",
        "category": "9",
        "location": " Aungmyaythazan | Mandalay ",
        "locationID": "1",
        "date": " 06 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job6-detail.html",
        "shortDesc": "Essential Duties and Responsibilities: Faculty is expected to study learning outcomes and ..."
    },

    {
        "title": "English Lecturer (Local/Expatriate)",
        "company": "Myanmar Imperial University",
        "category": "9",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 07 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job7-detail.html",
        "shortDesc": "Faculty is expected to study learning outcomes and assessment criteria assigned by MIU for ..."
    },

    {
        "title": "Program Coordinator",
        "company": "Myanmar Imperial University",
        "category": "2",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 10 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job8-detail.html",
        "shortDesc": "Lead the marketing and sales efforts for respective education programs Plan and coordinate promotional ..."
    },

    {
        "title": "Sales /Marketing Manager",
        "company": "Myanmar Imperial University",
        "category": "0",
        "location": " Dagon | Yangon",
        "locationID": "0",
        "date": " 10 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "City Academy International Ltd. has 3 Programs: 1 City College Yangon: teaches college program offering UK degrees ..."
    },

    //young
    {
        "title": "Dev Ops Engineer",
        "company": "Young Investment Group",
        "category": "3",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 15 March 2024 ",
        "logo": "images/icon.png",
        "detailLink": "job1-detail.html",
        "shortDesc": "The DevOps engineer need to be agile enough to wear a technical hat and manage operations..."
    },

    {
        "title": "Mobile Developer",
        "company": "Young Investment Group",
        "category": "3",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 14 March 2024 ",
        "logo": "images/icon.png",
        "detailLink": "job2-detail.html",
        "shortDesc": "Support the entire application lifecycle (concept, design, test, release, and support) Produce fully...",
    },

    {
        "title": "Admin Assistant",
        "company": "Young Investment Group",
        "category": "7",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": "03 March 2024 ",
        "logo": "images/icon.png",
        "detailLink": "job3-detail.html",
        "shortDesc": "Collect bills such as MCDC, EPC and other monthly bills and perform the payments accordingly..."
    },

    {
        "title": "Deputy Chief Technology Officer",
        "company": "Young Investment Group",
        "category": "3",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 15 March 2024 ",
        "logo": "images/icon.png",
        "detailLink": "job4-detail.html",
        "shortDesc": "We are seeking an experienced and dynamic Deputy Chief Technology Officer (Deputy CTO) to..."
    },

    {
        "title": "UI/ UX Designer",
        "company": "Young Investment Group",
        "category": "3",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 17 March 2024 ",
        "logo": "images/icon.png",
        "detailLink": "job5-detail.html",
        "shortDesc": "We are seeking a creative and detail-oriented UI/UX Designer to join our dynamic team.As a..."
    },

    {
        "title": "Quality Assurance - Information Technology",
        "company": "Young Investment Group",
        "category": "3",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 16 March 2024 ",
        "logo": "images/icon.png",
        "detailLink": "job6-detail.html",
        "shortDesc": "Create detailed, comprehensive and well-structured test plans and test cases Suggest..."
    },

    {
        "title": "O&M Engineer",
        "company": "Young Investment Group",
        "category": "4",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 15 March 2024 ",
        "logo": "images/icon.png",
        "detailLink": "job7-detail.html",
        "shortDesc": "Responsible for the Operations and maintenance of the Telecom tower sites - Coordinate,monitor..."
    },

    {
        "title": "Head Of Underwriter (Life Insurances)",
        "company": "Young Investment Group",
        "category": "12",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 16 March 2024 ",
        "logo": "images/icon.png",
        "detailLink": "job8-detail.html",
        "shortDesc": "Job Description To underwrite client cases based on medical and financial standpoints using findings..."
    },

    {
        "title": "HR Assistant",
        "company": "Young Investment Group",
        "category": "6",
        "location": " Mayangone | Yangon",
        "locationID": "0",
        "date": " 16 March 2024 ",
        "logo": "images/icon.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "Arrange job postings, CV screening, short list CV, interview arrangement. -Perform relevant tests and..."
    },

    //marga
    {
        "title": "Sales Executive",
        "company": "MARGA ",
        "category": "0",
        "location": "Yankin | Yangon",
        "locationID": "0",
        "date": " 01 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job1-detail.html",
        "shortDesc": " To develops new shops,retailers/Interacting" +
            " with Distributors & Agents on daily basis regarding sales order..."
    },

    {
        "title": "HR Specialist - Compensation And Benefit",
        "company": "MARGA ",
        "category": "6",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "01 May 2024",
        "logo": "images/thumb.png",
        "detailLink": "job2-detail.html",
        "shortDesc": " Manage to all Marga legal entities all of employees Attendance and Leave/" +
            "Calculate payroll, SSB and ..."
    },

    {
        "title": "English Teacher",
        "company": "MARGA ",
        "category": "9",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "01 May 2024",
        "logo": "images/thumb.png",
        "detailLink": "job3-detail.html",
        "shortDesc": "Responsible for planning and delivering dynamic and interactive English classes" +
            "to learners at every level ..."

    },

    {
        "title": "Graphic Designer",
        "company": "MARGA ",
        "category": "2",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "logo": "images/thumb.png",
        "detailLink": "job4-detail.html",
        "shortDesc": " Conceive and create killer work at the highest level/" +
            " Develop concepts and collaborate with marketing department and vendors to ..."
    },

    {
        "title": "Customer Service Executive",
        "company": "MARGA ",
        "category": "8",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "14 Mar 2024",
        "logo": "images/thumb.png",
        "detailLink": "job5-detail.html",
        "shortDesc": " The role of the Customer Service Specialist will be to assist the Customer Service" +
            + "Supervisor in managing ..."

    },

    {
        "title": "Assistant Structural Design Manager-Civil",
        "company": "MARGA ",
        "category": "4",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "14 Mar 2024",
        "logo": "images/thumb.png",
        "detailLink": "job6-detail.html",
        "shortdesc": " Review all structural design documentation prepared/ Attend regular design coordination meetings..."

    },

    {
        "title": "Digital Marketing",
        "company": "MARGA ",
        "category": "2",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "23 Mar 2024",
        "logo": "images/thumb.png",
        "detailLink": "job7-detail.html",
        "shortDesc": "Data validation and collecting/  Need to implement listening queries in social media collection tools to monitor ..."
    },

    {
        "title": "Assistant Property Officer",
        "company": "MARGA ",
        "category": "10",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "18 Mar 2024",
        "logo": "images/thumb.png",
        "detailLink": "job8-detail.html",
        "shortDesc": "Receive instructions directly from the Customer Service Manager. Coordinate with Customer Service Manager for ..."

    },

    {
        "title": "Senior MEP Design Engineer",
        "company": "MARGA ",
        "category": "4",
        "location": " Yankin | Yangon",
        "locationID": "0",
        "date": "18 Mar 2024",
        "logo": "images/thumb.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "Lead the construction site project team, subcontractors, owner’s consultants and representatives to ensure ..."

    },

    //heineken

    {
        "title": "Packaging Operator",
        "company": "Heineken",
        "category": "5",
        "location": "Hmawbi | Yangon",
        "locationID": "0",
        "date": "28 Mar, 2024",
        "logo": "images/hlo.jpg",
        "detailLink": "job1-detail.html",
        "shortDesc": "Effective operation of the equipment in order to achieve packaging targets Perform first line maintenance..."
    },

    {
        "title": "Mechanical Technician",
        "company": "Heineken",
        "category": "4",
        "location": "Hmawbi | Yangon",
        "locationID": "0",
        "date": "01 Mar, 2024 ",
        "logo": "images/hlo.jpg",
        "detailLink": "job2-detail.html",
        "shortDesc": " Participate to manage and develop the HEINEKEN Myanmar Engineering Team To carry out mechanical ..."
    },
    {
        "title": "Otc Administrator",
        "company": "Heineken",
        "category": "1",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "01 Mar, 2024",
        "logo": "images/hlo.jpg",
        "detailLink": "job3-detail.html",
        "shortDesc": "Responsible for Account Receivables Function (including interco sales) Posting Sale Update and receipt ..."
    },
    {
        "title": "Demand Planner",
        "company": "Heineken",
        "category": "0",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "25 March, 2024",
        "logo": "images/hlo.jpg",
        "detailLink": "job4-detail.html",
        "shortDesc": "Review historical sales trends, research demand drivers, prepare forecast data, develop statistical forecast models ..."
    },
    {
        "title": "Outlet Acquisition Executive (MONT)",
        "company": "Heineken",
        "category": "0",
        "location": "Yankin | Yangon",
        "locationID": "0",
        "date": "26 Mar, 2024",
        "logo": "images/hlo.jpg",
        "detailLink": "job5-detail.html",
        "shortDesc": "Collect necessary information and data from market for Evaluation Define and prioritize the key-customers ..."
    },
    {
        "title": "Key Account Manager (MONT)",
        "company": "Heineken",
        "category": "0",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "06 Mar, 2024",
        "logo": "images/hlo.jpg",
        "detailLink": "job6-detail.html",
        "shortDesc": "Consistently meet or exceed sales team target/KPIs and distributor sales objectives Execute the channel-specific ..."
    },
    {
        "title": "Commercial Business Control Analyst",
        "company": "Heineken",
        "category": "1",
        "location": "Pabedan | Yangon",
        "locationID": "0",
        "date": "03 Mar, 2024",
        "logo": "images/hlo.jpg",
        "detailLink": "job7-detail.html",
        "shortDesc": "Collecting data and cost allocation for financial reporting and data which is required by commerce directors and commercial ..."
    },
    {
        "title": "Draught Beer Service Technician",
        "company": "Heineken",
        "category": "4",
        "location": "Yankin | Yangon",
        "locationID": "0",
        "date": "01 May, 2024",
        "logo": "images/hlo.jpg",
        "detailLink": "job8-detail.html",
        "shortDesc": "Execute draught beer outlet survey, installation & sanitation" +
            "Execute draught beer outlet audit and customer ..."
    },
    {
        "title": "Brewing Operator",
        "company": "Heineken",
        "category": "5",
        "location": "Yankin | Yangon",
        "locationID": "0",
        "date": "11 Mar, 2024 ",
        "logo": "images/hlo.jpg",
        "detailLink": "job9-detail.html",
        "shortDesc": "Adhere to the shift, daily and weekly Brewing plan" +
            "Ensure that all required raw materials are available ..."
    },

    //wall-street
    {
        "title": "Paid Search Assistant Manager",
        "company": "Wall Street English Myanmar",
        "category": "2",
        "location": " Kamaryut | Yangon",
        "locationID": "0",
        "date": " 10 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job1-detail.html",
        "shortDesc": "Paid Search & Display campaign management   Effectively select and revise regularly the list of ..."
    },

    {
        "title": "Coach-Personal Tutor",
        "company": "Wall Street English Myanmar",
        "category": "9",
        "location": " Kamaryut | Yangon",
        "locationID": "0",
        "date": " 11 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job2-detail.html",
        "shortDesc": " Student progress and class booking Prepare a study plan for each student Monitor assigned ..."
    },

    {
        "title": "Career Service Executive - Auston University",
        "company": "Wall Street English Myanmar",
        "category": "9",
        "location": " Aungmyaythazan | Mandalay",
        "locationID": "1",
        "date": " 12 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job3-detail.html",
        "shortDesc": "Network Building Build a network of relationships with the management and /or ..."
    },

    {
        "title": "Trainer (Logiscool)",
        "company": "Wall Street English Myanmar",
        "category": "9",
        "location": " Kamaryut | Yangon",
        "locationID": "0",
        "date": " 10 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job4-detail.html",
        "shortDesc": "Key Areas of Responsibility 1. Teaching - Mainly in charge of teaching all classes at the center assigned classes, follow ..."
    },

    {
        "title": "Internal Event Specialist",
        "company": "Wall Street English Myanmar",
        "category": "6",
        "location": " Bahan | Yangon",
        "locationID": "0",
        "date": " 11 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job5-detail.html",
        "shortDesc": "Event Planning and Execution   Initiate monthly meetings with key stakeholders to conceptualize  ..."
    },

    {
        "title": "Sales Consultant (Education)",
        "company": "Wall Street English Myanmar",
        "category": "0",
        "location": " Kamaryut | Yangon",
        "locationID": "0",
        "date": " 12 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job6-detail.html",
        "shortDesc": "Sales effectiveness Demonstrate high degree of understanding of WSE product and method Master presentation skills in co ..."
    },

    {
        "title": "Sales Manager - B2B",
        "company": "Wall Street English Myanmar",
        "category": "0",
        "location": "  Lanmadaw  | Yangon",
        "locationID": "0",
        "date": " 10 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job7-detail.html",
        "shortDesc": "Job Overview Promoting services and generate opportunities and revenues from new clients in the designated area or design ..."
    },

    {
        "title": "Admin Executive (Auston/Kids&Us)",
        "company": "Wall Street English Myanmar",
        "category": "7",
        "location": "  Kamaryut | Yangon",
        "locationID": "0",
        "date": " 11 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job8-detail.html",
        "shortDesc": "Administration Support Coordinate with Finance Business Par tner to prepare the administration budget. Monitor inventory of offics and s ..."
    },

    {
        "title": "School Academic Supervisor ( Logiscool )",
        "company": "Wall Street English Myanmar",
        "category": "9",
        "location": " Lanmadaw  | Yangon",
        "locationID": "0",
        "date": " 13 March, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "Logiscool teaches children coding and digital literacy in fun-based after-school centers. Founded in Budapest, Hungary, in 201..."
    },

    //yoma
    {
        "title": "Senior Officer - Corporate Secretary",
        "company": "Yoma Bank",
        "category": "7",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "02 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job1-detail.html",
        "shortDesc": " This role will assist the Corporate Secretary in fulfilling her duties as stipulated by" +
            "prevailing laws and as assigned by the board ..."
    },

    {
        "title": "Assistant Manager - Valuation (Treasury & FI)",
        "company": "Yoma Bank",
        "category": "1",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "04 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job2-detail.html",
        "shortDesc": " The Treasury Valuation Team is primarily responsible for assessing and monitoring risks" +
            "associated with products and services ..."
    },

    {
        "title": "Assistant Manager – Financial Institutions",
        "company": "Yoma Bank",
        "category": "1",
        "location": "Mandalay",
        "locationID": "1",
        "date": "06 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job3-detail.html",
        "shortDesc": " Yoma Bank’s Treasury and FIs department is looking for a highly motivated individual who" +
            "as Assistant Manager will support and ..."
    },

    {
        "title": "Assistant Manager -Business Process Analyst",
        "company": "Yoma Bank",
        "category": "10",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "01 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job4-detail.html",
        "shortDesc": "The Operations Division is responsible for developing and managing Yoma Bank’s" +
            " operations to create excellent value for the ..."
    },

    {
        "title": "Receptionist",
        "company": "Yoma Bank",
        "category": "8",
        "location": "Mandalay",
        "locationID": "1",
        "date": "03 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job5-detail.html",
        "shortDesc": " Daily handover to/from the next/previous shift.Check RFID Cards from the previous day" +
            "and add daily records to the computer ..."
    },

    {
        "title": "Officer - Business Analyst",
        "company": "Yoma Bank",
        "category": "3",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "05 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job6-detail.html",
        "shortDesc": "The business analyst will capture the business requirements by working together with" +
            " stakeholders and play an important ..."
    },

    {
        "title": "Relationship Manager- Transaction Banking Services",
        "company": "Yoma Bank",
        "category": "0",
        "location": "Chanmyathazi | Mandalay",
        "locationID": "1",
        "date": "06 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job7-detail.html",
        "shortDesc": "As Transaction Manager to develop and implement a sound transaction banking business for" +
            " the bank by driving and ..."
    },

    {
        "title": "Senior IT Security Engineer",
        "company": "Yoma Bank",
        "category": "3",
        "location": "Mandalay",
        "locationID": "1",
        "date": "05 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job8-detail.html",
        "shortDesc": "Monitoring security alerts and events, analyzing security incidents, responding to" +
            "security incidents, and escalating ..."
    },

    {
        "title": "Assistant Manager - Trade Finance Sales & Advisory",
        "company": "Yoma Bank",
        "category": "0",
        "location": "Thanlyin | Yangon",
        "locationID": "0",
        "date": "04 May, 2024 ",
        "logo": "images/thumb.png",
        "detailLink": "job9-detail.html",
        "shortDesc": "Trade & FX Sales Specialist, focus on driving the development of Trade Finance & FX" +
            " Transactional Business and ..."
    },

    //global net
    {
        "title": "Chief Technology Officer (CTO)",
        "company": "Global Net",
        "category": "4",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/logo.jpg",
        "detailLink": "job1-detail.html",
        "shortDesc": "Develop and execute a comprehensive technology roadmap aligned with business objectives,focusing on FTTx, DIA, Dark Fiber, ..."
    },

    {
        "title": "Assistant General Manager - Sales & Marketing",
        "company": "Global Net",
        "category": "0",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 14 March, 2024 ",
        "logo": "images/logo.jpg",
        "detailLink": "job2-detail.html",
        "shortDesc": "Manage employees in the marketing department and create team goals and targets Take company goals and strategy and implement them into marketing ..."
    },

    {
        "title": "Chief Engineer - Core Network",
        "company": "Global Net",
        "category": "4",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 03 March, 2024 ",
        "logo": "images/logo.jpg",
        "detailLink": "job3-detail.html",
        "shortDesc": "Reporting to the respective line manager, this role involves overseeing the collection, analysis, and ..."
    },

    {
        "title": "Chief Engineer - IT & Internet",
        "company": "Global Net",
        "category": "3",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/logo.jpg",
        "detailLink": "job4-detail.html",
        "shortDesc": "Creative problem-solving skills coupled with technological expertise are required to deal with day-to-day occurrences. Whether it's ..."
    },

    {
        "title": "Chief Engineer - Fiber Network",
        "company": "Global Net",
        "category": "4",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 17 March, 2024 ",
        "logo": "images/logo.jpg",
        "detailLink": "job5-detail.html",
        "shortDesc": "Determines the goals of the company or organization devises plans for each phase of the project identifies and procures the resources needed ..."
    },

    {
        "title": "Deputy Chief Engineer - Core Network",
        "company": "Global Net",
        "category": "4",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 16 March, 2024 ",
        "logo": "images/logo.jpg",
        "detailLink": "job6-detail.html",
        "shortDesc": "Technical analysis of operational metrics for a company’s customers to ensure service quality. Review of architecture/designs ..."
    },

    {
        "title": "Manager - Sales & Marketing (5BB)",
        "company": "Global Net",
        "category": "0",
        "location": " Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/logo.jpg",
        "detailLink": "job7-detail.html",
        "shortDesc": "Establish sales objectives by forecasting and developing annual sales quotas for regions and territories; projecting expected sales volume ..."
    },

    {
        "title": "Business Development Manager",
        "company": "Global Net",
        "category": "0",
        "location": " Yangon",
        "locationID": "0",
        "date": " 16 March, 2024 ",
        "logo": "images/logo.jpg",
        "detailLink": "job8-detail.html",
        "shortDesc": "Define the Sales target , develop opportunities and responsible for target achievement.Manage the tender/bid/project including ..."
    },

    {
        "title": "Assistant Marketing Manager (Global Net)",
        "company": "Global Net",
        "category": "0",
        "location": " Sule | Yangon",
        "locationID": "0",
        "date": " 15 March, 2024 ",
        "logo": "images/logo.jpg",
        "detailLink": "job9-detail.html",
        "shortDesc": "To create marketing strategies through planning and research on various factors such as pricing, competition, marketing research and ..."
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

const companyName = document.getElementsByName("company-name")[0];
const keywordTag = document.querySelector("#job-search-keyword");
const categoryTag = document.querySelector("#job-search-category");
const locationTag = document.querySelector("#job-search-location");
const companyJobsTag = document.querySelector(".company-jobs");

const findJobs = () => {
    let selectedJobs = jobs.filter((job) => {
        return job.company == companyName.value;
    })
    const keyword = keywordTag.value.toLowerCase();
    const category = categoryTag.value;
    const location = locationTag.value;

    //filter by keyword
    if (keyword != "") {
        selectedJobs = selectedJobs.filter((job) => {
            return job.title.toLowerCase().includes(keyword);
        })
    }
    //filter by category
    if (category >= 0) {
        selectedJobs = selectedJobs.filter((job) => {
            return job.category == category;
        })
    }
    //filter by location
    if (location >= 0) {
        selectedJobs = selectedJobs.filter((job) => {
            return job.locationID == location;
        })
    }

    companyJobsTag.innerHTML = "";
    
    for (let i = 0; i < selectedJobs.length; i++) {
        const job = selectedJobs[i];
        const joboffer =
            `
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card">
            <a href="${job.detailLink}" target="_blank">
                <div>
                    <img src="${job.logo}">
                    <h5 class="job-title flex-grow">${job.title}</h5>
                </div>

                <div class="mt-4 flex-row"><i class="fa-solid fa-location-dot"></i>${job.location}</div>
                <div class="flex-row"><i class="fa-regular fa-folder"></i>${categories[job.category]}
                </div>
                <p>
                   ${job.shortDesc}
                </p>
                <div class="flex-row mt-3">
                    <div class="flex-grow"><i class="fa-solid fa-calendar-days"></i>${job.date}</div>
                    <div class="my-btn btn-view">View Detail</div>
                </div>
            </a>
        </div>
        </div>
        `
        companyJobsTag.innerHTML += joboffer;
    }

    //console.log(selectedJobs);
    if (selectedJobs.length <= 0) {
        console.log("NO Job");
       
        const notFoundDiv = `
        <div class="container">
            <div class="not-found">
                <div class="red">Oops!</div>
                <div class="capital">JOB Not Found</div>
            </div>
        </div>
        `
        companyJobsTag.innerHTML += notFoundDiv;

        document.querySelector(".btn-more").style.display = "none";
    }
    else {
        document.querySelector(".btn-more").style.display = "block";
    }

}

const findJobsBtn = document.querySelector(".job-search-btn");
findJobsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    findJobs();
})
