

function rps () {
  var user = document.getElementsByName("rps");
  var comp = Math.ceil(Math.random() * 3)

  // Rock == 1
  // Paper == 2
  // Scissor == 3

  console.log(user);
  console.log(comp);

  if ( user == comp ) {
    alert("draw");
  } else if ( (user > comp) && ((user - comp) < 2) ) {
    alert("YOU WIN!");
  } else if (user == 1 && comp == 3) {
    alert("YOU WIN!");
  } else {
    alert("You Lose");
  }
}

// var nameInput = document.getElementById('nameInput');
// var emailInput = document.getElementById('emailInput');
// var signupButton = document.getElementById('signupButton');
// signupButton.addEventListener('click', function(e) {
//   var nameVal = nameInput.value;
//   var emailVal = emailInput.value;
//   if (nameVal && emailVal) {
//     alert('Thanks for signing up, ' + nameVal + '. Newsletters will be sent to ' + emailVal);
//     nameInput.value = "";
//     emailInput.value = "";
//   } else {
//     alert('We would love for you to sign up, please provide both your name and email address.');
//   }
// });
