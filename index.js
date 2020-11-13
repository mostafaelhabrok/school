(function($){
    

       $(document).ready(function(){

       



$('#loginform').submit(function(){
    //document.cookie = "login=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/'";
    var mail = $('#loginmail').val();
    var pass = $('#loginpass').val();
    var bool = true;
    var x = [];
    if(mail==''||pass==''){alert('invalid username or password')}
    else{
    for(var i = 0 ; i<localStorage.length;i++){
        x[i] = JSON.parse(localStorage.getItem(i));
  if(mail==x[i].mail && pass==x[i].pass){
  localStorage.setItem('currentgrade',x[i].grade);
    bool=false;
  document.cookie="login=true;max-age=31536000;path='/'";
  
  console.log(document.cookie.split(';')[0].split('=')[1]);
  $("#loginbutton").prop('hidden',true);
  $("#signupbutton").prop('hidden',true);

  
    break;
  
  }
  
  
    };
    if(bool == true){
        if (window.confirm("wrong username or password \n register new account?!! ")) { 
            location.href='register.html';
          }
      
      
  }
    }
  });



  $('#signupform').submit(function(){
    const registerStudent = function(){
        const newStudent = {'mail':mail,'pass':pass,'grade':grade};
        localStorage.setItem(localStorage.length,JSON.stringify(newStudent));
        if (window.confirm("registered successfully \n  login?!!! ")) { 
        // window.open('index.html');
         //close=true;
      }
    
    };

    const mail = $('#signupmail').val();
    const pass = $('#signuppass1').val();
    const grade = $('#grade').val();
    var x=[];
    var bool = true;
    if(localStorage.length==0){registerStudent();}
    else{
    for(var i = 0 ; i<localStorage.length;i++){
        x[i] = JSON.parse(localStorage.getItem(i));
        if(mail==x[i].mail){
            if (window.confirm("already registered \n  login?!!! ")) { 
                 window.open('index.html');
                 close=true;
              }
            bool = false;
        break;
    }
       
    }
    if(bool==true && localStorage.length!=0){

        registerStudent();

    }

}
    //if(close==true){window.close()};
      
   });





})
})(jQuery); 