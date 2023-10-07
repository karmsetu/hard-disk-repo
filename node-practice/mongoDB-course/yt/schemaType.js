const mongoose = require('mongoose')

const UpdUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    age: Number,
    email: String,
    birthDate: {
        type: Date,
        default: new Date()
    },
    single: Boolean,
    // bestFriend: mongoose.SchemaType.ObjectId,
    hobbies: [Array],
    address: {
        street: String,
        city: String 
    }
})

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/test');
    const updatedUser = mongoose.model('updatedUser', UpdUserSchema); 
    
    const boi = new updatedUser({
        name: "Boi",
        age: 69,
        email: "boi69@boi.com",
        address: {
            street: 'boiStreet',
            city: 'boiland' 
        }
    })
    await boi.save()
    

  }
  