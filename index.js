const skills = document.getElementById('skills');
const experience = document.getElementById('experiences');
const education = document.getElementById('education');
//Experience Block
experience.addEventListener('click', function(){
   const expDetails = document.getElementById('experience-details');
   expDetails.style.display = 'block';
   expDetails.style.marginLeft = '12rem';
   document.getElementsByClassName('tab-links')[1].classList.add('active-links');
   document.getElementsByClassName('tab-links')[0].classList.remove('active-links');
   document.getElementsByClassName('tab-links')[2].classList.remove('active-links');
   document.getElementById('skills-details').style.display= 'none';
   document.getElementById('education-details').style.display= 'none';
})
//Education Block
education.addEventListener('click', function(){
    const educationDetail = document.getElementById('education-details');
    educationDetail.style.display = 'block';
    educationDetail.style.marginLeft = '65%';
    document.getElementsByClassName('tab-links')[2].classList.add('active-links');
    document.getElementsByClassName('tab-links')[0].classList.remove('active-links');
    document.getElementsByClassName('tab-links')[1].classList.remove('active-links');
    document.getElementById('skills-details').style.display= 'none';
    document.getElementById('experience-details').style.display = 'none';
 })
 //Skills Block
 skills.addEventListener('click', function(){
    const skillsDetail = document.getElementById('skills-details');
    document.getElementById('skills-details').style.display= 'block';
    document.getElementsByClassName('tab-links')[0].classList.add('active-links');
    document.getElementsByClassName('tab-links')[1].classList.remove('active-links');
    document.getElementsByClassName('tab-links')[2].classList.remove('active-links');
    document.getElementById('experience-details').style.display= 'none';
    document.getElementById('education-details').style.display= 'none';
 })

 document.getElementById('dark-btn').addEventListener('click',function(){
   document.getElementsByTagName('body')[0].style.backgroundColor = "black";
   document.getElementsByTagName('body')[0].style.color = "white";
   document.getElementsByTagName('nav')[0].style.backgroundColor = '#ff4d4d';
   document.getElementsByClassName('container-fluid')[2].style.borderBottom = '1px dashed white';
   document.getElementsByClassName('container-fluid')[3].style.borderBottom = '1px dotted white';
   document.getElementsByTagName('h3')[0].style.color = 'white';
   document.getElementsByTagName('h1')[0].style.color = 'white';
   document.getElementsByTagName('h2')[1].style.color = 'white';
   document.getElementsByTagName('h2')[2].style.color = 'white';
   document.getElementsByClassName('card-header')[0].style.color = 'black';

   document.getElementsByClassName('card-body')[3].style.color = 'black';
   document.getElementsByTagName('footer')[0].style.backgroundColor = '#ff4d4d';
 })
 document.getElementById('light-btn').addEventListener('click',function(){
   document.body.style.backgroundColor = 'white';
   document.getElementsByTagName('nav')[0].style.backgroundColor = '#ffcccc';
   document.body.style.color = "black";
   document.getElementsByTagName('h3')[0].style.color = 'black';
   document.getElementsByTagName('h1')[0].style.color = 'black';
   document.getElementsByTagName('h2')[1].style.color = 'black';
   document.getElementsByTagName('h2')[2].style.color = 'black';
   document.getElementsByTagName('footer')[0].style.backgroundColor = '#ffcccc';
 })
 