const express = require('express');
const app = express();
const path =require('path');

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

//   set static folder 

app.use(express.static(path.join(__dirname,'public')))
const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})