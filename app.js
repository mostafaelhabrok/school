(function($){
 /* if(document.cookie.split('=')[1]!='true'){
    alert('Login first please');
    location.href='index.html';};*/

    $(document).ready(function(){
      var x = [];
      var y = [];
      var z= "false";
      x = document.cookie.split(";");

/*
for(var i=0;i<x.length;i++){
  y=x[i].split("=");
  if (y[0].trim()=="email"){
sessionStorage.setItem("email",y[1]);
  }
}

*/


      /*  if($("#check").val()=="true"){
        //alert("Welcome");
        $("#loginbutton").prop('hidden',true);
        $("#signupbutton").prop('hidden',true);
        $("#register").prop('hidden',false);
        $("#logout").prop('hidden',false);
        document.getElementById("container2").classList.replace("col-8","col-10");
        document.getElementById("container3").classList.replace("col-4","col-2");
        }*/
      
       
      
       for(var i=0;i<x.length;i++){
         y=x[i].split("=");
         if (y[0].trim()=="login" && y[1]=="true"){
          //alert("Welcome");
          z="true";
          $("#loginbutton").prop('hidden',true);
          $("#signupbutton").prop('hidden',true);
          $("#register").prop('hidden',false);
          $("#logout").prop('hidden',false);
          $("#profile").prop("hidden",false);
          $("#profileedit").prop("hidden",true);

          document.getElementById("container2").classList.replace("col-8","col-9");
          document.getElementById("container3").classList.replace("col-4","col-3");
         }
       }




   /*   if(document.cookie.split('=')[1]=='true'){
        $("#loginbutton").prop('hidden',true);
        $("#signupbutton").prop('hidden',true);
        $("#register").prop('hidden',false);
        document.getElementById("container2").classList.replace("col-8","col-10");
        document.getElementById("container3").classList.replace("col-4","col-2");
      }  */
   //   const current = localStorage.getItem("currentlogin");

 /*     if(sessionStorage.key(current)!=null && document.cookie.split('=')[1]=='true'){
        $("#register").prop('hidden',true);
        $("#lessons").prop('hidden',false);
        $("#teachers").prop('hidden',false);
        $("#students").prop('hidden',false);
      }    */


      //document.getElementById("checkform2").submit();


   //  for(var i=0;i<x.length;i++){
    //    y=x[i].split("=");
        if (z=="true" && $("#check2").val()=="true"){
      
        $("#register").prop('hidden',true);
        $("#lessons").prop('hidden',false);
        $("#teachers").prop('hidden',false);
        $("#students").prop('hidden',false);
        $("#logout").prop('hidden',false);
        $("#profile").prop("hidden",false);
        $("#profileedit").prop("hidden",false);
     
        }
    //  }


      
 $('#logout').click(function(){
 // $("#check").attr("value","false");
   //document.getElementById("checkform").submit();
  alert("logout");
  
  // document.cookie = "login=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/'";
//localStorage.removeItem('currentlogin');

});















    })
})(jQuery); 