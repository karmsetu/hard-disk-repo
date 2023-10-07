const mongoose = require('mongoose')

const UpdUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    age: {
        type:Number,
        min: 0,
        validate: {
            validator: v=> {
                if (v>= 19 && v<=13) {
                    return true
                }
            },
            message:props =>  `${props.age} is a teenager`
        }
    },
    email: {
        type:String,
        maxlenght:64
    },
    birthDate: {
        type: Date,
        immutable: true,
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
    
    // const boi = new updatedUser({
    //     name: "Boi",
    //     age: 68,
    //     email: "boi69@boi.com",
    //     address: {
    //         street: 'boiStreet',
    //         city: 'boiland' 
    //     }
    // })
    const teen = new updatedUser({
        name: "random teenager",
        age: 12,
        email: "boi69@boi.com",
        address: {
            street: 'boiStreet',
            city: 'boiland' 
        }
    })
    // await boi.save()
    await teen.save()
    

  }
  
main().catch(err => console.log(err));