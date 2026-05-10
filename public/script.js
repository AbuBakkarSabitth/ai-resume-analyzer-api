async function analyzeResume(){

    const resumeText =
        document.getElementById("resumeText").value;

    const response = await fetch("/analyze",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            resumeText
        })

    });

    const data = await response.json();

    const skillsList =
        document.getElementById("skillsList");

    skillsList.innerHTML = "";

    data.detectedSkills.forEach(skill=>{
        

        const skillTag = document.createElement("span");

        skillTag.classList.add("skill-tag");

        skillTag.textContent = skill;

        skillsList.appendChild(skillTag);

    });

    document.getElementById("score")
        .textContent = data.score;

    document.getElementById("feedback")
        .textContent = data.feedback;
}