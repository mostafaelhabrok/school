(function($){
   
   
       $(document).ready(function(){

      //  $(window).load(function(){
        var type = $("#type").val();
        var select = $("#select").val();

    //if($("#type")=="student"){
      if(type=="student"){
  console.log("1");
  $.get('schedule.txt',function(data,state,xh){
  if(state==='success'){
    
      var result = JSON.parse(data);
     // const current = localStorage.getItem("currentlogin");
     // const student = sessionStorage.getItem('current');
     // const grade = student.grade;
     //const select = $("#select").val();
  switch (select) {
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
}




 if (type=="teacher"){


  $.get('scheduleofteachers.txt',function(data,state,xh){
    if(state==='success'){
        var result = JSON.parse(data);
       // const current = localStorage.getItem("currentlogin");
       // const student = sessionStorage.getItem('current');
       // const grade = student.grade;
       //const select = $("#select").val();
    switch (select) {
      case 'arabic':
        $("#sunday").append($("<td>"+result.arabic[0].first+
        "</td><td>"+result.arabic[0].second+
        "</td><td>"+result.arabic[0].third+
        "</td><td>"+result.arabic[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.arabic[1].first+
        "</td><td>"+result.arabic[1].second+
        "</td><td>"+result.arabic[1].third+
        "</td><td>"+result.arabic[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.arabic[2].first+
        "</td><td>"+result.arabic[2].second+
        "</td><td>"+result.arabic[2].third+
        "</td><td>"+result.arabic[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.arabic[3].first+
        "</td><td>"+result.arabic[3].second+
        "</td><td>"+result.arabic[3].third+
        "</td><td>"+result.arabic[3].fourth+"</td>"));
      break;

      case 'math':
        $("#sunday").append($("<td>"+result.math[0].first+
        "</td><td>"+result.math[0].second+
        "</td><td>"+result.math[0].third+
        "</td><td>"+result.math[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.math[1].first+
        "</td><td>"+result.math[1].second+
        "</td><td>"+result.math[1].third+
        "</td><td>"+result.math[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.math[2].first+
        "</td><td>"+result.math[2].second+
        "</td><td>"+result.math[2].third+
        "</td><td>"+result.math[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.math[3].first+
        "</td><td>"+result.math[3].second+
        "</td><td>"+result.math[3].third+
        "</td><td>"+result.math[3].fourth+"</td>"));
      break;

      case 'english':
        $("#sunday").append($("<td>"+result.english[0].first+
        "</td><td>"+result.english[0].second+
        "</td><td>"+result.english[0].third+
        "</td><td>"+result.english[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.english[1].first+
        "</td><td>"+result.english[1].second+
        "</td><td>"+result.english[1].third+
        "</td><td>"+result.english[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.english[2].first+
        "</td><td>"+result.english[2].second+
        "</td><td>"+result.english[2].third+
        "</td><td>"+result.english[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.english[3].first+
        "</td><td>"+result.english[3].second+
        "</td><td>"+result.english[3].third+
        "</td><td>"+result.english[3].fourth+"</td>"));
      break;

      case 'science':
        $("#sunday").append($("<td>"+result.science[0].first+
        "</td><td>"+result.science[0].second+
        "</td><td>"+result.science[0].third+
        "</td><td>"+result.science[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.science[1].first+
        "</td><td>"+result.science[1].second+
        "</td><td>"+result.science[1].third+
        "</td><td>"+result.science[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.science[2].first+
        "</td><td>"+result.science[2].second+
        "</td><td>"+result.science[2].third+
        "</td><td>"+result.science[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.science[3].first+
        "</td><td>"+result.science[3].second+
        "</td><td>"+result.science[3].third+
        "</td><td>"+result.science[3].fourth+"</td>"));
      break;

      case 'chemistry':
        $("#sunday").append($("<td>"+result.chemistry[0].first+
        "</td><td>"+result.chemistry[0].second+
        "</td><td>"+result.chemistry[0].third+
        "</td><td>"+result.chemistry[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.chemistry[1].first+
        "</td><td>"+result.chemistry[1].second+
        "</td><td>"+result.chemistry[1].third+
        "</td><td>"+result.chemistry[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.chemistry[2].first+
        "</td><td>"+result.chemistry[2].second+
        "</td><td>"+result.chemistry[2].third+
        "</td><td>"+result.chemistry[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.chemistry[3].first+
        "</td><td>"+result.chemistry[3].second+
        "</td><td>"+result.chemistry[3].third+
        "</td><td>"+result.chemistry[3].fourth+"</td>"));
      break;

      case 'physics':
        $("#sunday").append($("<td>"+result.physics[0].first+
        "</td><td>"+result.physics[0].second+
        "</td><td>"+result.physics[0].third+
        "</td><td>"+result.physics[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.physics[1].first+
        "</td><td>"+result.physics[1].second+
        "</td><td>"+result.physics[1].third+
        "</td><td>"+result.physics[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.physics[2].first+
        "</td><td>"+result.physics[2].second+
        "</td><td>"+result.physics[2].third+
        "</td><td>"+result.physics[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.physics[3].first+
        "</td><td>"+result.physics[3].second+
        "</td><td>"+result.physics[3].third+
        "</td><td>"+result.physics[3].fourth+"</td>"));
      break;

      case 'biology':
        $("#sunday").append($("<td>"+result.biology[0].first+
        "</td><td>"+result.biology[0].second+
        "</td><td>"+result.biology[0].third+
        "</td><td>"+result.biology[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.biology[1].first+
        "</td><td>"+result.biology[1].second+
        "</td><td>"+result.biology[1].third+
        "</td><td>"+result.biology[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.biology[2].first+
        "</td><td>"+result.biology[2].second+
        "</td><td>"+result.biology[2].third+
        "</td><td>"+result.biology[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.biology[3].first+
        "</td><td>"+result.biology[3].second+
        "</td><td>"+result.biology[3].third+
        "</td><td>"+result.biology[3].fourth+"</td>"));
      break;

      case 'french':
        $("#sunday").append($("<td>"+result.french[0].first+
        "</td><td>"+result.french[0].second+
        "</td><td>"+result.french[0].third+
        "</td><td>"+result.french[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.french[1].first+
        "</td><td>"+result.french[1].second+
        "</td><td>"+result.french[1].third+
        "</td><td>"+result.french[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.french[2].first+
        "</td><td>"+result.french[2].second+
        "</td><td>"+result.french[2].third+
        "</td><td>"+result.french[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.french[3].first+
        "</td><td>"+result.french[3].second+
        "</td><td>"+result.french[3].third+
        "</td><td>"+result.french[3].fourth+"</td>"));
      break;

      case 'deutsch':
        $("#sunday").append($("<td>"+result.deutsch[0].first+
        "</td><td>"+result.deutsch[0].second+
        "</td><td>"+result.deutsch[0].third+
        "</td><td>"+result.deutsch[0].fourth+"</td>"));
        $("#monday").append($("<td>"+result.deutsch[1].first+
        "</td><td>"+result.deutsch[1].second+
        "</td><td>"+result.deutsch[1].third+
        "</td><td>"+result.deutsch[1].fourth+"</td>"));
        $("#tuesday").append($("<td>"+result.deutsch[2].first+
        "</td><td>"+result.deutsch[2].second+
        "</td><td>"+result.deutsch[2].third+
        "</td><td>"+result.deutsch[2].fourth+"</td>"));
        $("#wednesday").append($("<td>"+result.deutsch[3].first+
        "</td><td>"+result.deutsch[3].second+
        "</td><td>"+result.deutsch[3].third+
        "</td><td>"+result.deutsch[3].fourth+"</td>"));
      break;

    }


}


}
  )
}









})
})(jQuery); 