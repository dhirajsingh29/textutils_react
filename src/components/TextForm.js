import { useState } from "react";

export default function TextForm(props) {

    const handleUppercaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        setText('');
    };

    const handleBase64EncodeClick = () => {
        let newText = btoa(text);
        setText(newText);
    };

    const handleBase64DecodeClick = () => {
        let newText = atob(text);
        setText(newText);
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    // without handleOnChange typing in textarea will be restricted
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#A9A9A9',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }}
                        id="myBox"
                        rows="8"
                        placeholder="Enter text here">
                    </textarea>
                </div>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleUppercaseClick}>
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleLowercaseClick}>
                    Convert to Lowercase
                </button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleClearClick}>
                    Clear
                </button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleBase64EncodeClick}>
                    Base64 Encode
                </button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleBase64DecodeClick}>
                    Base64 Decode
                </button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleExtraSpace}>
                    Remove Extra Space
                </button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleCopy}>
                    Copy
                </button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * (text.length === 0 ? 0 : text.split(' ').filter((ele) => {return ele.length !== 0}).length)} Minutes read</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    );
}
