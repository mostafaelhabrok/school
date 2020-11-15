(function($){
    $(document).ready(function(){

        $.get('students.txt',function(data,state,xh){
            if(state==='success'){
                
                var result = JSON.parse(data);
                const current = localStorage.getItem("currentlogin");
                const student = JSON.parse(sessionStorage.getItem(current));
                const grade = student.grade;
                console.log(grade);
                switch (grade) {
                    case 'one':
                        for(var i = 0 ; i<result.one.length ; i++){
                            const x = i+1;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+result.one[i].fname+" "+result.one[i].mname+" "+result.one[i].lname+"</td></tr>"));
                        }
                            break;

                    }

                }
            })

    })
})(jQuery); 