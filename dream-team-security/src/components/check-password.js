function CheckPassword(props) {
  // use the password from the home page
  const password = props.password;

  function check_input_string(input_string) {
    // function implementation here
    function check_input_string(input_string) {
      let array = [false, false, false, false];
      for (let i = 0; i < input_string.length; i++) {
          let char = input_string[i];
          if (!isNaN(char)) {
              array[0] = true;
          } else if (!/^[a-zA-Z0-9]*$/.test(char)) {
              array[1] = true;
          } else if (char === char.toUpperCase()) {
              array[2] = true;
          } else if (char === char.toLowerCase()) {
              array[3] = true;
          }
          if (array.every(elem => elem === true)) {
              break;
          }
      }
  
      if ((array[0] && input_string.length >= 4 && input_string.length <= 10) || 
          (array[3] && !array[2] && input_string.length >= 4 && input_string.length <= 7) ||
          (array[2] && array[3] && input_string.length >= 4 && input_string.length <= 6) ||
          (array[2] && array[3] && array[0] && input_string.length >= 4 && input_string.length <= 5) ||
          (array[2] && array[3] && array[0] && array[1] && input_string.length >= 4 && input_string.length <= 5)) {
          return "Low"
      } else if ((array[0] && input_string.length >= 11 && input_string.length <= 15) || 
          (array[3] && !array[2] && input_string.length >= 8 && input_string.length <= 10) ||
          (array[2] && array[3] && input_string.length >= 7 && input_string.length <= 9) ||
          (array[2] && array[3] && array[0] && input_string.length >= 6 && input_string.length <= 8) ||
          (array[2] && array[3] && array[0] && array[1] && input_string.length >= 6 && input_string.length <= 8)) {
          return "Low-Medium"
        
        } else if ((array[0] && input_string.length >= 16 && input_string.length <= 18) || 
            (array[3] && !array[2] && input_string.length >= 11 && input_string.length <= 13) ||
            (array[2] && array[3] && input_string.length >= 10 && input_string.length <= 11) ||
            (array[2] && array[3] && array[0] && input_string.length >= 9 && input_string.length <= 10) ||
            (array[2] && array[3] && array[0] && array[1] && input_string.length >= 9 && input_string.length <= 10)) {
            return "Medium"
        } else if ((array[0] && input_string.length > 18) || 
            (array[3] && !array[2] && input_string.length >= 14 && input_string.length <= 17) ||
            (array[2] && array[3] && input_string.length >= 12 && input_string.length <= 14) ||
            (array[2] && array[3] && array[0] && input_string.length >= 11 && input_string.length <= 13) ||
            (array[2] && array[3] && array[0] && array[1] && input_string.length >= 11 && input_string.length <= 12)) {
            return "Medium-High"
        } else if ((array[0] && input_string.length > 18) || 
        (array[3] && !array[2] && input_string.length > 17) ||
        (array[2] && array[3] && input_string.length > 15) ||
        (array[2] && array[3] && array[0] && input_string.length > 14) ||
        (array[2] && array[3] && array[0] && array[1] && input_string.length > 13)) {
        return "High"
    }
        return array;
    }
    
    const password = props.password;
    let result
    
  
  }
  
  const strength = check_input_string(password);

  return (
    <div id="check-password">
      <h1>Check Password</h1>
      <p>Password Strength: {strength}</p>
    </div>
  );
}

export default CheckPassword;