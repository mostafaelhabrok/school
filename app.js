(function($){
 /* if(document.cookie.split('=')[1]!='true'){
    alert('Login first please');
    location.href='index.html';};*/

    $(document).ready(function(){
      if(document.cookie.split('=')[1]=='true'){
        $("#loginbutton").prop('hidden',true);
        $("#signupbutton").prop('hidden',true);
        document.getElementById("container1").classList.add("container-fluid");
        document.getElementById("container2").classList.replace("col-8","col-10");
        document.getElementById("container3").classList.replace("col-4","col-2");


      };
$('#logout').click(function(){
  document.cookie = "login=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/'";
localStorage.removeItem('currentgrade');
});















    })
})(jQuery); 