import React, { useState } from 'react'

function Form() {
  const [text,setText]=useState("Enter your text");
  const change = (e)=>{
    setText (e.target.value)
  }
  const uppercase = ()=>{
    const newtext = text.toUpperCase();
    setText(newtext) 
  }
  const lowercase = ()=>{
    const newText = text.toLowerCase();
    setText(newText)
  }
  const [split,ClearText]=useState("Enter your text");
  const Cleartext = ()=>{
    const newText = ""
    setText(newText);
  } 
 const Copytext = ()=>{
  let textarea = document.getElementById("text2");
  textarea.select();

  navigator.clipboard.writeText(textarea.value);
 }
 const Clearspace = ()=>{
  const newtext = text.trim();
  setText(newtext) 
}
const Boldtext = ()=>{
  const newText = text.bold();
  setText(newText)
}
   
  return (
    <div>  
        <div className='div1'>  
        <h1><b>ENTER YOUR TEXT HERE</b></h1>
 <textarea className='textbox' rows={20} cols={100} placeholder={text} onChange={change} value={text} id='text2'></textarea>
 </div>
 <button onClick={uppercase}>Convert into uppercase</button>
 <button onClick={lowercase}>Convert into lowercase</button>
 <button onClick={Copytext}>copy text</button>
 <button onClick={Clearspace}>Clear space </button>
 <button onClick={Boldtext}>Bold</button>
</div>

  )
}

export default Form
