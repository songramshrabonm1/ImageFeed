require('dotenv').config(); 
const mongoose = require('mongoose'); 
const connectedDb = async()=>{
    try{
        await mongoose.connect(process.env.MOGOOSE_URI);
        console.log('Mongodb Connected Successfullyy......');
    }catch(error){
        console.error(error.message);
        process.exit(1); 
        // process.exit(1) মানে DAtabse যদি create না হয় তাহলে যেন এখানে ই server বন্ধ হয়ে যায় কারণ database ব্যতীত server চালানোর দরকার নাই। 
    }
}
module.exports = connectedDb ; 