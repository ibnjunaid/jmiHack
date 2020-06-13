const fs  = require('fs');
content = '';
fs.readFile(__dirname +'/images/1.png',(err,data)=>{
    fs.writeFile('regen.png',data,()=>{
        console.log('Sucessfully written tofile');
    });
});

