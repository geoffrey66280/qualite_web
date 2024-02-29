function showPWD() {
  var passwod_input = document.getElementById("pwd-input");
  if (passwod_input.type === "password") {
    passwod_input.type = "text";
  } else {
    passwod_input.type = "password";
  }
}
