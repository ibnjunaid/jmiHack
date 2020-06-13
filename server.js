//const axios = require('axios');

const fs = require('fs');
fs.readFile('./1.pdf',(err,data)=>{
    console.log('read completed');
    fs.writeFile('1_copy.pdf',data,()=>{
        console.log('\n Guess What cpy completed');        
    });
});
