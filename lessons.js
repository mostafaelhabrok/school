(function($){
   
   
       $(document).ready(function(){



$.get('lessons.txt',function(data,state,xh){
    if(state==='success'){
        var result = JSON.parse(data);
        const grade = localStorage.getItem('currentgrade');
    switch (grade) {
      case 'one':
        for(var i = 0 ; i<result.one.length ; i++){
         /* $('#tablebody').append($('<tr></tr>'));
          $('tr:last').append($("<td></td>").text(result.one[i].teachername));
          $('tr:last').append($("<td></td>").text(result.one[i].coursename));
          $('tr:last').append($("<td></td>").text(result.one[i].time));
          $('tr:last').append($("<td></td>").text(result.one[i].place)); */
          
          $("#tablebody").append($(
          "<tr><td>"+result.one[i].teachername+
          "</td><td>"+result.one[i].coursename+
          "</td><td>"+result.one[i].time+
          "</td><td>"+result.one[i].place+"</td></tr>"));
  
        };
        break;
      case 'two':
        for(var i = 0 ; i<result.two.length ; i++){
          $('#tablebody').append($('<tr></tr>'));
          $('tr:last').append($("<td></td>").text(result.two[i].teachername));
          $('tr:last').append($("<td></td>").text(result.two[i].coursename));
          $('tr:last').append($("<td></td>").text(result.two[i].time));
          $('tr:last').append($("<td></td>").text(result.two[i].place));       
  
        };
        break;
      case 'three':
        for(var i = 0 ; i<result.three.length ; i++){
          $('#tablebody').append($('<tr></tr>'));
          $('tr:last').append($("<td></td>").text(result.three[i].teachername));
          $('tr:last').append($("<td></td>").text(result.three[i].coursename));
          $('tr:last').append($("<td></td>").text(result.three[i].time));
          $('tr:last').append($("<td></td>").text(result.three[i].place));       
  
        };
        break;
      case 'four':
        for(var i = 0 ; i<result.four.length ; i++){
          $('#tablebody').append($('<tr></tr>'));
          $('tr:last').append($("<td></td>").text(result.four[i].teachername));
          $('tr:last').append($("<td></td>").text(result.four[i].coursename));
          $('tr:last').append($("<td></td>").text(result.four[i].time));
          $('tr:last').append($("<td></td>").text(result.four[i].place));       
  
        };
        break;
      case 'five':
        for(var i = 0 ; i<result.five.length ; i++){
          $('#tablebody').append($('<tr></tr>'));
          $('tr:last').append($("<td></td>").text(result.five[i].teachername));
          $('tr:last').append($("<td></td>").text(result.five[i].coursename));
          $('tr:last').append($("<td></td>").text(result.five[i].time));
          $('tr:last').append($("<td></td>").text(result.five[i].place));       
  
        };
        break;
      case 'six':
        for(var i = 0 ; i<result.six.length ; i++){
          $('#tablebody').append($('<tr></tr>'));
          $('tr:last').append($("<td></td>").text(result.six[i].teachername));
          $('tr:last').append($("<td></td>").text(result.six[i].coursename));
          $('tr:last').append($("<td></td>").text(result.six[i].time));
          $('tr:last').append($("<td></td>").text(result.six[i].place));       
  
        };
        break;
    
      
    }
    }
    else {console.log('error');}
  });
    









})
})(jQuery); 