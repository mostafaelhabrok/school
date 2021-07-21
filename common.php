<?php 

/* define("db_Server","localhost");
define("db_Database","school");
define("db_User","root");
define("db_Password","root"); */

define("db_Server","mysql-39895-0.cloudclusters.net");
define("db_Database","school");
define("db_User","admin");
define("db_Password","x3FRbRLi");
define("db_Port",39936);


//require("C:/xampp/php/pear/PEAR/common.php");
$db_connection = mysqli_connect(db_Server,db_User,db_Password,null,db_Port);
if(!$db_connection) die("unable to connect to database server".mysqli_error($db_connection));
mysqli_select_db($db_connection,db_Database) or die ("unable to select database ".mysqli_error($db_connection));

/* if(isset($_POST["check"])){
  if($_POST["check"]=="false"){
  // echo '<script>alert("does!!")</script>';
  $qyery = "UPDATE accounts SET logged = null;";
  $result = mysqli_query($db_connection,$qyery);
 }
}*/

/* function check($db_connection){

$qyery = "select * from accounts where logged='yes';";
$result = mysqli_query($db_connection,$qyery);
if(mysqli_num_rows($result)>0) echo "true";
} */
function check2($db_connection){
  
  $email="";$bool="false";
  //$qyery = "select * from accounts where logged='yes';";
  //$result = mysqli_query($db_connection,$qyery);
  if($_COOKIE["email"]!=""){
      $email=urldecode($_COOKIE["email"]);}
      
     
  $qyery = "select * from students;";
  $result = mysqli_query($db_connection,$qyery);
  while($row = mysqli_fetch_array($result)) {
      if($email==$row["email"]){
          $bool="true";
          echo "true";
  
      }
  }
  if($bool=="false"){
  $qyery = "select * from teachers;";
  $result = mysqli_query($db_connection,$qyery);
  while($row = mysqli_fetch_array($result)) {
      if($email==$row["email"]){
          echo "true";
      }
  }
   }
  }





function type($db_connection){
    $email="";$type="";$bool="false";
    if($_COOKIE["email"]!=""){
      $email=urldecode($_COOKIE["email"]);}
  
  $qyery = "select * from students;";
  $result = mysqli_query($db_connection,$qyery);
  while($row = mysqli_fetch_array($result)) {
    if($email==$row["email"]){
      $type="student";
      $bool="true";
      return $type;
     
    break;
    }
  }
  if($bool=="false"){
  $qyery = "select * from teachers;";
  $result = mysqli_query($db_connection,$qyery);
  while($row = mysqli_fetch_array($result)) {
    if($email==$row["email"]){
      $type="teacher";
      return $type;
    break;
    }
  }
  }
  }



  function select($db_connection){
    $email="";$select="";$bool1="false";
    if($_COOKIE["email"]!=""){
      $email=urldecode($_COOKIE["email"]);}

  $qyery = "select * from students;";
  $result = mysqli_query($db_connection,$qyery);
  while($row = mysqli_fetch_array($result)) {
    if($email==$row["email"]){
      $select=$row["grade"];
      $bool1="true";
      echo $select;
    break;
    }
  }
  if($bool1=="false"){
  $qyery = "select * from teachers;";
  $result = mysqli_query($db_connection,$qyery);
  while($row = mysqli_fetch_array($result)) {
    if($email==$row["email"]){
      $select=$row["subject"];
      echo $select;
    break;
    }
  }
}
  }

  function pass($db_connection){
    if($_COOKIE["email"]!=""){
        $email=urldecode($_COOKIE["email"]);}
        $qyery = "select * from accounts where email = '$email';";
    $result = mysqli_query($db_connection,$qyery);
    while($row = mysqli_fetch_array($result)){
$pass = $row["password"];
echo $pass;
    }
}


function search_file($dir,$file_to_search){

  $files = scandir($dir);
  
  foreach($files as $key => $value){
  
      $path = realpath($dir.DIRECTORY_SEPARATOR.$value);
  
      if(!is_dir($path)) {
  
          if($file_to_search == $value){
              //echo "file found<br>";
              echo strstr($path,"upload");
              break;
          }
  
      } else if($value != "." && $value != "..") {
  
          search_file($path, $file_to_search);
  
      }  
   } 
  }







?>