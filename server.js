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
app.use(cors(
  {
    origin:["https://deploy-mern-lwhq.vercel.app"],
    methods:["POST","GET"],
    credentials: true
  }
));



app.post('/exam', (req, res) => {
  const { toughness, hour, consist, syllabus, time } = req.body;
  

console.log('Toughness:', toughness);
  res.send("i am in  exam section");
const pythonScriptPath = path.join(__dirname, 'scripts', 'logisticRegression.py');

  
  const ExamProcess = spawn('python', [pythonScriptPath, toughness, hour, consist, syllabus, time]);
  

ExamProcess.stdout.on('data',(data)=>{
const output= data.toString();
console.log('Python output:',output);
res.send({ output: output });
});
ExamProcess.stderr.on('data',(data)=>{
  const error=data.toString();
  console.log('Python error:',error);
});
ExamProcess.on('close',(code)=>{
  console.log(`python process execute with code ${code}`);
});

});


app.listen(port, () => {
  console.log(`Server is ng on port ${port}`);
  
  console.log(`${url}`);
});
