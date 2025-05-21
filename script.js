const datadisplay = document.getElementById("datadisplay");
const btn1 = document.querySelector('#skills-btn');
const btn2 = document.querySelector('#certificate-btn');

const skillsData = document.querySelector(".skills-block");
const certificateData = document.querySelector(".certificates");

btn1.addEventListener('click', () => {
    datadisplay.innerHTML = skillsData.innerHTML;
    datadisplay.classList.remove('certificateData');
});

btn2.addEventListener('click', () => {
    datadisplay.innerHTML = certificateData.innerHTML;
    datadisplay.classList.remove('skills-block');
});
