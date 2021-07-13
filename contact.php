<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact us</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css"> 
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script src="jquery-3.5.1.min.js" ></script>
<script src="app.js" type="text/javascript"></script>
<?php 
require("common.php");
require("loginandsignup.php");
?>
</head>
<body class="body">
<header>
<input type="hidden" name="check2" value="<?php  check2($db_connection);?>" id="check2">


    <div id="container1" class="row container-fluid">
        <div id="container2" class="col-8 float-left">
            <nav class="nav nav-pills">
              <a class="nav-link " href="index.php" target="_self">Home</a>
              <a class="nav-link " href="about.php" target="_self">About</a>
              <a class="nav-link " href="gallery.php" target="_self">Gallery</a>

              <a class="nav-link active" href="contact.php" target="_self">Contact us</a>
              <a class="nav-link" href="lessons.php" target="_self" id="lessons"hidden>Lessons</a>
              <a class="nav-link" href="teachers.php" target="_self" id="teachers"hidden>Teachers</a>
              <a class="nav-link" href="students.php" target="_self" id="students"hidden>Students</a>
              <a class="nav-link" href="register.php" target="_self" id="register"hidden>Register</a>
            </nav>
          </div>
          <div id="container3" class="col-4 ">
            <div class="float-right">
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
          
            <div>
            <button type="button" class="btn btn-info dropdown-toggle" id="loginbutton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" data-offset="10,20">Sign in</button>
            <div aria-labelledby="loginbutton" class="dropdown-menu">
              <form id="loginform" class="p-4 "  method="POST">
                <div class="form-group">
                  <label for="loginmail">Email address</label>
                  <input type="email" class="form-control" id="loginmail" name="loginmail" placeholder="email@example.com" required>
                </div>
                <div class="form-group">
                  <label for="loginpass">Password</label>
                  <input type="password" class="form-control" id="loginpass" name="loginpass" placeholder="Password" required>
                </div>
                <button id="login" type="submit" name="loginbut" class="btn btn-primary col-6 ">Sign in</button>
      
              </form>
            </div>
          </div> &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <button type="button" class="btn btn-secondary dropdown-toggle" id="signupbutton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" data-offset="10,20">Sign up</button>
            <div aria-labelledby="signupbutton" class="dropdown-menu">
              <form id="signupform" class="p-4 "  method="POST">
                <div class="form-group">
                  <label for="signupmail">Email address</label>
                  <input type="email" class="form-control" id="signupmail" name="signupmail" placeholder="email@example.com" required>
                </div>
                <div class="form-group">
                  <label for="signuppass1">Password</label>
                  <input type="password" class="form-control" id="signuppass1" name="signuppass1" placeholder="Password" required>
                </div>
                <div class="form-group">
                  <label for="signuppass2">Enter your Password again</label>
                  <input type="password" class="form-control" id="signuppass2" name="signuppass2" placeholder="Password" required>
                </div>
                <button id="signup" type="submit" name="signupbut" class="btn btn-primary col-6 ">Sign up</button>
      
              </form>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;
          
          
          
          <form action="index.php" method="POST">
          <button type="submit" name="logout"  class="nav-link btn btn-danger"   id="logout" hidden>Logout</a>
      </form>            </nav>
          </div>
          </div>
        </div>
 <h1 class="display-1">Contact us</h1>
 <div class="container-fluid text-center">
 <a href="https://www.facebook.com" target="_self"><img class="rounded-circle img-thumbnail img-fluid" src="images/facebook.webp" alt="facebook" width="100 px" height="50 px"></a> &nbsp;&nbsp;&nbsp;&nbsp;
 <a href="https://www.youtube.com" target="_self"><img class="rounded-circle img-thumbnail img-fluid" src="images/youtube.png" alt="youtube" width="100 px" height="50 px"></a> &nbsp;&nbsp;&nbsp;&nbsp;
 <a href="mailto:mostafa.elhabrok@gmail.com" target="_self"><img class="rounded-circle img-thumbnail img-fluid" src="images/gmail.jpg" alt="gmail" width="100 px" height="50 px"></a>
</div>

</header>
<div class="container-fluid row">
<iframe class="col-md-3 col-sm-6" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13822.237783901282!2d31.2289713!3d29.9920886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18f054982ac12332!2z2LPZgdmG2YPYsyDZhNmE2LLYrNin2Kwg2KfZhNmF2K3Yr9mI2K_YqQ!5e0!3m2!1sen!2seg!4v1574245363740!5m2!1sen!2seg" style="border:0;" allowfullscreen="" width="100%" height="150" frameborder="0"></iframe>
</div>
<div class="container-fluid row">
  <div class="col-md-3 col-sm-6">
  <span class="lead">Address:
</span><p>52 Corniche El-Nil,<br> AL-SHARIFAIN Tower 10th Floor,<br>
Maadi, Cairo – Egypt,<br>
+20 2 25258005<br>
+20 2 25260603<br>
Postal Code: 11728</p>
</div>
</div>


</body>
</html>