(function($){
$(document).ready(function(){
    
   document.getElementById("grade").onchange = function(){
     switch (this.value) {
         case "one":
             document.getElementById("english").removeAttribute("disabled");
             document.getElementById("science").removeAttribute("disabled");
             document.getElementById("french").setAttribute("disabled", "true");
             document.getElementById("deutsch").setAttribute("disabled", "true");
             document.getElementById("chemistry").setAttribute("disabled", "true");
             document.getElementById("physics").setAttribute("disabled", "true");
             document.getElementById("biology").setAttribute("disabled", "true");


             break;
         case "two":
            document.getElementById("english").removeAttribute("disabled");
            document.getElementById("science").removeAttribute("disabled");
            document.getElementById("french").setAttribute("disabled","true");
            document.getElementById("deutsch").setAttribute("disabled","true");
            document.getElementById("chemistry").setAttribute("disabled","true");
            document.getElementById("physics").setAttribute("disabled","true");
            document.getElementById("biology").setAttribute("disabled","true");
             break;
         case "three":
            document.getElementById("english").removeAttribute("disabled");
            document.getElementById("science").removeAttribute("disabled");
            document.getElementById("french").setAttribute("disabled","true");
            document.getElementById("deutsch").setAttribute("disabled","true");
            document.getElementById("chemistry").setAttribute("disabled","true");
            document.getElementById("physics").setAttribute("disabled","true");
            document.getElementById("biology").setAttribute("disabled","true");
             break;
         case "four":
            document.getElementById("english").setAttribute("disabled","true");
            document.getElementById("science").setAttribute("disabled","true");
            document.getElementById("french").removeAttribute("disabled");
            document.getElementById("deutsch").setAttribute("disabled","true");
            document.getElementById("chemistry").removeAttribute("disabled");
            document.getElementById("physics").removeAttribute("disabled");
            document.getElementById("biology").setAttribute("disabled","true");
             break;
         case "five":
            document.getElementById("english").setAttribute("disabled","true");
            document.getElementById("science").setAttribute("disabled","true");
            document.getElementById("french").removeAttribute("disabled");
            document.getElementById("deutsch").setAttribute("disabled","true");
            document.getElementById("chemistry").removeAttribute("disabled");
            document.getElementById("physics").removeAttribute("disabled");
            document.getElementById("biology").setAttribute("disabled","true");
             break;
         case "six":
            document.getElementById("english").setAttribute("disabled","true");
            document.getElementById("science").setAttribute("disabled","true");
            document.getElementById("french").setAttribute("disabled","true");
            document.getElementById("deutsch").removeAttribute("disabled");
            document.getElementById("chemistry").setAttribute("disabled","true");
            document.getElementById("physics").removeAttribute("disabled");
            document.getElementById("biology").removeAttribute("disabled");
             break;    
     
         
     }
   };
   $('#register_form').submit(function(){
    const register = function(){
        const newStudent = {'fname':fname,'mname':mname,'lname':lname,'grade':grade,'country':country,'gender':gender,'lessons':lessons};
       const current = localStorage.getItem("currentlogin");
        sessionStorage.setItem(current,JSON.stringify(newStudent));
      //  document.cookie="register=true;max-age=31536000;path='/'";
      //location.href="index.html";
      window.alert("registered successfully"); 
       
      //  location.replace("/index.html");
        
    
    
    };

    const fname = $('#fname').val();
    const mname = $('#mname').val();
    const lname = $('#lname').val();
    const grade = $('#grade').val();
    const country = $('#countryname').val();
    const gender = $('input[name=gender]:checked', '#register_form').val();
    const lessons_array = $('input[name="lessons"]:checked');
    const lessons = [];
    for (var i = 0 ; i<lessons_array.length;i++){
        lessons[i]= lessons_array[i].value;
    };
    //console.log(lessons);

    register();
      



   });
   

    

})
})(jQuery); 