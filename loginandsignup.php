<?php 

if ($_SERVER["REQUEST_METHOD"]=="POST" && isset($_POST["signupbut"])){
    $bool1=true;
   $signupmail=!empty($_POST["signupmail"])?$_POST["signupmail"]:"";
   $signuppass1=!empty($_POST["signuppass1"])?$_POST["signuppass1"]:"";
   $signuppass2=!empty($_POST["signuppass2"])?$_POST["signuppass2"]:"";
  
  
    $qyery = "select * from accounts;";
    $result = mysqli_query($db_connection,$qyery);
    if (!$result) die("unable to select data from table accounts ".mysqli_error($db_connection));
    while($row = mysqli_fetch_array($result)) {
      if($signupmail==$row["email"] ){
        $bool1=false;
        echo '<script>alert("already signed up")</script>';
        
      break;
    }
  }
  
      if($signuppass2==$signuppass1 && $signuppass1!="" && $signupmail!="" && $bool1==true){
        
        $qyery = "insert into accounts(id,email,password) values(null,'$signupmail','$signuppass1');";
        $result = mysqli_query($db_connection,$qyery);
        echo '<script>alert("signed up successfully")</script>';
        if (!$result) die("unable to insert data into table accounts ".mysqli_error($db_connection)); 
     }
    
  }
  
  if ($_SERVER["REQUEST_METHOD"]=="POST" && isset($_POST["loginbut"])){
    $bool=true;
    $loginmail=!empty($_POST["loginmail"])?$_POST["loginmail"]:"";
    $loginpass=!empty($_POST["loginpass"])?$_POST["loginpass"]:"";
    if($loginpass!="" && $loginmail!="" ){
      $qyery = "select * from accounts;";
      $result = mysqli_query($db_connection,$qyery);
      
      if (!$result) die("unable to select data from table accounts ".mysqli_error($db_connection));
     while($row = mysqli_fetch_array($result) ) {
        
        if($loginpass==$row["password"] && $loginmail==$row["email"] ){
          
          setcookie("login","true",time()+86400,"/");
          setcookie("email",$row["email"],time()+86400,"/");
          $bool = false;
          echo '<script>alert("logged in")</script>'; 
          echo '<script>location.href="index.php"</script>'; 

         // echo '<script>$("#check2").load("#check2");</script>';
         // echo '<script>location.reload();</script>';

         

         // $qyery = "UPDATE accounts SET logged = 'yes' WHERE id = $row[id];";
         // $result = mysqli_query($db_connection,$qyery);
         
         
        break;
        }
      }
      if($bool==true) echo '<script>alert("wrong username or password")</script>';
  
   
    
  
    }
  }

?>