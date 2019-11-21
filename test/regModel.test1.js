const mongoose = require('mongoose');
const User = require('../models/User');

describe('User Model Test' , () => {

    beforeAll( async() =>{

        try {
            //connects to test database
            await mongoose.connect('mongodb://localhost:27017/test-db', { useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: false }, () => {
                
                console.log("Connected to the database");
            });

            //delete all existing records in the test database
            await User.deleteMany({});
        }
        catch(err){
            console.log("Database Error "+err);
        }
    })

    it('Should Be Able To save' , async(done) => {

        try{

            const saved_user = new User({ 
                first_name: "Kevin",
                last_name: "Kalule",
                email: "kevo.3k@gmail.com",
                gender: "Male",
                city: "Kampala",
                country: "Uganda",
                profile_picture_name:"default.jpg",
                profile_picture_path:"path",
                password:"password",
            })

            await saved_user.save();


        }catch(err){

            console.log("Error : " +err)
        }
        
        const items = await User.find({});
        expect(items.length).toEqual(1);

        done();

    })

   afterAll((done) => {
        
        mongoose.disconnect();
        done();
      });
})