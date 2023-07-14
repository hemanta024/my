import React, {useState} from 'react'

export default function Textform(props) {

  const [text, setText] = useState("");

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const clear = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("text is cleared", "success");
  }

  return (
    <>
    <div>
        <div className='container'>
            <h1 style={{backgroundColor: props.mode==="light"?"white":"grey", color: props.mode==="light"?"black":"white"}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==="light"?"white":"grey", color: props.mode==="light"?"black":"white"}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={clear}>clear text</button>
        </div>
        <div className="container my-3" style={{backgroundColor: props.mode==="light"?"white":"grey", color: props.mode==="light"?"black":"white"}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
    </div>
    </>
  )
}
