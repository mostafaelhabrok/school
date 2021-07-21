(function($){
    $(document).ready(function(){

        $.get('students.txt',function(data,state,xh){
            if(state==='success'){
                
                var result = JSON.parse(data);
                const current = localStorage.getItem("currentlogin");
                const student = JSON.parse(sessionStorage.getItem(current));
                const grade = student.grade;
                const registerstudent=[];
                const register=[];
                let z =0;
                for(var i =0;i<sessionStorage.length;i++){
                 register[i] = JSON.parse(sessionStorage.getItem(i));
                 const registergrade = register[i].grade;
                if(registergrade==grade){
                    
                    registerstudent[z]=register[i];
                    z++;
                }
                else continue;
                
                 }
                
                console.log(grade);
                switch (grade) {
                    case 'one':
                        //const y = registerstudent.length+result.one.length;
                        for(var i = 0 ; i<result.one.length ; i++){
                            const x = i+1;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+result.one[i].fname+" "+result.one[i].mname+" "+result.one[i].lname+"</td></tr>"));
                            
                        }
                        for(var i = 0 ; i<registerstudent.length ; i++){
                            const x = result.one.length+1+i;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+registerstudent[i].fname+" "+registerstudent[i].mname+" "+registerstudent[i].lname+"</td></tr>"));
                        }
                            break;
                            case 'two':
                        for(var i = 0 ; i<result.two.length ; i++){
                            const x = i+1;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+result.two[i].fname+" "+result.two[i].mname+" "+result.two[i].lname+"</td></tr>"));
                        }
                        for(var i = 0 ; i<registerstudent.length ; i++){
                            const x = result.two.length+1+i;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+registerstudent[i].fname+" "+registerstudent[i].mname+" "+registerstudent[i].lname+"</td></tr>"));
                        }
                            break;
                            case 'three':
                        for(var i = 0 ; i<result.three.length ; i++){
                            const x = i+1;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+result.three[i].fname+" "+result.three[i].mname+" "+result.three[i].lname+"</td></tr>"));
                        }
                        for(var i = 0 ; i<registerstudent.length ; i++){
                            const x = result.three.length+1+i;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+registerstudent[i].fname+" "+registerstudent[i].mname+" "+registerstudent[i].lname+"</td></tr>"));
                        }
                            break;
                            case 'four':
                        for(var i = 0 ; i<result.four.length ; i++){
                            const x = i+1;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+result.four[i].fname+" "+result.four[i].mname+" "+result.four[i].lname+"</td></tr>"));
                        }
                        for(var i = 0 ; i<registerstudent.length ; i++){
                            const x = result.four.length+1+i;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+registerstudent[i].fname+" "+registerstudent[i].mname+" "+registerstudent[i].lname+"</td></tr>"));
                        }
                            break;
                            case 'five':
                        for(var i = 0 ; i<result.five.length ; i++){
                            const x = i+1;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+result.five[i].fname+" "+result.five[i].mname+" "+result.five[i].lname+"</td></tr>"));
                        }
                        for(var i = 0 ; i<registerstudent.length ; i++){
                            const x = result.five.length+1+i;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+registerstudent[i].fname+" "+registerstudent[i].mname+" "+registerstudent[i].lname+"</td></tr>"));
                        }
                            break;
                            case 'six':
                        for(var i = 0 ; i<result.six.length ; i++){
                            const x = i+1;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+result.six[i].fname+" "+result.six[i].mname+" "+result.six[i].lname+"</td></tr>"));
                        }
                        for(var i = 0 ; i<registerstudent.length ; i++){
                            const x = result.six.length+1+i;
                        $("#tablebody").append($(
                            "<tr><td>"+x+
                            "</td><td>"+registerstudent[i].fname+" "+registerstudent[i].mname+" "+registerstudent[i].lname+"</td></tr>"));
                        }
                            break;

                    }

                }
            })

    })
})(jQuery); 