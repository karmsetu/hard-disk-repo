const { error } = require('console')
const fs = require('fs')

fs.readFile('./Users/test.txt','utf-8', (err, data)=> {
    if(err) error
    console.log(data)
})