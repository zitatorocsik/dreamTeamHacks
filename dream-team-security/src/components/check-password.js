import React, { useState } from "react";
import { useRef } from "react";

function CheckPassword(props) {

  const [password, setPassword] = useState(props.password);
  const [securityLevel, setSecurityLevel] = useState("");

  function checkPassword() {
    let score = 0;
    if (password.length >= 8) {
      score++;
    }
    if (password.match(/[a-z]/)) {
      score++;
    }
    if (password.match(/[A-Z]/)) {
      score++;
    }
    if (password.match(/\d+/)) {
      score++;
    }
    if (password.match(/[!@#\$%\^&\*]/)) {
      score++;
    }
    if (!password.match(/(.)\1{2}/)) {
      score++;
    }

    if (score === 6) {
      setSecurityLevel("Very strong");
    } else if (score >= 4) {
      setSecurityLevel("Strong");
    } else if (score >= 3) {
      setSecurityLevel("Moderate");
    } else {
      setSecurityLevel("Weak");
    }
  }

    return (
        <div id="check-password">
            <h1>Check Password</h1>
            <p>Password Strength: {CheckPassword(props.password)}</p>
        </div>
    );


}

export default CheckPassword;