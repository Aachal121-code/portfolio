const  profile = document.querySelector("#profile");
const displayarea=document.querySelector(".displayarea");

profile.addEventListener('click',()=>{
    const profileInfo=document.createElement("div");
    profileInfo.className="profile-info";
    displayarea.appendChild(profileInfo);
    
    console.log("profile");
})