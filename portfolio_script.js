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
        { name: "HTML5", percent: 85 },
        { name: "CSS3", percent: 80 },
        { name: "JavaScript", percent: 70 },
        { name: "Python (Basics)", percent: 60 },
        { name: "C", percent: 85 },
        { name: "C++", percent: 55 },
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

    // --- Other Skills Sections ---
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

    // Data for other skills
    const frameworks = ["React.js", "Bootstrap", "DOM Manipulation"];
    const versionControl = ["Git", "GitHub"];
    const devTools = ["Visual Studio Code"];
    const concepts = ["Responsive Web Design", "RESTful APIs", "Component-Based Architecture"];
    const softSkills = ["Problem-Solving", "Team Collaboration", "Code Optimization"];

    // Append all sections
    skillsContainer.appendChild(skillsLanguages);
    skillsContainer.appendChild(createSkillList("Frameworks & Libraries", frameworks));
    skillsContainer.appendChild(createSkillList("Version Control", versionControl));
    skillsContainer.appendChild(createSkillList("Development Tools", devTools));
    skillsContainer.appendChild(createSkillList("Concepts", concepts));
    skillsContainer.appendChild(createSkillList("Soft Skills", softSkills));

    displayarea.appendChild(skillsContainer);

    // Animate progress bars
    setTimeout(() => {
        skillsContainer.querySelectorAll('.progress-value').forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
        });
    }, 200);
});