(function($){
 /* if(document.cookie.split('=')[1]!='true'){
    alert('Login first please');
    location.href='index.html';};*/

    $(document).ready(function(){
      if(document.cookie.split('=')[1]=='true'){
        $("#loginbutton").prop('hidden',true);
        $("#signupbutton").prop('hidden',true);
        $("#register").prop('hidden',false);
        document.getElementById("container2").classList.replace("col-8","col-10");
        document.getElementById("container3").classList.replace("col-4","col-2");
      };
      const current = localStorage.getItem("currentlogin");

      if(sessionStorage.key(current)!=null && document.cookie.split('=')[1]=='true'){
        $("#register").prop('hidden',true);
        $("#lessons").prop('hidden',false);
        $("#teachers").prop('hidden',false);
        $("#students").prop('hidden',false);
      };
$('#logout').click(function(){
  document.cookie = "login=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/'";
localStorage.removeItem('currentlogin');

});















    })
})(jQuery); 