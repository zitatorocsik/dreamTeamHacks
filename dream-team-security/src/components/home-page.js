import React, { useState } from "react";
import { useRef } from "react";
import CheckPassword from "./check-password";
import "./home-styles.css";

function HomePage(props) {
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  //handle the form submission
  function handleCheckPassword() {
    const name = passwordRef.current.value;
    console.log(name);
    setPassword(name);
    // return <CheckPassword password={name} />;
  }

  return (
    <div id="home-page">
      <h1 className="home-header-style">Home Page</h1>
      <input
        id="todo-add-text"
        ref={passwordRef}
        type="text"
        placeholder="Add Task"
      />
      <button onClick={handleCheckPassword}>Add</button>
      <CheckPassword password={password} />
    </div>
  );
}

export default HomePage;