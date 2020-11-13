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
    const registerStudent = function(){
        const newStudent = {'mail':mail,'pass':pass,'grade':grade};
        localStorage.setItem(localStorage.length,JSON.stringify(newStudent));
        if (window.confirm("registered successfully \n  login?!!! ")) { 
         window.open('index.html');
         //close=true;
      }
    
    };

    const mail = $('#mail').val();
    const pass = $('#pass').val();
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
   
/*    $("#test").click(function(){
       console.log($("#grade").val())
   }); */
    

})
})(jQuery); 