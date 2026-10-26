const express = require('express');

const app = express();

const PORT = 300;

app.get('/', (req, res) => {
    res.send("Welcome to Our Customer API !")
})

app.listen(PORT, (error) =>  {
    if (!error)
        console.group("Server is successfully listening at port:", PORT);
    else
        console.error('An error has occurred:', error);
})