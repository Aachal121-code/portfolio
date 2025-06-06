const profile = document.querySelector("#profile");
const skills = document.querySelector("#skills");
const certifications = document.querySelector("#certifications");
const experience = document.querySelector("#experience");
const project = document.querySelector("#project");

const displayarea=document.querySelector(".displayarea");
displayarea.className="displayarea";

let prof = profile.addEventListener('click',()=>{
    displayarea.innerHTML = ''; 
    if(!document.querySelector(".profileInfo")){
        const profileInfo=document.createElement("div");
        profileInfo.className="profileInfo";
        displayarea.appendChild(profileInfo);

        const profileLogo = document.createElement("i");
        profileLogo.className = "profileLogo";
        profileLogo.innerHTML = `<i class="fa fa-user-circle" aria-hidden="true"></i>`;
        profileInfo.appendChild(profileLogo);

        const profileTextWrapper = document.createElement("div");
        profileTextWrapper.className = "profileTextWrapper";
        
        const profileName = document.createElement("h2");
        profileName.className = "profileName";
        profileName.innerHTML = "Aachal Bhonde" 
        
        const profileRole = document.createElement("h3");
        profileRole.className = "profileRole";
        profileRole.innerHTML = "Web Developer";

        profileTextWrapper.appendChild(profileName);
        profileTextWrapper.appendChild(profileRole);
        profileInfo.appendChild(profileTextWrapper);

        const github = document.createElement("a");
        github.href = "https://github.com/Aachal121-code";
        github.target = "_blank";
        github.className = "github";
        github.innerHTML = "Github";
        displayarea.appendChild(github);

        const linkedin = document.createElement("a");
        linkedin.href = "https://www.linkedin.com/in/aachal-bhonde-a028b9318/";
        linkedin.target = "_blank";
        linkedin.className = "linkedin";
        linkedin.innerHTML = "Linkedin";
        displayarea.appendChild(linkedin);

        const followCount = document.createElement("p");
        followCount.className = "followCount";
        followCount.innerHTML = "0";

        const followButton = document.createElement("button");
        followButton.className = "followButton";
        followButton.innerHTML = "Follow";

        const buttonCount = document.createElement("div");
        buttonCount.className = "buttonCount";
        buttonCount.appendChild(followCount);
        buttonCount.appendChild(followButton);
        displayarea.appendChild(buttonCount);

        const objective = document.createElement("h3");
        objective.className = "objective";
        objective.innerHTML = "Objective";
        
        const summary = document.createElement("p");
        summary.className = "summary";
        summary.innerHTML = "Web Developer Intern skilled in building responsive, user-centric web applications using HTML, CSS, JavaScript, and React.js. Proven ability to solve complex problems with clean, modular code and strong fundamentals in data structures. Eager to contribute to fast-paced development teams with a focus on performance, usability, and innovation.";
        
        const eduName = document.createElement("h3");
        eduName.className = "eduName";
        eduName.innerHTML = "Education";

        const education = document.createElement("p");
        education.className = "education";
        education.innerHTML = "Bachelor of Computer Applications (BCA)<br>Rashtrasant Tukadoji Maharaj Nagpur University <br> 2022 – 2025<br><br>"
        
        const eduSumBox = document.createElement('div');
        eduSumBox.className = "eduSumBox";
        eduSumBox.appendChild(eduName);
        eduSumBox.appendChild(education);
        eduSumBox.appendChild(objective);
        eduSumBox.appendChild(summary);
        displayarea.appendChild(eduSumBox);
        
        let isFollowing = localStorage.getItem('isFollowing') === 'true';
        followButton.innerHTML = isFollowing ? 'Unfollow' : 'Follow';

        if(isFollowing){
            followCount.innerHTML = parseInt(followCount.innerHTML) + 1;
        }
        followButton.addEventListener('click',()=>{
            isFollowing = !isFollowing;
            followButton.innerHTML = isFollowing ? 'Unfollow' : 'Follow';
            const currentCount = parseInt(followCount.innerHTML);
            followCount.innerHTML = isFollowing ? currentCount + 1 : currentCount - 1;
            localStorage.setItem('isFollowing',isFollowing);
        })
    } 
})

skills.addEventListener('click', () => {
    displayarea.innerHTML = '';

    // Main container
    const skillsContainer = document.createElement("div");
    skillsContainer.className = "skillsContainer";

    // --- Languages with progress bars ---
    const skillsLanguages = document.createElement("div");
    skillsLanguages.className = "skills-languages";
    const langHeading = document.createElement("h3");
    langHeading.textContent = "Languages";
    skillsLanguages.appendChild(langHeading);

    // Language data
    const languages = [
        { name: "HTML5", percent: 90 },
        { name: "CSS3", percent: 80 },
        { name: "JavaScript", percent: 80 },
        { name: "Python (Basics)", percent: 60 },
        { name: "C", percent: 80 },
        { name: "C++", percent: 50 },
        { name: "SQL (Basics)", percent: 50 }
    ];

    languages.forEach(lang => {
        const skillBar = document.createElement("div");
        skillBar.className = "skill-bar";

        const label = document.createElement("span");
        label.textContent = lang.name;
        skillBar.appendChild(label);

        const progress = document.createElement("div");
        progress.className = "progress";

        const progressValue = document.createElement("div");
        progressValue.className = "progress-value";
        progressValue.setAttribute("data-percent", lang.percent);
        progressValue.style.width = "0"; // Start at 0 for animation

        progress.appendChild(progressValue);
        skillBar.appendChild(progress);
        skillsLanguages.appendChild(skillBar);
    });

    // --- Other Skills Sections (all 5 boxes) ---
    function createSkillList(title, items) {
        const section = document.createElement("div");
        section.className = "skills-other";
        const heading = document.createElement("h3");
        heading.textContent = title;
        section.appendChild(heading);
        const ul = document.createElement("ul");
        items.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            ul.appendChild(li);
        });
        section.appendChild(ul);
        return section;
    }

    // Data for other skills (all 5 groups)
    const frameworks = ["React.js", "Bootstrap", "DOM Manipulation"];
    const versionControl = ["Git", "GitHub"];
    const devTools = ["Visual Studio Code"];
    const concepts = ["Responsive Web Design", "RESTful APIs", "Component-Based Architecture"];
    const softSkills = ["Problem-Solving", "Team Collaboration", "Code Optimization"];

    // Create a row for other skills
    const skillsOthersRow = document.createElement("div");
    skillsOthersRow.className = "skills-others-row";
    skillsOthersRow.appendChild(createSkillList("Frameworks & Libraries", frameworks));
    skillsOthersRow.appendChild(createSkillList("Version Control", versionControl));
    skillsOthersRow.appendChild(createSkillList("Development Tools", devTools));
    skillsOthersRow.appendChild(createSkillList("Concepts", concepts));
    skillsOthersRow.appendChild(createSkillList("Soft Skills", softSkills));

    // Append both columns to container
    skillsContainer.appendChild(skillsLanguages);
    skillsContainer.appendChild(skillsOthersRow);

    displayarea.appendChild(skillsContainer);

    // Animate progress bars
    setTimeout(() => {
        skillsContainer.querySelectorAll('.progress-value').forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
        });
    }, 200);
});


certifications.addEventListener('click', () => {
    displayarea.innerHTML = '';

    // Main container
    const certificateContainer = document.createElement("div");
    certificateContainer.className = "certificateContainer";

    const heading = document.createElement("h2");
    heading.textContent = "Certifications";
    certificateContainer.appendChild(heading);

    const certificates = [
        {
            title: "C Programming",
            org: "MKCL",
            year: "2023",
            link: "certificates/C_programming.jpg"
        },
        {
            title: "C++ Programming",
            org: "MKCL",
            year: "2023",
            link: "certificates/C++_programming.jpg"
        },
        {
            title: "Python Programming",
            org: "MKCL",
            year: "2024",
            link: "certificates/Python.jpg"
        },
        {
            title: "Web Development",
            org: "crescentweb Technology",
            year: "2023",
            link: "certificates/Web_development.jpg"
        },
        {
            title: "Code; Without Barriers - AI concepts",
            org: "RTMSSU",
            year: "2025",
            link: "certificates/codeWbarriers.png"
        }
    ];

    const certificateList = document.createElement("ul");
    certificateList.className = "certificateList";

    certificates.forEach((cert, i) => {
        const li = document.createElement("li");
        li.className = "certificateItem";
        li.style.animationDelay = `${i * 0.12 + 0.1}s`;

        li.innerHTML = `
            <div class="cert-title">${cert.title}</div>
            <div class="cert-org">${cert.org} <span class="cert-year">${cert.year}</span></div>
            <a href="${cert.link}" target="_blank" class="cert-link">View Certificate</a>
        `;
        certificateList.appendChild(li);
    });

    certificateContainer.appendChild(certificateList);
    displayarea.appendChild(certificateContainer);
});


experience.addEventListener('click', () => {
    displayarea.innerHTML = '';

    // Main container
    const expContainer = document.createElement("div");
    expContainer.className = "experienceContainer";

    const heading = document.createElement("h2");
    heading.textContent = "Experience";
    expContainer.appendChild(heading);

    // Experience cards data
    const experiences = [
        {
            title: "Student Developer",
            org: "Rashtrasant Tukadoji Maharaj Nagpur University",
            period: "2022 – 2025",
            details: [
                "Developed front-end projects using HTML, CSS, JavaScript, and React.js.",
                "Applied Agile methodology and version control (Git) to track project development and collaborate with peers.",
                "Improved algorithmic problem-solving speed and accuracy by 30% through regular practice on coding platforms."
            ],
            icon: "💻"
        },
        {
            title: "Academic Projects",
            org: "Personal & Team Projects",
            period: "2022 – 2025",
            details: [
                "Built responsive web apps and portfolios as part of coursework and self-learning.",
                "Collaborated with classmates on group assignments, focusing on clean code and UI/UX.",
                "Explored RESTful APIs and component-based architecture in React."
            ],
            icon: "📚"
        }
    ];

    // Experience cards UI
    const expList = document.createElement("div");
    expList.className = "experienceList";

    experiences.forEach((exp, i) => {
        const card = document.createElement("div");
        card.className = "experienceCard";
        card.style.animationDelay = `${i * 0.15 + 0.1}s`;

        card.innerHTML = `
            <div class="exp-icon">${exp.icon}</div>
            <div class="exp-title">${exp.title}</div>
            <div class="exp-org">${exp.org}</div>
            <div class="exp-period">${exp.period}</div>
            <ul class="exp-details">
                ${exp.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
        `;
        expList.appendChild(card);
    });

    expContainer.appendChild(expList);
    displayarea.appendChild(expContainer);
});


project.addEventListener('click', () => {
    displayarea.innerHTML = '';

    // Main container
    const projectContainer = document.createElement("div");
    projectContainer.className = "projectContainer";

    const heading = document.createElement("h2");
    heading.textContent = "Projects";
    projectContainer.appendChild(heading);

    // Arrow buttons
    const leftArrow = document.createElement("button");
    leftArrow.className = "project-arrow left";
    leftArrow.innerHTML = "&#8592;";
    const rightArrow = document.createElement("button");
    rightArrow.className = "project-arrow right";
    rightArrow.innerHTML = "&#8594;";

    // Projects data
    const projects = [
    {
        title: "Contact Management App",
        tech: "React, JavaScript, CSS",
        details: [
            "Built a single-page React application for managing contact data with CRUD operations and local storage persistence.",
            "Used React hooks for state management and component reusability, achieving modular and scalable code structure."
        ],
        link: "https://github.com/Aachal121-code/contact-app"
    },
    {
        title: "Currency Converter",
        tech: "HTML, CSS, JavaScript, REST API",
        details: [
            "Created a web app that integrates real-time currency exchange data using a public RESTful API.",
            "Implemented input validation, loading indicators, and responsive UI to enhance usability."
        ],
        link: "https://github.com/Aachal121-code/Currency-Converter"
    },
    {
        title: "Responsive Portfolio Website",
        tech: "HTML, CSS, JavaScript",
        details: [
            "Developed a responsive and visually appealing portfolio website using HTML5 and modern CSS techniques, including Flexbox and media queries.",
            "Demonstrated growth in front-end development skills by creating a clean, user-friendly design optimized for multiple devices."
        ],
        link: "https://github.com/Aachal121-code/portfolio"
    },
    {
        title: "To-Do List App",
        tech: "JavaScript, HTML, CSS",
        details: [
            "This is a simple TODO application frontend that allows users to add, edit, delete, and mark tasks as completed.",
            "This project includes only the frontend part and does not include the backend/server functionality."
        ],
        link: "https://github.com/Aachal121-code/ToDo-list" // Or your repo link
    },
    {
        title: "BMI Calculator",
        tech: "JavaScript, HTML, CSS",
        details: [
            "A simple and user-friendly BMI Calculator that helps users determine their Body Mass Index based on their height and weight.",
            "This application provides instant feedback on whether a user is underweight, normal weight, overweight, or obese."
        ],
        link: "https://github.com/Aachal121-code/BMI-calculator" // Or your repo link
    },
    {
        title: "FruitMart Website",
        tech: "JavaScript, HTML, CSS",
        details: [
            "This is a simple responsive website for FruitMart, showcasing various grocery and organic products.",
            "The project is built using HTML and CSS, with a focus on clean design and user-friendly interface."
        ],
        link: "https://github.com/Aachal121-code/FruitMart" // Or your repo link
    },
    
];

    // Scrollable row
    const projectScroll = document.createElement("div");
    projectScroll.className = "projectScroll";

    projects.forEach((proj, i) => {
        const card = document.createElement("div");
        card.className = "projectCard";
        card.style.animationDelay = `${i * 0.12 + 0.1}s`;

        card.innerHTML = `
        <div class="proj-title">${proj.title}</div>
        <div class="proj-tech">${proj.tech}</div>
        <ul class="proj-details">
        ${proj.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
        <a href="${proj.link}" target="_blank" class="proj-link">View Project</a>
    `;
        projectScroll.appendChild(card);
    });

    // Arrow scroll logic
    leftArrow.onclick = () => {
        projectScroll.scrollBy({ left: -350, behavior: 'smooth' });
    };
    rightArrow.onclick = () => {
        projectScroll.scrollBy({ left: 350, behavior: 'smooth' });
    };

    // Assemble
    const arrowWrap = document.createElement("div");
    arrowWrap.className = "project-arrow-wrap";
    arrowWrap.appendChild(leftArrow);
    arrowWrap.appendChild(projectScroll);
    arrowWrap.appendChild(rightArrow);

    projectContainer.appendChild(arrowWrap);
    displayarea.appendChild(projectContainer);
});

