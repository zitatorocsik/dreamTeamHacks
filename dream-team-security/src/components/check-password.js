import React from "react";

function CheckPassword(props) {
  // use the password from the home page
  const password = props.password;
  const strength = "";
  // Function to check the strength of the password
  function checkPasswordStrength() {
    let array = [false, false, false, false];
    for (let i = 0; i < password.length; i++) {
      let char = password[i];
      if (!isNaN(char)) {
        array[0] = true;
      } else if (!/^[a-zA-Z0-9]*$/.test(char)) {
        array[1] = true;
      } else if (char === char.toUpperCase()) {
        array[2] = true;
      } else if (char === char.toLowerCase()) {
        array[3] = true;
      }
    }
    if(password.length < 4){
      strength = "Your password strength is: Too Short";
    }
    else if (array[0] && password.length >= 4 && password.length <= 10) {
      strength = "Your password strength is: Low";
    } else if (
      (array[3] && !array[2] && password.length >= 4 && password.length <= 7) ||
      (array[2] && array[3] && password.length >= 4 && password.length <= 6) ||
      (array[2] && array[3] && array[0] && password.length >= 4 && password.length <= 5) ||
      (array[2] && array[3] && array[0] && array[1] && password.length >= 4 && password.length <= 5)
    ) {
      strength = "Your password strength is: Low-Medium";
    } else if (
      (array[0] && password.length >= 11 && password.length <= 15) ||
      (array[3] && !array[2] && password.length >= 8 && password.length <= 10) ||
      (array[2] && array[3] && password.length >= 7 && password.length <= 9) ||
      (array[2] && array[3] && array[0] && password.length >= 6 && password.length <= 8) ||
      (array[2] && array[3] && array[0] && array[1] && password.length >= 6 && password.length <= 8)
    ) {
      strength = "Your password strength is: Medium";
    } else if (
      (array[0] && password.length >= 16 && password.length <= 18) ||
      (array[3] && !array[2] && password.length >= 11 && password.length <= 13) ||
      (array[2] && array[3] && password.length >= 10 && password.length <= 11) ||
      (array[2] && array[3] && array[0] && password.length >= 9 && password.length <= 10) ||
      (array[2] && array[3] && array[0] && array[1] && password.length >= 9 && password.length <= 10)
    ) {
      strength = "Your password strength is: Medium-High";
    } else if (
      (array[0] && password.length > 18) ||
      (array[3] && !array[2] && password.length <= 14) ||
        (array[2] && array[3] && array[0] && password.length >= 11 && password.length <= 13) ||
        (array[2] && array[3] && array[0] && array[1] && password.length >= 11 && password.length <= 12)
        ) {
        strength = "Your password strength is: High";
        }
        }
         
        return (
        <div>
<div id="check-password">
      <h1>Check Password</h1>
      <p>Password Strength: {strength}</p>
    </div>        </div>
        );
        }
        
        export default CheckPassword;
