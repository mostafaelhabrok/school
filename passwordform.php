
<?php 
if ($_SERVER["REQUEST_METHOD"]=="POST" && isset($_POST["save"])){
$email="";
$pass=$_POST["newpass1"];
if($_COOKIE["email"]!=""){
      $email=urldecode($_COOKIE["email"]);}
  
  $qyery = "UPDATE accounts SET password = '$pass' where email = '$email';";
  $result = mysqli_query($db_connection,$qyery);
  echo '<script>alert("Please Sign in Again")</script>';
  setcookie("login","",time()-86400,"/");
  setcookie("email","",time()-86400,"/");
  
}
  ?>