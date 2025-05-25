document.getElementById("btn-resume").addEventListener("click", () => {
    const filename = "resume.pdf";
    const a = document.createElement('a');
    a.href = "resume.pdf";
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

const datadisplay = document.getElementById("datadisplay");
const btn1 = document.querySelector('#skills-btn');
const btn2 = document.querySelector('#certificate-btn');

const skillsData = document.querySelector(".skills-block");
const skillsHTML = skillsData.innerHTML;

btn1.addEventListener('click', () => {
    datadisplay.innerHTML = skillsHTML;
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
