import React, { useState } from "react";
import { useRef } from "react";
import CheckPassword from "./check-password";
import "./home-styles.css";
import $ from 'jquery';
import 'jquery';
import { Helmet } from 'react-helmet';


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
      <h1 className="home-header-style">How long can Heimdall protect your password?</h1>
      <div className="body"></div>
      <div>
        <Helmet>
  <title>My Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</Helmet>

        <input className="password-input"
        id="todo-add-text"
        ref={passwordRef}
        type="text"
        placeholder="Enter password"/>
      </div>
      <div><button className="check-button" onClick={handleCheckPassword}>Judge Me</button>
      <CheckPassword password={password}/></div>
      

      <div className="head"></div>
      <section className="move-area">
  <div className='.container'>
    <div className='eye'></div>
    <div className='eye'></div>
  </div>
</section>
      <div className="brows brow-one"></div>
      <div className="brows brow-two"></div>
      <div className="mouth"></div>
    </div>
  );

  

}

$(".move-area").mousemove(function(event) {
  var eye = $(".eye");
  console.log('eye', eye)
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

export default HomePage;
