//const regForm = document.getElementById('register_form');
//const firstName = document.getElementById('firstname').value;
//const lastName = document.getElementById('lastname').value;
const button = document.getElementById('but');
//const stdContainer = document.getElementById('students');
/*function addStudent(){
    const newStd= document.createElement('a');
    newStd.innerHTML="hey";
   // location.replace("students.html");
    //stdContainer.insertAdjacentElement('afterbegin',newStd);
 }*/
    
    /*const postData = async ( url = '', data = {})=>{
        console.log(data);
          const response = await fetch(url, {
          method: 'POST', 
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json',
          },
    
         // Body data type must match "Content-Type" header        
          body: JSON.stringify(data), 
        });
    
          try {
            const newData = await response.json();
            console.log(newData);
           // updateUI();
            return newData;
    
          }
          catch(error) {
          console.log("error", error);
          }
      }*/


/*function go(){
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  //postData('/add', {firstName:firstName,lastName:lastName});  
        location.pathname = '/students.html';
      }*/

     // button.addEventListener('click',go);

   
// local storage
/*function handle(){
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  localStorage.setItem('fname',firstName);
  localStorage.setItem('lname',lastName);
}
*/

//cookies

var cook = document.cookie;
console.log(cook);
document.getElementById('cook').textContent= cook;

button.addEventListener('click',function(){
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  document.cookie = "firstname="+firstName+";max-age=31536000;path='/'";
  document.cookie = "lastname="+lastName;
  //document.getElementById('cook').textContent= cook;
  //location.href = 'login.html';
  //document.cookie = "username=John Doe;SameSite=lax";
  
  //document.getElementById('cook').textContent=cook;
});
  
