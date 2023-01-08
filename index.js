const skills = document.getElementById('skills');
const experience = document.getElementById('experiences');
const education = document.getElementById('education');
//Experience Block
experience.addEventListener('click', function(){
   const expDetails = document.getElementById('experience-details');
   expDetails.style.display = 'block';
   expDetails.style.marginLeft = '12rem';
   document.getElementById('skills-details').style.display= 'none';
   document.getElementById('education-details').style.display= 'none';
})
//Education Block
education.addEventListener('click', function(){
    const educationDetail = document.getElementById('education-details');
    educationDetail.style.display = 'block';
    educationDetail.style.marginLeft = '65%';
    document.getElementById('skills-details').style.display= 'none';
    document.getElementById('experience-details').style.display = 'none';
 })
 //Skills Block
 skills.addEventListener('click', function(){
    const skillsDetail = document.getElementById('skills-details');
    document.getElementById('skills-details').style.display= 'block';
    document.getElementById('experience-details').style.display= 'none';
    document.getElementById('education-details').style.display= 'none';
 })