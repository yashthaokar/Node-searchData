const express = require('express')
const app= express()

app.post('/upload',(req,res)=>{
    res.send("file upload")
})

app.listen(5000,()=>{
    console.log(
        "you server is running on port 5000"
    )
})