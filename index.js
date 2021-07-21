(function ($) {
  $(document).ready(function () {





    $('#loginform').submit(function () {
     // $('#loginform').attr("method","POST");



      //document.cookie = "login=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/'";
     /* var mail = $('#loginmail').val();
      var pass = $('#loginpass').val();
      var bool = true;
      var x = [];
      if (mail == '' || pass == '') { alert('invalid username or password') }
      else {
        for (var i = 0; i < localStorage.length; i++) {
          x[i] = JSON.parse(localStorage.getItem(i));
          if (mail == x[i].mail && pass == x[i].pass) {
            //localStorage.setItem('currentgrade',x[i].grade);
            localStorage.setItem("currentlogin", i);
            bool = false;
            document.cookie = "login=true;max-age=31536000;path='/'";

            console.log(document.cookie.split(';')[0].split('=')[1]);
            $("#loginbutton").prop('hidden', true);
            $("#signupbutton").prop('hidden', true);


            break;

          }


        };
        if (bool == true) {
          window.alert("wrong username or password");

        }
      }*/
    });



    $('#signupform').submit(function () {
     /* const signup = function () {
        const newStudent = { 'mail': mail, 'pass': pass };
        localStorage.setItem(localStorage.length, JSON.stringify(newStudent));


      };*/

      const mail = $('#signupmail').val();
      const pass = $('#signuppass1').val();
      const pass2 = $('#signuppass2').val();
      if (pass2!=pass) {
        alert("password confirmation is not correct");
        event.preventDefault();
      }

      //const grade = $('#grade').val();

     /* var x = [];
      var bool = true;
     // if (localStorage.length == 0) { signup(); }
     // else {
        for (var i = 0; i < localStorage.length; i++) {
          x[i] = JSON.parse(localStorage.getItem(i));
          if (mail == x[i].mail) {
            window.alert("already signed up");
            bool = false;
          break;

          }
          
        }

     // }
      if (bool == true) {

        signup();

      }*/

    })
    //if(close==true){window.close()};
      




  })
})(jQuery); 