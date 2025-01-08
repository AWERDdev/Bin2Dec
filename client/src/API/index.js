
const express = require('express');
const app = express();
const port = process.env.PORT || 3500;
const cors = require('cors');


//* cors


// Main CORS configuration
app.use(cors({
    origin: ['https://bin2dec-frontend.vercel.app', 'http://localhost:5173', 'https://bin2dec-backend.vercel.app'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
    maxAge: 86400
}));

// Update the header configuration as well
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins for testing
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

app.get("/convert", async (req, res) => {
    try {
        const binaryNum = req.query.value;
        if (!binaryNum) {
            return res.status(400).json({
                error: "Please enter a binary number",
                status: false
            });
        }
        
        const decimalNum = parseInt(binaryNum, 2);
        if (isNaN(decimalNum)) {
            return res.status(400).json({
                error: "Invalid binary number",
                status: false
            });
        }
        let Value = {};
        Value = { Decimal: decimalNum };
       
       console.log(Value)
       return res.status(200).json(Value)
    } catch (error) {
        return res.status(500).json({
            error: "Failed to convert binary number",
            status: false
        });
    }
});




app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}/`)
})