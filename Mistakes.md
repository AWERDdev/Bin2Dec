## Mistake
try to use less functions as possible while keeping the code clean and maintainable
``` React
const sendNum = ()=>{
        if(!InputHandling(inputValue)){
            // console.log("invalid input")
            setmessage("Please Enter a binary number")
            
        }else{
            // fetch(` http://localhost:3500/convert?value=${encodeURIComponent(inputValue)}`)
            fetch(`https://Bin2dec-backend.vercel.app/convert?value=${encodeURIComponent(inputValue)}`)
            .then(response => response.json())
            .then(data =>{
              console.log( `data send successfully ${data}`)
              setmessage("")
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
            const response = await fetch(`https://Bin2dec-backend.vercel.app/sendDecimalnum`);
            const data = await response.json();
            setDecimalNum(data)
            // console.log(`data recived successfully`)
            }
        }
        catch(error){
            console.error(`failed to send data \n${error}`)
             setDecimalNum('Error converting number');
        }
    }
    
const HandleFunctions = async ()=>{
    setisLoading(true)
    try{
        await sendNum(); 
       await fetchnums();
    }
   catch(erorr){
    console.log(`failed to handle data ${erorr}`)
   }
    finally{
        setisLoading(false);
    };
 
}

```