const fs = require('fs')

// fs.readFile('./resoure/content.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data,data.toString());
// })


//promise实现
const p = new Promise((resolve, reject) => {
    fs.readFile('./resoure/content.txt', (err, data) => {
        if (err) reject(err);
        resolve(data)
    })
})

p.then(value=>{
    console.log(value.toString());
},reason=>{
    console.log(reason);
})