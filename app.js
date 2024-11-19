const express =  require('express');
const app = express();
const PORT = 3000 || 8000;

app.get('/user/:id', (req, res) => {
    const userId = req.params.id //dot notation
    res.send(`User id is ${userID}`);
});

app.get('/', (req, res)=>{
    res.send("Hello World!"); 
});

// assigned port
app.listen(PORT, () =>{
    console.log(`Server started on ${PORT}`)
});