<?php 
$email="";
$lessons="";
$grades="";
$id="";
if ($_SERVER["REQUEST_METHOD"]=="POST" && isset($_POST["submit"])){

  $type=!empty($_POST["type"])?$_POST["type"]:"";
  if($type=="teacher") {
    $target_dir = "upload/teachers/";
   
  }
  elseif($type=="student") {
  $target_dir = "upload/students/";
  
}
if($_COOKIE["email"]!=""){
  $email=urldecode($_COOKIE["email"]);}
$qyery="select * from accounts where email = '$email';";
    $result = mysqli_query($db_connection,$qyery);
    while($row = mysqli_fetch_array($result)){
      $id=$row["id"];
    }




  //$target_dir = "upload/";
  $target_file = $target_dir . basename($_FILES["photo"]["name"]);
  $uploadOk = 1;
  $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
  // Check if image file is a actual image or fake image
 // if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["photo"]["tmp_name"]);
    if($check !== false) {
    //  echo "File is an image - " . $check["mime"] . ".";
    echo '<script>alert("File is an image")</script>';

      $uploadOk = 1;
    } else {
     // echo "File is not an image.";
     echo '<script>alert("File is not an image.")</script>';

      $uploadOk = 0;
    }
    if ($_FILES["photo"]["size"] > 1000000) {
    //  echo "Sorry, your file is too large.";
    echo '<script>alert("Sorry, your file is too large.")</script>';

      $uploadOk = 0;
    }
    if($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png" ) {
 // echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  echo '<script>alert("Sorry, only JPG, JPEG, PNG files are allowed.")</script>';
  $uploadOk = 0;
}

if ($uploadOk == 0) {
  //echo "Sorry, your file was not uploaded.";

  echo '<script>alert("Sorry, your file was not uploaded.")</script>';
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    //echo "The file ". htmlspecialchars( basename( $_FILES["photo"]["name"])). " has been uploaded.";
    echo '<script>alert("Uploaded successfully")</script>';
    $newname=$target_dir . $id ."." .$imageFileType ;
   // echo $id;
   // echo $newname;
    rename($target_file,$newname);
  } else {
    echo '<script>alert("Sorry, there was an error uploading your file.")</script>';
  }
}
 // }









    $fname=!empty($_POST["fname"])?$_POST["fname"]:"";
    $mname=!empty($_POST["mname"])?$_POST["mname"]:"";
    $lname=!empty($_POST["lname"])?$_POST["lname"]:"";
    $country=!empty($_POST["countryname"])?$_POST["countryname"]:"";
    $gender=!empty($_POST["gender"])?$_POST["gender"]:"";
    $grade=!empty($_POST["grade"])?$_POST["grade"]:"";
    $phone=!empty($_POST["phone"])?$_POST["phone"]:"";
    $date=!empty($_POST["date"])?$_POST["date"]:"";
   
    $subject=!empty($_POST["subject"])?$_POST["subject"]:"";
    if( isset($_POST['lessons']) && is_array($_POST['lessons']) ) {
        $lessons = implode(',', $_POST['lessons']);  
    }
    $lessons = "arabic,math,".$lessons;
    if( isset($_POST['grades']) && is_array($_POST['grades']) ) {
        $grades = implode(',', $_POST['grades']);   
    }
    
    //$qyery = "select * from accounts where logged='yes';";
   // $result = mysqli_query($db_connection,$qyery);
   if($type=="student"){
    if($_COOKIE["email"]!=""){
        $email=urldecode($_COOKIE["email"]);}
      //  $qyery = "select * from accounts ;";
      //  $result = mysqli_query($db_connection,$qyery);
    // while($row = mysqli_fetch_array($result)) {
       //  $email = $row["email"];
       //  $pass = $row["password"];
      // if($email==$row["email"]){
         $qyery = "insert into students values(null,'$fname','$mname','$lname','$gender','$country','$phone','$date','$lessons','$grade','$email');";
         $result = mysqli_query($db_connection,$qyery);
 
         echo '<script>alert("registered successfully")</script>';
     
         if (!$result) {die("unable to insert data into table students ".mysqli_error($db_connection)); }
    //   break;
   //    }
 
  //   }
 
   }
   elseif($type=="teacher"){
    if($_COOKIE["email"]!=""){
        $email=urldecode($_COOKIE["email"]);}
      //  $qyery = "select * from accounts ;";
    //    $result = mysqli_query($db_connection,$qyery);
   //  while($row = mysqli_fetch_array($result)) {
       //  $email = $row["email"];
       //  $pass = $row["password"];
    //   if($email==$row["email"]){
         $qyery = "insert into teachers values(null,'$fname','$mname','$lname','$gender','$country','$phone','$date','$subject','$grades','$email');";
         $result = mysqli_query($db_connection,$qyery);
 
         echo '<script>alert("registered successfully")</script>';
     
         if (!$result) {die("unable to insert data into table accounts ".mysqli_error($db_connection)); }
     //  break;
     //  }
 
  //   }
 //}
   }

  
    

  
}

?>