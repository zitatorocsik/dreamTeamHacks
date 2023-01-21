import React, { useState } from "react";
import { useRef } from "react";

function CheckPassword(props) {
  //use the password from the home page
  const password = props.password;

  function StrengthChecker(password) {
    let strength = 0;

    // Check for lowercase letters
    if (password.match(/[a-z]+/)) {
      strength += 25;
    }

    // Check for uppercase letters
    if (password.match(/[A-Z]+/)) {
      strength += 25;
    }

    // Check for numbers
    if (password.match(/[0-9]+/)) {
      strength += 25;
    }

    // Check for special characters
    if (password.match(/[$@#&!]+/)) {
      strength += 25;
    }

    // Check for minimum length
    if (password.length < 6) {
      return "Minimum length of password is 6";
    }

    // Check for maximum length
    if (password.length > 12) {
      return "Maximum length of password is 12";
    }

    return strength;
  }

    return (
        <div id="check-password">
            <h1>Check Password</h1>
            <p>Password Strength: {StrengthChecker(password)}</p>
        </div>
    );
    

}

export default CheckPassword;