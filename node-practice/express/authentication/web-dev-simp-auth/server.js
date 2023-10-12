const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const users = []
app.get('/users', (req, res)=>{
    res.json(users)
})
app.post('/users', (req, res)=>{
    const username = req.body.name
    const userpassword = req.body.password
    const reqUserCred = {
        name: username,
        password: userpassword
    }
    const reqBody = req.body
    console.log({reqBody, username,userpassword})
    users.push(reqUserCred)
    res.json(users)
})
app.listen(3000)



// const express = require('express');
// const app = express();
// const PORT = 3000;
 
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
 
// app.post('/signup', function (req, res) {
//     const data = req.body;
//     console.log({data})
//     console.log("Name: ", data.name);
//     console.log("Age: ", data.age);
//     console.log("Gender: ", data.gender);
 
//     res.send();
// });
 
// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });