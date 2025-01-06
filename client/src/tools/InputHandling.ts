
function InputHandling(binary:string): boolean {
    
    const binaryRegex = /^[0-1]+$/;
    if(!binaryRegex.test(binary)){
        console.log("Input Invalid")
        
        return false
    }else{
console.log("Input valid ");

return true
    }
    
    

}


export default InputHandling