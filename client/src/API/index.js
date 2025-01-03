
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

app.use('/',(req,res)=>{
    res.json({message:"Hello welcome to Bin2Dic API !!👍"})
})



app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}/`)
})