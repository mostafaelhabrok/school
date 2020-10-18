(function($){
    $(document).ready(function(){

        if(document.cookie.split('=')[1]=='true'){location.href='home.html'};

$('#login').click(function(){
    //document.cookie = "login=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/'";
    var mail = $('#mail').val();
    var pass = $('#pass').val();
    var bool = true;
    var x = [];
    if(mail==''||pass==''){alert('invalid username or password')}
    else{
    for(var i = 0 ; i<localStorage.length;i++){
        x[i] = JSON.parse(localStorage.getItem(i));
if(mail==x[i].mail && pass==x[i].pass){
bool=false;
document.cookie="login=true;max-age=31536000;path='/'";
/*var cook = document.cookie;
var cook1 = cook.split(';');
var cook2 = cook1[0].split('=');
console.log(cook2[1]);*/
console.log(document.cookie.split(';')[0].split('=')[1]);
location.href='home.html';
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







})
})(jQuery); 