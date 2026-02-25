import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const [btnText, setBtnText] = useState('Speak');
    // setText("newtext"); //correct way to change the state
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
        setText("");
    }
    const speak = () => {
        // If we are already speaking, clicking should cancel it
        if (btnText === 'Stop') {
            window.speechSynthesis.cancel();
            setBtnText('Speak');
            return;
        }

        // If we are starting to speak
        let msg = new SpeechSynthesisUtterance(text);

        // This is the part you asked for: 
        // It triggers automatically when the speech finishes
        msg.onend = () => {
            setBtnText('Speak');
        };

        window.speechSynthesis.speak(msg);
        setBtnText('Stop');
    }
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={speak}>{btnText}</button>


            </div>
            <div className="container my-2">
                <h3>Your Text Summary</h3>
                <p>
                    {text.split(/\s+/).filter((el) => el.length !== 0).length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(/\s+/).filter((el) => el.length !== 0).length} Minutes read</p>
            </div>

        </>
    )
}
