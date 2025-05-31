const  profile = document.querySelector("#profile");
const displayarea=document.querySelector(".displayarea");

profile.addEventListener('click',()=>{
    if(!document.querySelector(".profileInfo")){
        const profileInfo=document.createElement("div");
        profileInfo.className="profileInfo";
        displayarea.appendChild(profileInfo);
        console.log("profile");
    } 
})