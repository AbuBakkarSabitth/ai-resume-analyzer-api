const analyzeResume = (req,res) =>{
    const { resumeText } = req.body;
    const skills = ["python", "JavaScript","Node.js","Machine Learning","React","MongoDB","Express.js","SQL","Data Sceince","TensorFlow"];
    let detectedSkills = [];
    skills.forEach(skill => {
        if(resumeText.toLowerCase().includes(skill.toLowerCase())){
            detectedSkills.push(skill);
        }
    });
    const score = detectedSkills.length * 20;
    let feedback = "";
    if(score >= 80){
    feedback = "Excellent Resume";
    }
    else if(score >= 50){
        feedback = "Good Resume";
    }
    else{
        feedback = "Need More Skills"
    }
    res.json({
        detectedSkills,
        score,
        feedback,
        message: "Resume analyzed successfully"
    });
};
module.exports = analyzeResume;