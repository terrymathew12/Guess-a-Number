let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    run(e);
  }
});

userNum.focus();

let counter = 0;

function run() {
  /*
  // changing text
  document.getElementById("paragraph").innerHTML = "Hello World!";
  // changing bg color
  document.getElementById("paragraph").style.backgroundColor = "green";
  // changing font color
  document.getElementById("paragraph").style.color = "yellow";
  // changing padding
  document.getElementById("paragraph").style.padding = "20px";
  */
  randomNum();
  userNumber();
  compareNumbers();
}
// random number
function randomNum() {
  let ran = Math.floor(Math.random() * 10);
  let x = document.getElementById("random");
  return ran;
}

function userNumber() {
  // .value is not defined 
  let user = document.getElementById("getNumber").value;
  let y = document.getElementById("userNumber");
  return user;
}

function compareNumbers() {
  let a = userNumber();
  let b = randomNum();
  let z = document.getElementById("compare")
  let c = document.getElementById("counter");
    
  if (a != b) {
    z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
  z.style.color = "white";
  z.style.backgroundColor = "red";
  z.style.padding = "20px";
  z.style.textAlign = "center";
  counter++
  c.innerHTML = "You have tried " + counter + " times.";
  c.style.color = "white";
  c.style.backgroundColor = "red";
  c.style.padding = "20px";
  c.style.textAlign = "center";
  document.querySelector("body").style.backgroundColor = "red";
    
  } else if (a == b) {
    z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
  z.style.color = "white";
  z.style.backgroundColor = "green";
  z.style.padding = "20px";
  z.style.textAlign = "center";
  c.innerHTML = "You have tried " + counter + " times to get it right.";
  c.style.color = "white";
  c.style.backgroundColor = "green";
  c.style.padding = "20px";
  c.style.textAlign = "center";
  counter = 0;
  document.querySelector("body").style.backgroundColor = "green";
  }
  resetInput();
}

function resetInput() {
  document.getElementById("getNumber").value = "";
  
}
