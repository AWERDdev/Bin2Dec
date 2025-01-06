
const express = require('express');
const app = express();
const port = process.env.PORT || 3500;
const cors = require('cors');

let Value = {}
//* cors


// Main CORS configuration
app.use(cors({
    origin: ['https://bin2dec-frontend.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
    maxAge: 86400 // Cache preflight requests for 24 hours
}));

// Additional headers for extra compatibility
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://bin2dec-frontend.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//* middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//* routes

app.get('/',(req,res)=>{
    res.json({message:"Hello welcome to Bin2Dic API !!👍"})
})

app.get("/convert",async(req,res)=>{
    try{

        const binaryNum = await req.query.value;
        if(!binaryNum){
            console.log('please enter a binary number')
    
        } 
        const decimalNum = await parseInt(binaryNum, 2);
            if (isNaN(decimalNum)) {
                return res.status(400).json({
                    error: "Invalid binary number",
                    status: false
                });
            }
                  Value = {
                    Decimal:decimalNum
                  }
                 
        console.log(decimalNum);
        console.log(Value)
        console.log(binaryNum);
      
    }catch(error){
    console.error(`failed to convert binary numver \n ${error}`)
    }
    
})

app.get("/sendDecimalnum",(req,res)=>{
    res.json(Value)
    console.log('data sent successfully')
})





app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}/`)
})