const  profile = document.querySelector("#profile");
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

        

    } 
})