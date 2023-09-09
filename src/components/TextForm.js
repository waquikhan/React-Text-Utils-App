import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Chnage ");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    // console.log("Lower Case was Click")
    let newText = text.toLowerCase();
    setText(newText);
  };

  const [text, setText] = useState("Enter the Text Here");
  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor : props.mode === "dark"?'gery':'white'}}
            id="mybox"
            rows="9"
          />
        </div>
        <button className="btn primarybutton btn-primary mx-2" onClick={handleUpClick}>
          Convert to upper Case
        </button>
        <button className="btn secondrybutton btn-primary" onClick={handleLowClick}>
          Convert to lower Case
        </button>
      </div>
      <div className="container" >
        <h1>Waqui Ahmad khan</h1>
        <p>{text.split(" ").length} words and  {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>

      </div>
    </>
  );
}
