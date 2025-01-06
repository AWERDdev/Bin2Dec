import "../styles/body.css"
import { useState } from "react";

function Body(){


    const [inputValue,setinputValue] = useState("")
    const[DecimalNum,setDecimalNum] = useState({})



    const sendNum = ()=>{
        // fetch(` http://localhost:3500/requestlink?value=${encodeURIComponent(Input_value)}`)
        fetch(` http://localhost:3500/convert?value=${encodeURIComponent(inputValue)}`)
        .then(response => response.json())
        .then(data =>{
          console.log( `data send successfully ${data}`)
        })
        .catch(error=>{
          console.error(`failed to send data \n ${error}`)
        })
        
        }
        

const fetchnums = async () =>{
    try{
    const response = await fetch(`http://localhost:3500/sendDecimalnum`);
    const data = await response.json()
    setDecimalNum(data)
    console.log(`data recived successfully`)
    }catch(error){
        console.error(`failed to send data \n${error}`)
    }
    }
    
const HandleFunctions = ()=>{
    sendNum(); 
    fetchnums();
}


    return(
        <>
<div className="input-container">
    <div className="row">
    <label htmlFor="Input">
        Enter binary number
    </label>
    <input type="text" className="bin2dic-Input" id="Input"name="bin2dic-Input"placeholder="Enter binary number"onChange={(e)=> setinputValue(e.target.value)}/>
    </div>
</div>
<div className="button-container"><button className="convert"id="convert-btn"onClick={HandleFunctions}>Convert to decimal number </button></div>

<div className="display-container">
    <p className="display">{DecimalNum.decimalNum}</p>
</div>
        </>
    )
}
export default Body
