
const express = require('express');
const app = express();
const port = process.env.PORT || 3500;
const cors = require('cors');


//* cors
app.use(cors({
    origin:"*",
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))
//* middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//* routes

app.get('/',(req,res)=>{
    res.json({message:"Hello welcome to Bin2Dic API !!👍"})
})

app.get("/convert",(req,res)=>{
    const binaryNum = req.query.binary;
    
        const decimalNum = parseInt(binaryNum, 2);
    
    
    if (isNaN(decimalNum)) {
        return res.status(400).json({
            error: "Invalid binary number",
            status: false
        });
    }

    return res.json({
        binary: binaryNum,
        decimal: decimalNum,
        status: true
    });
})


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}/`)
})