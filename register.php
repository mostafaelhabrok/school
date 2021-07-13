<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Register</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css"> 
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script src="jquery-3.5.1.min.js" ></script>
<script src="register.js" type="text/javascript"></script>
<script src="app.js" type="text/javascript"></script>
<?php 

require("common.php");






?>

        
</head>
<body class="body">
    <datalist id="country">
        <option value="Egypt">
        <option value="USA">
        <option value="England">
        <option value="France">
        <option value="Italy">
    </datalist>
<header>

<input type="hidden" name="check2" value="<?php  check2($db_connection);?>" id="check2">

    <div  class="row container-fluid">
        <div id="container2" class="col-9 float-left">
            <nav class="nav nav-pills">
              <a class="nav-link " href="index.php" target="_self">Home</a>
              <a class="nav-link " href="about.php" target="_self">About</a>
              <a class="nav-link " href="gallery.php" target="_self">Gallery</a>

              <a class="nav-link" href="contact.php" target="_self">Contact us</a>
              <a class="nav-link" href="lessons.php" target="_self" id="lessons" hidden>Lessons</a>
              <a class="nav-link" href="teachers.php" target="_self" id="teachers" hidden>Teachers</a>
              <a class="nav-link" href="students.php" target="_self" id="students" hidden>Students</a>
              <a class="nav-link active" href="register.php" target="_self" id="register" hidden>Register</a>
            </nav>
          </div>
          <div id="container3" class="col-3 ">
              <div class="float-right">
            <nav class="nav nav-pills ">
          
            <div class="dropdown"  id="profile" hidden>
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    My Profile
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
<div class="container-fluid">
 <h1 class="display-1">Register as a new student</h1>
 <div class="container-fluid">
 <form id="register_form" action="index.php" method="POST" enctype="multipart/form-data">
    <div class="form-row">
    <p class="col-md-2"> Name:</p>
    <div class="col-md-2">
    <input class="form-control" placeholder="Enter your first name" id="fname" name="fname" type="text"  maxlength="12" required> 
</div>
<div class="col-md-2">
    <input class="form-control" placeholder="Enter your middle name" type="text" id="mname" name="mname" maxlength="12" >
</div>
<div class="col-md-2">
    <input class="form-control" placeholder="Enter your last name" type="text" id="lname" name="lname" maxlength="12" required>
</div>
</div>

<div class="form-row">

   <p class="col-md-2"> Country:</p>
     <input class="form-control col-md-2" type="text" list="country" id="countryname" name="countryname" required>
     <p class="col-md-2">Birthday:</p>
        <input class="form-control col-md-2" type="date" name="date" id="date" required>
       


</div>
<div class="form-row">

   <p class="col-md-2"> Phone:</p>
     <input class="form-control col-md-2" type="tel"  id="phone" name="phone" required>
    
      
     <div class="form-check form-check-inline col-md-4">

     <p class="col-md-6">Gender:</p>
        <label><input class="form-check-input " type="radio" name="gender" value="male" checked>Male</label>&nbsp;&nbsp;
        <label><input class="form-check-input " type="radio" name="gender" value="female" >Female</label>
    </div>

</div>
<div class="form-row">
    <p class="col-md-2"> Register Type:</p>
     <select class="form-control custom-select col-md-2" id="type" name="type">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        
    </select>
</div>
    <div class="form-row" id="studentgrade">
    <p class="col-md-2"> Grade:</p>
     <select class="form-control custom-select col-md-2" id="grade" name="grade" >
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
        <option value="four">Four</option>
        <option value="five">Five</option>
        <option value="six">Six</option>
    </select>
    </div>
    <div class="form-row" id="teachersubject" hidden>
    <p class="col-md-2"> Subject:</p>
     <select class="form-control custom-select col-md-2" id="subject" name="subject" >
        <option value="arabic">Arabic</option>
        <option value="math">Math</option>
        <option value="english">English</option>
        <option value="science">Science</option>
        <option value="chemistry">Chemistry</option>
        <option value="physics">Physics</option>
        <option value="biology">Biology</option>
        <option value="french">French</option>
        <option value="deutsch">Deutsch</option>
    </select>
    </div>
    <div class="form-row" id="teachergrades" hidden>
    <div class="form-row form-check form-check-inline" >
    
    <div class="col-auto">
            <p >Choose Grades: </p>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="col-auto"> <input id="one" class="form-check-input" type="checkbox" name="grades[]" value="one"   ><label
                class="form-check-label" for="one">One</label></div>
        <div class="col-auto"><input id="two" class="form-check-input" type="checkbox" name="grades[]" value="two" ><label
                class="form-check-label" for="two">Two</label></div>
        <div class="col-auto"> <input id="three" class="form-check-input" type="checkbox" name="grades[]" value="three"  ><label
                class="form-check-label" for="three">Three</label></div>
        <div class="col-auto"> <input id="four" class="form-check-input" type="checkbox" name="grades[]" value="four"><label
                class="form-check-label" for="four">Four</label></div>
        <div class="col-auto"> <input id="five" class="form-check-input" type="checkbox" name="grades[]" value="five" ><label
                class="form-check-label" for="five">Five</label></div>
        <div class="col-auto"> <input id="six" class="form-check-input" type="checkbox" name="grades[]" value="six" ><label
                class="form-check-label" for="six">Six</label></div>
       


</div>
</div>




<div class="form-row form-check form-check-inline" id="studentlessons">
    
        <div class="col-auto">
            <p>Choose your lessons: </p>
        </div>&nbsp;&nbsp;
        <div class="col-auto"> <input id="arabic" class="form-check-input" type="checkbox" name="lessons[]" value="arabic" disabled  checked><label
                class="form-check-label" for="arabic">Arabic</label></div>
        <div class="col-auto"><input id="english" class="form-check-input" type="checkbox" name="lessons[]" value="english" ><label
                class="form-check-label" for="english">English</label></div>
        <div class="col-auto"> <input id="math" class="form-check-input" type="checkbox" name="lessons[]" value="math" disabled checked><label
                class="form-check-label" for="math">Math</label></div>
        <div class="col-auto"> <input id="science" class="form-check-input" type="checkbox" name="lessons[]" value="science"><label
                class="form-check-label" for="science">Science</label></div>
        <div class="col-auto"> <input id="physics" class="form-check-input" type="checkbox" name="lessons[]" value="physics" disabled><label
                class="form-check-label" for="physics">Physics</label></div>
        <div class="col-auto"> <input id="chemistry" class="form-check-input" type="checkbox" name="lessons[]" value="chemistry" disabled><label
                class="form-check-label" for="chemistry">Chemistry</label></div>
        <div class="col-auto"> <input id="biology" class="form-check-input" type="checkbox" name="lessons[]" value="biology" disabled><label
                class="form-check-label" for="biology">Biology</label></div>
        <div class="col-auto"> <input id="french" class="form-check-input" type="checkbox" name="lessons[]" value="french" disabled><label
                class="form-check-label" for="french">French</label></div>
        <div class="col-auto"> <input id="deutsch" class="form-check-input" type="checkbox" name="lessons[]" value="deutsch" disabled><label
                class="form-check-label" for="deutsch">Deutsch</label></div>


</div>


<div class="form-group">
    <label>Upload your photo <input class="form-control-file"  type="file" id="photo" name="photo"></label>
</div>
<div class="form-group">
    <input class="btn btn-primary" type="submit" name="submit" value="Submit">
    <input class="btn btn-danger" type="reset" value="Reset">
</div>
 </form>
</div>
</div>


</body>
</html>