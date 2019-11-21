const mongoose = require('mongoose')
const Register = require('../models/registrationModel')

//create test suite
describe('registration model test',() => {
    // set up: runs before any test: in this case to create our testdb
    
    beforeAll(async () => {

        try {
            //connects to test database 
            await mongoose.connect("mongodb://localhost:27017/test-db",{useNewUrlParser: true, userUnifieldTopology: true})
            
            await Register.deleteMany({});
        } catch (error) {
            console.log("database error" + error)
        }
    })

    test('should be able to save', async()=>{
        try{
        const register = new Register({firstname:'Daniel'})
        await register.save()
        
        const items = await Register.find({})
        expect(items.length).toBe(1);

    } catch (err){
        console.log("Database Error" + err);
    }
})

test('should not save when first name isnt input', async () => {
    try {
        await new Register({ lastname: 'Joreen' }).save()
    } catch (err) {
        console.log("database error " + err)
        expect(err.toString()).toBe('ValidationError: firstname: Please Enter first name')
    }
    const items = await Register.find({})
    expect(items.length).toBe(0)
})

})