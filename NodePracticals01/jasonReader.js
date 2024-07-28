// const student = require('./data.json');
// console.log(student)

const fs = require('fs');
fs.readFile('./data.json' , 'utf8' , (err , data) => {
    if(err){
        console.log(`This is error 1` + err);
    }else{
        try{
            const stuData = JSON.parse(data);
            console.log(stuData);
        }
        catch(err){
            console.log(`This is error 2` + err);
        }
    }
})
