// getting-started.js
const mongoose = require('mongoose');
const user = require('./user')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://0.0.0.0:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  const kittySchema = new mongoose.Schema({
    name: String
  }); //creating new schema
  const Kitten = mongoose.model('Kitten', kittySchema); 
  // const User = mongoose.model('user', user)
  const newUser = new user({name:"shourya", age:18})
  const silence = new Kitten({ name: 'Silence' });//creating new document
  console.log(silence.name); // 'Silence'
  await silence.save();
  await newUser.save()
}
