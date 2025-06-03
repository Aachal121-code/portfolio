const profile = document.querySelector("#profile");
const education = document.querySelector("#education");
const displayarea=document.querySelector(".displayarea");
displayarea.className="displayarea";

profile.addEventListener('click',()=>{
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

        const followCount = document.createElement("p");
        followCount.className = "followCount";
        followCount.innerHTML = "0";
        console.log(followCount);

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
        objective.innerHTML = "Objective :";
        displayarea.appendChild(objective);

        const summary = document.createElement("p");
        summary.className = "summary";
        summary.innerHTML = "Web Developer Intern skilled in building responsive, user-centric web applications using HTML, CSS, JavaScript, and React.js. Proven ability to solve complex problems with clean, modular code and strong fundamentals in data structures. Eager to contribute to fast-paced development teams with a focus on performance, usability, and innovation.";
        displayarea.appendChild(summary);

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

