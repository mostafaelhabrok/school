(function($){
$(document).ready(function(){
    


    //var close ;
    
   $('#register_form').submit(function(){
    const registerStudent = function(){
        const newStudent = {'mail':mail,'pass':pass};
        localStorage.setItem(localStorage.length,JSON.stringify(newStudent));
        if (window.confirm("registered successfully \n  login?!!! ")) { 
         window.open('index.html');
         //close=true;
      }
    
    };

    const mail = $('#mail').val();
    const pass = $('#pass').val();
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
   
   
    

})
})(jQuery); 