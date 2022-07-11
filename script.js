// Assignment code here

// Get references to the #generate element

var password = document.getElementById("password");

function genPassword() {
  //Get password length

  var passwordLength = parseInt(
    prompt(
      "Choose a password length of at least 8 characters and no more than 128 characters"
    ),
    10
  );
  if (isNaN(passwordLength)) {
    alert("Please eneter a number");

    //User input character selections
  } else {
    var includeSpecialCharacters = confirm(
      "Click ok if you would like $pecial characters. Click Cancel if you would not."
    );
    var includeLowercase = confirm(
      "Click ok if you would like to include lowercase letters. Click cancel if you would not."
    );
    var includeUppercase = confirm(
      "Click ok if you would like to include UPPERCASE letters. Click cancel if you would not."
    );
    var includeNumbers = confirm(
      "Click ok if you would like to unclude numbers. Click cancel if you would not."
    );
    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeSpecialCharacters &&
      !includeNumbers
    ) {
      alert("Please select at least one");
    }

    //Select characters

    var chars = "";
    if (includeLowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      chars += "0123456789";
    }
    if (includeSpecialCharacters) {
      chars += "!@#$%^&*?";
    }

    //Generate Password

    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.charAt(randomNumber, randomNumber);
    }
    document.getElementById("password").value = password;
  }
}
