const exp = require("express");
const app = exp();
require('dotenv').config();
// console.log(process.env);
// const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Backend is running.\n');
})

app.listen(process.env.PORT, () => {
    console.log(`Backend is running on port: ${process.env.PORT}\n Click here: http://localhost:${process.env.PORT}`);
})