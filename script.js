const datadisplay = document.getElementById("datadisplay");
const btn1 = document.querySelector('#skills-btn');
const btn2 = document.querySelector('#certificate-btn');

const skillsData = document.querySelector(".skills-block");

btn1.addEventListener('click', () => {
    datadisplay.innerHTML = skillsData.innerHTML;
});

btn2.addEventListener('click', () => {
    datadisplay.innerHTML = `
        <div class="certificates-block">
            <img src="/certificates/c.png" />
            <img src="/certificates/cpp.png" />
            <img src="/certificates/python.png" />
            <img src="/certificates/codeWbarriers.png" />
        </div>
    `;
});
