(function ($) {
    $(document).ready(function () {

        $('#passwordform').submit(function () {
            const pass =  $("#pass").val();
            const oldpass = $('#oldpass').val();
            const newpass1 = $('#newpass1').val();
            const newpass2 = $('#newpass2').val();
            if (newpass1!=newpass2) {
              alert("password confirmation is not correct");
              event.preventDefault();
            }
            if(oldpass!=pass){
                alert("old password is not correct");
              event.preventDefault();

                }



        })














    })
})(jQuery); 