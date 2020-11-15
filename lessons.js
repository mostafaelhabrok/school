(function($){
   
   
       $(document).ready(function(){



$.get('schedule.txt',function(data,state,xh){
    if(state==='success'){
        var result = JSON.parse(data);
        const current = localStorage.getItem("currentlogin");
        const student = sessionStorage.getItem('current');
        const grade = student.grade;
    switch (grade) {
      case 'one':
       // for(var i = 0 ; i<result.one.length ; i++){
         /* $('#tablebody').append($('<tr></tr>'));
          $('tr:last').append($("<td></td>").text(result.one[i].teachername));
          $('tr:last').append($("<td></td>").text(result.one[i].coursename));
          $('tr:last').append($("<td></td>").text(result.one[i].time));
          $('tr:last').append($("<td></td>").text(result.one[i].place)); */
          
         /* $("#tablebody").append($(
          "<tr><td>"+result.one[i].teachername+
          "</td><td>"+result.one[i].coursename+
          "</td><td>"+result.one[i].time+
          "</td><td>"+result.one[i].place+"</td></tr>"));*/
          $("#sunday").append($("<td>"+result.one[0].first+
          "</td><td>"+result.one[0].second+
          "</td><td>"+result.one[0].third+
          "</td><td>"+result.one[0].fourth+"</td>"));
          $("#monday").append($("<td>"+result.one[1].first+
          "</td><td>"+result.one[1].second+
          "</td><td>"+result.one[1].third+
          "</td><td>"+result.one[1].fourth+"</td>"));
          $("#tuesday").append($("<td>"+result.one[2].first+
          "</td><td>"+result.one[2].second+
          "</td><td>"+result.one[2].third+
          "</td><td>"+result.one[2].fourth+"</td>"));
          $("#wednesday").append($("<td>"+result.one[3].first+
          "</td><td>"+result.one[3].second+
          "</td><td>"+result.one[3].third+
          "</td><td>"+result.one[3].fourth+"</td>"));
  
       // };
        break;
      case 'two':
        $("#sunday").append($("<td>"+result.two[0].first+
          "</td><td>"+result.two[0].second+
          "</td><td>"+result.two[0].third+
          "</td><td>"+result.two[0].fourth+"</td>"));
          $("#monday").append($("<td>"+result.two[1].first+
          "</td><td>"+result.two[1].second+
          "</td><td>"+result.two[1].third+
          "</td><td>"+result.two[1].fourth+"</td>"));
          $("#tuesday").append($("<td>"+result.two[2].first+
          "</td><td>"+result.two[2].second+
          "</td><td>"+result.two[2].third+
          "</td><td>"+result.two[2].fourth+"</td>"));
          $("#wednesday").append($("<td>"+result.two[3].first+
          "</td><td>"+result.two[3].second+
          "</td><td>"+result.two[3].third+
          "</td><td>"+result.two[3].fourth+"</td>"));
        break;
      case 'three':
        $("#sunday").append($("<td>"+result.three[0].first+
          "</td><td>"+result.three[0].second+
          "</td><td>"+result.three[0].third+
          "</td><td>"+result.three[0].fourth+"</td>"));
          $("#monday").append($("<td>"+result.three[1].first+
          "</td><td>"+result.three[1].second+
          "</td><td>"+result.three[1].third+
          "</td><td>"+result.three[1].fourth+"</td>"));
          $("#tuesday").append($("<td>"+result.three[2].first+
          "</td><td>"+result.three[2].second+
          "</td><td>"+result.three[2].third+
          "</td><td>"+result.three[2].fourth+"</td>"));
          $("#wednesday").append($("<td>"+result.three[3].first+
          "</td><td>"+result.three[3].second+
          "</td><td>"+result.three[3].third+
          "</td><td>"+result.three[3].fourth+"</td>"));
        break;
      case 'four':
        $("#sunday").append($("<td>"+result.four[0].first+
        "</td><td>"+result.four[0].second+
        "</td><td>"+result.four[0].third+
        "</td><td>"+result.four[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.four[1].first+
        "</td><td>"+result.four[1].second+
        "</td><td>"+result.four[1].third+
        "</td><td>"+result.four[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.four[2].first+
        "</td><td>"+result.four[2].second+
        "</td><td>"+result.four[2].third+
        "</td><td>"+result.four[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.four[3].first+
        "</td><td>"+result.four[3].second+
        "</td><td>"+result.four[3].third+
        "</td><td>"+result.four[3].fourth+"</td>"));
        break;
      case 'five':
        $("#sunday").append($("<td>"+result.five[0].first+
          "</td><td>"+result.five[0].second+
          "</td><td>"+result.five[0].third+
          "</td><td>"+result.five[0].fourth+"</td>"));
          $("#monday").append($("<td>"+result.five[1].first+
          "</td><td>"+result.five[1].second+
          "</td><td>"+result.five[1].third+
          "</td><td>"+result.five[1].fourth+"</td>"));
          $("#tuesday").append($("<td>"+result.five[2].first+
          "</td><td>"+result.five[2].second+
          "</td><td>"+result.five[2].third+
          "</td><td>"+result.five[2].fourth+"</td>"));
          $("#wednesday").append($("<td>"+result.five[3].first+
          "</td><td>"+result.five[3].second+
          "</td><td>"+result.five[3].third+
          "</td><td>"+result.five[3].fourth+"</td>"));
        break;
      case 'six':
        $("#sunday").append($("<td>"+result.six[0].first+
          "</td><td>"+result.six[0].second+
          "</td><td>"+result.six[0].third+
          "</td><td>"+result.six[0].fourth+"</td>"));
          $("#monday").append($("<td>"+result.six[1].first+
          "</td><td>"+result.six[1].second+
          "</td><td>"+result.six[1].third+
          "</td><td>"+result.six[1].fourth+"</td>"));
          $("#tuesday").append($("<td>"+result.six[2].first+
          "</td><td>"+result.six[2].second+
          "</td><td>"+result.six[2].third+
          "</td><td>"+result.six[2].fourth+"</td>"));
          $("#wednesday").append($("<td>"+result.six[3].first+
          "</td><td>"+result.six[3].second+
          "</td><td>"+result.six[3].third+
          "</td><td>"+result.six[3].fourth+"</td>"));
        break;
    
      
    }
    }
    else {console.log('error');}
  });
    









})
})(jQuery); 