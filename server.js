const express = require('express');
const bodyParser = require('body-parser');
const {spawn}= require('child_process');
const port = process.env.PORT || 3002;
const url= process.env.URL;
const path =require('path');
const app = express();
app.use(bodyParser.json());
const cors=require('cors');



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



app.post('/exam', (req, res) => {
  const { toughness, hour, consist, syllabus, time } = req.body;
  

console.log('Toughness:', toughness);

res.send({message:"hello workd"});
});


app.listen(port, () => {
  console.log(`Server is ng on port ${port}`);
  
  console.log(`${url}`);
});
