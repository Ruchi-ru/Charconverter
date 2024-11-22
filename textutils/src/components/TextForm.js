import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText =  text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    let newText =  text.toLowerCase();
    setText(newText);
  }

  const handleReClick = ()=>{
    let newText = text.split('').reverse().join('');
    setText(newText);
  }
  
  const handleClearText = ()=>{
    let newText =  ('');
    setText(newText);
  }


  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
    <div classNameName="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleReClick}>Convert to reverse</button>
    <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length}Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
