import React from 'react'
import { useState } from 'react'

export default function TextArea(props) {
    const[text,setText] = useState('Enter your text Here')
    const upperClick = ()=>{
        console.log('Button Clicked'+ text)
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase!","success")
    }
    const lowerClick = ()=>{
      console.log('Button Clicked'+ text)
      setText(text.toLowerCase())
      props.showAlert("Converted to Lowercase!","success")
    }
    const clearClick = ()=>{
      console.log('Button Clicked'+ text)
      setText("")
      props.showAlert("Text Cleared!","success")
    }
    const spaceClick = ()=>{
      console.log('Button Clicked'+ text)
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(' '))
      props.showAlert("Extra Spaces Removed!","success")
    }
    const copyClick = ()=>{
      console.log('Button Clicked'+ text)
      var text = document.getElementById("myBox")
      // text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copied to Clipboard!","success")
    }
    const handleOnChange = (event)=>{
        console.log('Text Changed')
        setText(event.target.value)        
    }
  return (
    <div className="mb-3" style={props.style}>
        <h1>{props.heading}</h1>
        <div>
        <textarea style={{
              backgroundColor: `${props.bgcolor}`,
              color: (props.mode === 'light') ? 'black' : 'white'
            }} className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.btncolor} my-3 mx-2`} onClick={upperClick}>Convert to UpperCase</button> 
        <button className={`btn btn-${props.btncolor} my-3 mx-2`} onClick={lowerClick}>Convert to LowerCase</button> 
        <button className={`btn btn-${props.btncolor} my-3 mx-2`} onClick={clearClick}>Clear</button>
        <button className={`btn btn-${props.btncolor} my-3 mx-2`} onClick={spaceClick}>Remove Extra Spaces</button>
        <button className={`btn btn-${props.btncolor} my-3`} onClick={copyClick}>Copy</button>
        <h2>Your Text Summary</h2>
        <p>Words-{(text==="")?"0":text.split(" ").length} and Characters-{text.length} <br/>{0.008*text.split(" ").length} Minutes to read</p>
    </div>
  )
}
