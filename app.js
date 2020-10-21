(function($){
  if(document.cookie.split('=')[1]!='true'){
    alert('Login first please');
    location.href='index.html';};

    $(document).ready(function(){
$('#logout').click(function(){
  document.cookie = "login=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/'";


});











    })
})(jQuery); 