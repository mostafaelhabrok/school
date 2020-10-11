const regForm = document.getElementById('register_form');
//const stdContainer = document.getElementById('students');
function addStudent(){
    const newStd= document.createElement('a');
    newStd.innerHTML="hey";
    location.replace("students.html");
    //stdContainer.insertAdjacentElement('afterbegin',newStd);
 }
    
 regForm.addEventListener('submit',addStudent);


   