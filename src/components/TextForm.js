import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("uppercase was clicked" +" "+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick=()=>{
        // console.log("uppercase was clicked" +" "+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleSeClick=()=>{
        // console.log("uppercase was clicked" +" "+ text);
        let newText = text
        .split('. ') // Split the text into sentences by ". "
        .map(sentence => sentence.charAt(0).toUpperCase() + sentence.substring(1).toLowerCase()) // Capitalize the first letter of each sentence
        .join('. '); // Join the sentences back with ". "
    setText(newText);
    props.showAlert("Converted to paragraphic sentence","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText]=useState('');
    // text="new text"; wrong way to change the text
    // setText("new Text"); correct way to change the text
    return (
        <>
        <div className='container' style={{color:props.mode=== 'dark' ?'white':'#042743'}}>
             <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark' ?'grey':'white', color:props.mode=== 'dark' ?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleSeClick}>Convert to SentenceCase</button>

        </div>
        <div className="container my-3" style={{color:props.mode=== 'dark' ?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{(text.match(/\b\w+\b/g) || []).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )// )const count = (s) => (s.match(/\b\w+\b/g) || []).length;
}
