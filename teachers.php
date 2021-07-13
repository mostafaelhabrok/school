<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Teachers</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css"> 
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script src="jquery-3.5.1.min.js" ></script>
<script src="app.js" type="text/javascript"></script>
<?php 
require("common.php");

?>
</head>
<body class="body">
<header>

<input type="hidden" name="check2" value="<?php  check2($db_connection);?>" id="check2">
<input type="hidden" name="type" value="<?php  type($db_connection);?>" id="type">
    <div class="row container-fluid">
        <div id="container2" class="col-9 float-left">
            <nav class="nav nav-pills">
              <a class="nav-link " href="index.php" target="_self">Home</a>
              <a class="nav-link " href="about.php" target="_self">About</a>
              <a class="nav-link " href="gallery.php" target="_self">Gallery</a>

              <a class="nav-link" href="contact.php" target="_self">Contact us</a>
              <a class="nav-link" href="lessons.php" target="_self" id="lessons"hidden>Lessons</a>
              <a class="nav-link active" href="teachers.php" target="_self" id="teachers"hidden>Teachers</a>
              <a class="nav-link" href="students.php" target="_self" id="students"hidden>Students</a>
              <a class="nav-link" href="register.php" target="_self" id="register"hidden>Register</a>
            </nav>
          </div>
          <div id="container3" class="col-3">
            <div class=" float-right">
            <nav class="nav nav-pills ">
       

            <div class="dropdown"  id="profile" hidden>
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    My Profile
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" id="profileedit" href="profileedit.php">Edit Profile</a>
    <a class="dropdown-item" href="password.php">Edit Password</a>
  </div>
</div>&nbsp;&nbsp;&nbsp;&nbsp;

          
            <form action="index.php" method="POST">
          <button type="submit" name="logout"  class="nav-link btn btn-danger"   id="logout" hidden>Logout</a>
      </form>
                </nav>
          </div>
          </div>
        </div>


</header>


<table border="1px" class="table table-bordered table-hover">
  <caption>List of Teachers</caption>
  <thead class="thead-dark">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Gender</th>
      <th>Country</th>
      <th>Phone</th>
      <th>Birthday</th>
      <th>Subject</th>
      <th>Grades</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody id="tablebody">
    <?php












    $email="";$subject="";$grade="";$type=type($db_connection);
    if($_COOKIE["email"]!=""){
      $email=urldecode($_COOKIE["email"]);}
    
   if($type=="teacher"){
    $qyery = "select * from teachers ;";
    $result = mysqli_query($db_connection,$qyery);
    while($row = mysqli_fetch_array($result)) {
      echo "<tr>
      <td>{$row['id']}</td>
      <td>{$row['firstname']} {$row['middlename']} {$row['lastname']}</td>
      <td>{$row['gender']}</td>
      <td>{$row['country']}</td>
      <td>{$row['phone']}</td>
      <td>{$row['birthday']}</td>
      <td>{$row['subject']}</td>
      <td>{$row['grades']}</td>
      <td>{$row['email']}</td>
    </tr>";
    }
  }


  elseif($type=="student"){
    $qyery = "select * from students ;";
    $result = mysqli_query($db_connection,$qyery);
    while($row = mysqli_fetch_array($result)) {
if($email==$row["email"]){
  $grade=$row["grade"];
break;
}
    }
    $qyery = "select * from teachers ;";
    $result = mysqli_query($db_connection,$qyery);
    while($row = mysqli_fetch_array($result)) {
if (strpos($row["grades"], $grade) !== false){
  echo "<tr>
      <td>{$row['id']}</td>
      <td>{$row['firstname']} {$row['middlename']} {$row['lastname']}</td>
      <td>{$row['gender']}</td>
      <td>{$row['country']}</td>
      <td>{$row['phone']}</td>
      <td>{$row['birthday']}</td>
      <td>{$row['subject']}</td>
      <td>{$row['grades']}</td>
      <td>{$row['email']}</td>
    </tr>";

}

    }


  }
    
    
    ?>
  </tbody>
</table>




</body>

</html>