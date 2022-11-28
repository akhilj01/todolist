
console.clear();
var count=0;
var id=0;




  

//------------------sliding login page for small screans-------------------

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

// --------large screen---------------

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

//------------------ LOGIN PAGE VALIDATION-----------------------------
// small screen
 
document.getElementById("form1").addEventListener("submit",function(e) {
  var uname = document.getElementById("uname").value;
  var pwd = document.getElementById("pwd").value;
//  var result;
  if (uname == "" && pwd == "") {
    document.getElementById("validname1").style.display = "block";
    document.getElementById("validname1").innerHTML =
      "Please provide your User Name";
    document.getElementById("validpwd1").style.display = "block";
    document.getElementById("validpwd1").innerHTML = "Please provide password";
    e.preventDefault();
  } else if (uname == "") {
    document.getElementById("validname1").style.display = "block";
    document.getElementById("validname1").innerHTML =
      "Please provide your User Name";
    document.getElementById("validpwd1").style.display = "none";
    e.preventDefault();
  } else if (pwd == "") {
    document.getElementById("validpwd1").style.display = "block";
    document.getElementById("validpwd1").innerHTML = "Please provide password";
    document.getElementById("validname1").style.display = "none";
    e.preventDefault();
  } else if (uname.trim() !== "admin") {
    document.getElementById("validname1").style.display = "block";
    document.getElementById("validname1").innerHTML =
      "This User Name doesnot exist";
      e.preventDefault();
  } else if (pwd !== "12345") {
    document.getElementById("validpwd1").style.display = "block";
    document.getElementById("validpwd1").innerHTML = "Password incorrect";
    e.preventDefault();
  } 
  // else {
  //   document.getElementById("validpwd1").style.display = "none";
  //   document.getElementById("validname1").style.display = "none";
  //   // return true;
    
    
  // }
 


})

document.getElementById("form2").addEventListener("submit",function(e)  {
  var uname = document.getElementById("uname2").value;
  var pwd = document.getElementById("pwd2").value;

  if (uname == "" && pwd == "") {
    document.getElementById("validname2").style.display = "block";
    document.getElementById("validname2").innerHTML =
      "Please provide your User Name";
    document.getElementById("validpwd2").style.display = "block";
    document.getElementById("validpwd2").innerHTML = "Please provide password";
    e.preventDefault();
  } else if (uname == "") {
    document.getElementById("validname2").style.display = "block";
    document.getElementById("validname2").innerHTML =
      "Please provide your User Name";
    document.getElementById("validpwd2").style.display = "none";
    e.preventDefault();
  } else if (pwd == "") {
    document.getElementById("validpwd2").style.display = "block";
    document.getElementById("validpwd2").innerHTML = "Please provide password";
    document.getElementById("validname2").style.display = "none";
    e.preventDefault();
  } else if (uname.trim() !== "admin") {
    document.getElementById("validname2").style.display = "block"; // as per paatshala requirement
    document.getElementById("validname2").innerHTML =
      "This User Name doesnot exist";
      e.preventDefault();
  } else if (pwd !== "12345") {
    document.getElementById("validpwd2").style.display = "block";
    document.getElementById("validpwd2").innerHTML = "Password incorrect"; // as per paatshala requirement
    e.preventDefault();
  } 
})

// after validation

function display0() {
  document.getElementById("validname1").style.display = "none";
}
function display1() {
  document.getElementById("validpwd1").style.display = "none";
}
function display2() {
  document.getElementById("validname2").style.display = "none";
}
function display3() {
  document.getElementById("validpwd2").style.display = "none";
}

// --------------------------SIGNUP VALIDATION--------------------------------------

// small screen

function vaildatesignupcheck() {
  var username = document.getElementById("username").value;
  var mail = document.getElementById("mail").value;
  var pswd = document.getElementById("pswd").value;
  var pswdc = document.getElementById("pswdc").value;

  if (username == "") {
    document.getElementById("usernameerr").style.display = "block";
    document.getElementById("usernameerr").innerHTML =
      "User Name cannot be empty";
    return false;
  } else if (mail == "") {
    document.getElementById("mailerr").style.display = "block";
    document.getElementById("mailerr").innerHTML =
      "Email field cannot be empty";
    return false;
  } else if (pswd == "") {
    document.getElementById("pswderr").style.display = "block";
    document.getElementById("pswderr").innerHTML = "Password cannot be empty";
    return false;
  } else if (pswdc == "") {
    document.getElementById("pswdcerr").style.display = "block";
    document.getElementById("pswdcerr").innerHTML = "Password cannot be empty";
    return false;
  } else {
    return true;
  }
}
function displaysignup0() {
  document.getElementById("usernameerr").style.display = "none";
}
function displaysignup1() {
  var mail = document.getElementById("mail").value;
  let regex =
    /^([A-Za-z0-9\.-\_]+)@([A-Za-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
  if (regex.test(mail) == false) {
    document.getElementById("mailerr").style.display = "block";
    document.getElementById("mailerr").innerHTML = "Enter valid mail id";
    return false;
  } else {
    document.getElementById("mailerr").style.display = "none";
    return true;
  }
}
function displaysignup2() {
  document.getElementById("pswderr").style.display = "none";
}
function displaysignup3() {
  var pswd = document.getElementById("pswd").value;
  var pswdc = document.getElementById("pswdc").value;
  if (pswd != pswdc) {
    document.getElementById("pswdcerr").style.display = "block";
    document.getElementById("pswdcerr").innerHTML = "Password doesnot match";
    return false;
  } else {
    document.getElementById("pswdcerr").style.display = "none";
    return true;
  }
}
function vaildatesignup() {
  var username = document.getElementById("username").value;
  var mail = document.getElementById("mail").value;
  var pswd = document.getElementById("pswd").value;
  var pswdc = document.getElementById("pswdc").value;
  if (
    vaildatesignupcheck() == false ||
    displaysignup1() == false ||
    displaysignup3() == false
  ) {
    return false;
  }
  if (username != "admin" && pswd !== "12345" && pswdc !== "12345") {
    // as per paatshala requirement
    return false;
  } else {
    return true;
  }
}

// large screen

function vaildatesignupcheck2() {
  var username2 = document.getElementById("username2").value;
  var mail2 = document.getElementById("mail2").value;
  var pswd2 = document.getElementById("pswd2").value;
  var pswdc2 = document.getElementById("pswdc2").value;

  if (username2 == "") {
    document.getElementById("usernameerr2").style.display = "block";
    document.getElementById("usernameerr2").innerHTML =
      "User Name cannot be empty";
    return false;
  } else if (mail2 == "") {
    document.getElementById("mailerr2").style.display = "block";
    document.getElementById("mailerr2").innerHTML =
      "Email field cannot be empty";
    return false;
  } else if (pswd2 == "") {
    document.getElementById("pswderr2").style.display = "block";
    document.getElementById("pswderr2").innerHTML = "Password cannot be empty";
    return false;
  } else if (pswdc2 == "") {
    document.getElementById("pswdcerr2").style.display = "block";
    document.getElementById("pswdcerr2").innerHTML = "Password cannot be empty";
    return false;
  } else {
    return true;
  }
}
function displaysignup02() {
  document.getElementById("usernameerr2").style.display = "none";
}
function displaysignup12() {
  var mail2 = document.getElementById("mail2").value;
  let regex =
    /^([A-Za-z0-9\.-\_]+)@([A-Za-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
  if (regex.test(mail2) == false) {
    document.getElementById("mailerr2").style.display = "block";
    document.getElementById("mailerr2").innerHTML = "Enter valid mail id";
    return false;
  } else {
    document.getElementById("mailerr2").style.display = "none";
    return true;
  }
}
function displaysignup22() {
  document.getElementById("pswderr2").style.display = "none";
}
function displaysignup32() {
  var pswd2 = document.getElementById("pswd2").value;
  var pswdc2 = document.getElementById("pswdc2").value;
  if (pswd2 != pswdc2) {
    document.getElementById("pswdcerr2").style.display = "block";
    document.getElementById("pswdcerr2").innerHTML = "Password doesnot match";
    return false;
  } else {
    document.getElementById("pswdcerr2").style.display = "none";
    return true;
  }
}
function validatesignup2() {
  var username2 = document.getElementById("username2").value;
  var mail2 = document.getElementById("mail2").value;
  var pswd2 = document.getElementById("pswd2").value;
  var pswdc2 = document.getElementById("pswdc2").value;
  if (
    vaildatesignupcheck2() == false ||
    displaysignup12() == false ||
    displaysignup32() == false
  ) {
    return false;
  }
  if (username2 != "admin" && pswd2 !== "12345" && pswdc2 !== "12345") {
    // as per paatshala requirement
    return false;
  } else {
    return true;
  }
}

// --------------------------SIGNUP VALIDATION--------------------------------------
