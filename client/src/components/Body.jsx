import "../styles/body.css"
import { useState } from "react";
import InputHandling from "../tools/InputHandling";
function Body(){
    const [isLoading,setisLoading] = useState(false);
    const [inputValue,setinputValue] = useState("")
    const[DecimalNum,setDecimalNum] = useState("")
    const [message,setmessage] = useState("")

    const handleConversion = async () => {
        setisLoading(true);
        try {
            if (!InputHandling(inputValue)) {
                setmessage("Please Enter a binary number");
                setDecimalNum("")
                return;
            }

            const response = await fetch(`https://Bin2dec-backend.vercel.app/convert?value=${encodeURIComponent(inputValue)}`);
            const data = await response.json();
            setDecimalNum(data.Decimal);
            setmessage("");
            console.log(data.Decimal)
        } catch (error) {
            console.error(`Failed to convert: ${error}`);
            setmessage("Error converting number");
        } finally {
            setisLoading(false);
        }
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
<div className="button-container"><button className="convert"id="convert-btn"onClick={handleConversion}>Convert</button></div>
</div>
<div className="display-container">
<div className="display">
    {isLoading ? (
        <span>Converting binary number...</span>
    ) : (
        <span>{DecimalNum || 'Enter a binary number'}</span>
    )}
</div>

</div>


        </>
    )
}
export default Body
