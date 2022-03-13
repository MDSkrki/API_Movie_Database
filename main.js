const express = require('express');
const app = express();
app.listen(5000, ()=>{ console.log('Server successfully initiated at port 5000')});

app.use(express.json());

app.get('/', (req,res) => {
    console.log('Get request successful');
    res.send('Get response successful');
})