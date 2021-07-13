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
             $("#french").prop("checked",false);
             $("#deutsch").prop("checked",false);
             $("#chemistry").prop("checked",false);
             $("#physics").prop("checked",false);
             $("#biology").prop("checked",false);



             break;
         case "two":
            document.getElementById("english").removeAttribute("disabled");
             document.getElementById("science").removeAttribute("disabled");
             document.getElementById("french").setAttribute("disabled", "true");
             document.getElementById("deutsch").setAttribute("disabled", "true");
             document.getElementById("chemistry").setAttribute("disabled", "true");
             document.getElementById("physics").setAttribute("disabled", "true");
             document.getElementById("biology").setAttribute("disabled", "true");
             $("#french").prop("checked",false);
             $("#deutsch").prop("checked",false);
             $("#chemistry").prop("checked",false);
             $("#physics").prop("checked",false);
             $("#biology").prop("checked",false);
             break;
         case "three":
            document.getElementById("english").removeAttribute("disabled");
             document.getElementById("science").removeAttribute("disabled");
             document.getElementById("french").setAttribute("disabled", "true");
             document.getElementById("deutsch").setAttribute("disabled", "true");
             document.getElementById("chemistry").setAttribute("disabled", "true");
             document.getElementById("physics").setAttribute("disabled", "true");
             document.getElementById("biology").setAttribute("disabled", "true");
             $("#french").prop("checked",false);
             $("#deutsch").prop("checked",false);
             $("#chemistry").prop("checked",false);
             $("#physics").prop("checked",false);
             $("#biology").prop("checked",false);
             break;
         case "four":
            document.getElementById("english").setAttribute("disabled","true");
            document.getElementById("science").setAttribute("disabled","true");
            document.getElementById("french").removeAttribute("disabled");
            document.getElementById("deutsch").setAttribute("disabled","true");
            document.getElementById("chemistry").removeAttribute("disabled");
            document.getElementById("physics").removeAttribute("disabled");
            document.getElementById("biology").setAttribute("disabled","true");
            $("#english").prop("checked",false);
             $("#science").prop("checked",false);
             $("#deutsch").prop("checked",false);
             $("#biology").prop("checked",false);
             break;
         case "five":
            document.getElementById("english").setAttribute("disabled","true");
            document.getElementById("science").setAttribute("disabled","true");
            document.getElementById("french").removeAttribute("disabled");
            document.getElementById("deutsch").setAttribute("disabled","true");
            document.getElementById("chemistry").removeAttribute("disabled");
            document.getElementById("physics").removeAttribute("disabled");
            document.getElementById("biology").setAttribute("disabled","true");
            $("#english").prop("checked",false);
             $("#science").prop("checked",false);
             $("#deutsch").prop("checked",false);
             $("#biology").prop("checked",false);
             break;
         case "six":
            document.getElementById("english").setAttribute("disabled","true");
            document.getElementById("science").setAttribute("disabled","true");
            document.getElementById("french").setAttribute("disabled","true");
            document.getElementById("deutsch").removeAttribute("disabled");
            document.getElementById("chemistry").setAttribute("disabled","true");
            document.getElementById("physics").removeAttribute("disabled");
            document.getElementById("biology").removeAttribute("disabled");
            $("#english").prop("checked",false);
             $("#science").prop("checked",false);
             $("#french").prop("checked",false);
             $("#chemistry").prop("checked",false);
             break;    
     
         
     }
   }

   document.getElementById("type").onchange = function(){
  
    switch(this.value){
        case "student":
            $("#studentlessons").prop("hidden",false);
            $("#studentgrade").prop("hidden",false);
            $("#teachersubject").prop("hidden",true);
            $("#teachergrades").prop("hidden",true);


        break;
        
        case "teacher":
            $("#studentlessons").prop("hidden",true);
            $("#studentgrade").prop("hidden",true);
            $("#teachersubject").prop("hidden",false);
            $("#teachergrades").prop("hidden",false);


        break;
    }
    }
    switch( document.getElementById("type").value){
        case "student":
            $("#studentlessons").prop("hidden",false);
            $("#studentgrade").prop("hidden",false);
            $("#teachersubject").prop("hidden",true);
            $("#teachergrades").prop("hidden",true);


        break;
        
        case "teacher":
            $("#studentlessons").prop("hidden",true);
            $("#studentgrade").prop("hidden",true);
            $("#teachersubject").prop("hidden",false);
            $("#teachergrades").prop("hidden",false);


        break;
    }

  //  document.getElementById("type").onchange = type();
  //  type(document.getElementById("type"));
  
document.getElementById("subject").onchange = function(){
    switch(this.value){
        case "arabic":
            document.getElementById("one").removeAttribute("disabled");
            document.getElementById("two").removeAttribute("disabled");
            document.getElementById("three").removeAttribute("disabled");
            document.getElementById("four").removeAttribute("disabled");
            document.getElementById("five").removeAttribute("disabled");
            document.getElementById("six").removeAttribute("disabled");
        break;

        case "math":
            document.getElementById("one").removeAttribute("disabled");
            document.getElementById("two").removeAttribute("disabled");
            document.getElementById("three").removeAttribute("disabled");
            document.getElementById("four").removeAttribute("disabled");
            document.getElementById("five").removeAttribute("disabled");
            document.getElementById("six").removeAttribute("disabled");
        break;

        case "science":
            document.getElementById("one").removeAttribute("disabled");
            document.getElementById("two").removeAttribute("disabled");
            document.getElementById("three").removeAttribute("disabled");
            document.getElementById("four").setAttribute("disabled","true");
            document.getElementById("five").setAttribute("disabled","true");
            document.getElementById("six").setAttribute("disabled","true");
            $("#four").prop("checked",false);
             $("#five").prop("checked",false);
             $("#six").prop("checked",false);
        break;

        case "english":
            document.getElementById("one").removeAttribute("disabled");
            document.getElementById("two").removeAttribute("disabled");
            document.getElementById("three").removeAttribute("disabled");
            document.getElementById("four").setAttribute("disabled","true");
            document.getElementById("five").setAttribute("disabled","true");
            document.getElementById("six").setAttribute("disabled","true");
            $("#four").prop("checked",false);
             $("#five").prop("checked",false);
             $("#six").prop("checked",false);
        break;

        case "french":
            document.getElementById("one").setAttribute("disabled","true");
            document.getElementById("two").setAttribute("disabled","true");
            document.getElementById("three").setAttribute("disabled","true");
            document.getElementById("four").removeAttribute("disabled");
            document.getElementById("five").removeAttribute("disabled");
            document.getElementById("six").setAttribute("disabled","true");
            $("#one").prop("checked",false);
             $("#two").prop("checked",false);
             $("#three").prop("checked",false);
             $("#six").prop("checked",false);

        break;

        case "deutsch":
            document.getElementById("one").setAttribute("disabled","true");
            document.getElementById("two").setAttribute("disabled","true");
            document.getElementById("three").setAttribute("disabled","true");
            document.getElementById("four").setAttribute("disabled","true");
            document.getElementById("five").setAttribute("disabled","true");
            document.getElementById("six").removeAttribute("disabled");
            $("#one").prop("checked",false);
             $("#two").prop("checked",false);
             $("#three").prop("checked",false);
             $("#four").prop("checked",false);
             $("#five").prop("checked",false);
        break;

        case "biology":
            document.getElementById("one").setAttribute("disabled","true");
            document.getElementById("two").setAttribute("disabled","true");
            document.getElementById("three").setAttribute("disabled","true");
            document.getElementById("four").setAttribute("disabled","true");
            document.getElementById("five").setAttribute("disabled","true");
            document.getElementById("six").removeAttribute("disabled");
            $("#one").prop("checked",false);
             $("#two").prop("checked",false);
             $("#three").prop("checked",false);
             $("#four").prop("checked",false);
             $("#five").prop("checked",false);
        break;

        case "chemistry":
            document.getElementById("one").setAttribute("disabled","true");
            document.getElementById("two").setAttribute("disabled","true");
            document.getElementById("three").setAttribute("disabled","true");
            document.getElementById("four").removeAttribute("disabled");
            document.getElementById("five").removeAttribute("disabled");
            document.getElementById("six").setAttribute("disabled","true");
            $("#one").prop("checked",false);
             $("#two").prop("checked",false);
             $("#three").prop("checked",false);
             $("#six").prop("checked",false);
        break;

        case "physics":
            document.getElementById("one").setAttribute("disabled","true");
            document.getElementById("two").setAttribute("disabled","true");
            document.getElementById("three").setAttribute("disabled","true");
            document.getElementById("four").removeAttribute("disabled");
            document.getElementById("five").removeAttribute("disabled");
            document.getElementById("six").setAttribute("disabled","true");
            $("#one").prop("checked",false);
             $("#two").prop("checked",false);
             $("#three").prop("checked",false);
             $("#six").prop("checked",false);
        break;







    }
}

  // $('#register_form').submit(function(){
/*    const register = function(){
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
      
*/


 //  });
   

    

})
})(jQuery); 