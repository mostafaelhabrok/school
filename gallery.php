<!DOCTYPE html>
<html>
<head>
<title>Gallery</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css"> 
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script src="jquery-3.5.1.min.js" ></script>
<script src="app.js" type="text/javascript"></script>

<style>
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>
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
              <a class="nav-link active" href="gallery.php" target="_self">Gallery</a>
              <a class="nav-link" href="contact.php" target="_self">Contact us</a>
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
      </form>
            </nav>
          </div>
          </div>
        </div>

</header>


<br>












<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 6</div>
  <img src="images/1.jpg" style="width:100%">
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 6</div>
  <img src="images/2.jpg" style="width:100%">
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 6</div>
  <img src="images/3.jpg" style="width:100%">
</div>

<div class="mySlides fade">
  <div class="numbertext">4 / 6</div>
  <img src="images/4.jpg" style="width:100%">
</div>

<div class="mySlides fade">
  <div class="numbertext">5 / 6</div>
  <img src="images/5.jpg" style="width:100%">
</div>

<div class="mySlides fade">
  <div class="numbertext">6 / 6</div>
  <img src="images/6.jpg" style="width:100%">
</div>

</div>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>

<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
</script>

</body>
</html> 
