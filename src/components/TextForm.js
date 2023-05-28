import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleonChange = (event) => {
    //console.log("Text value was changed");
    setText(event.target.value);
  };

  const handleupClick = () => {
    //console.log("Uppercase button was clicked.Input is : "+ text);
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handledownClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handleClearText = () => {
    let clearText = "";
    setText(clearText);
  };
  const handleEmail=()=>{
    let emails= text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setText(emails.join('\n'))
  }

  return (
    <>
      <div className="container"style={{color:props.pagemode==='light'?'#2c2e34':'white'}}>
        <h1>{props.heading1}</h1>
        <div className="mb-1">
          {/* <label htmlFor="FormTextarea1" className="form-label">
          Enter your text here:
        </label> */}
          <textarea
            style={{backgroundColor:props.pagemode==='light'?'white':'#2c2e34',color:props.pagemode==='light'?'#2c2e34':'white'}}
            
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="FormTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handledownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2"onClick={handleEmail}>Extract Emails</button>
      </div>
      <div className="container my-3"style={{color:props.pagemode==='light'?'#2c2e34':'white'}}>
        <h2>Your text summary:</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters(including
          spaces).
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text above to preview"}</p>
      </div>
    </>
  );
}
