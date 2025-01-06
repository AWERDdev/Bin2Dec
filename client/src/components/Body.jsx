import "../styles/body.css"
import { useState } from "react";
import InputHandling from "../tools/InputHandling";
function Body(){

    const [inputValue,setinputValue] = useState("")
    const[DecimalNum,setDecimalNum] = useState({})
    const [message,setmessage] = useState("")


    const sendNum = ()=>{
        if(!InputHandling(inputValue)){
            // console.log("invalid input")
            setmessage("Please Enter a binary number")
            
        }else{
            fetch(` http://localhost:3500/convert?value=${encodeURIComponent(inputValue)}`)
            .then(response => response.json())
            .then(data =>{
              console.log( `data send successfully ${data}`)
            })
            .catch(error=>{
              console.error(`failed to send data \n ${error}`)
            })
            
        }
}
        

const fetchnums = async () =>{
    try{
        if(!InputHandling(inputValue)){
             // console.log("invalid input")
        }else{
            const response = await fetch(`http://localhost:3500/sendDecimalnum`);
            const data = await response.json()
            setDecimalNum(data)
            // console.log(`data recived successfully`)
            }
        }
        catch(error){
            console.error(`failed to send data \n${error}`)
        }
    }
    
const HandleFunctions = ()=>{

    sendNum(); 
    fetchnums();
 
}


    return(
        <>
        <div className="inputs-container">
<div className="input-container">
    <div className="row">
    <label htmlFor="Input">
        convert binary to Decimal number
    </label>
    <input type="text" className="bin2dic-Input" id="Input"name="bin2dic-Input"placeholder="Enter binary number"onChange={(e)=> setinputValue(e.target.value)}/>
   <label htmlFor="Input" className="warning-label">{message}</label>
    </div>
</div>
<div className="button-container"><button className="convert"id="convert-btn"onClick={HandleFunctions}>Convert</button></div>
</div>
<div className="display-container">
    <p className="display">{DecimalNum.Decimal}</p>
</div>
        </>
    )
}
export default Body
