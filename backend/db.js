const mongoose = require('mongoose');

const mongoUri = "mongodb://localhost:27017/inotebook?readPreference=primary&tls=false&directConnection=true" 

const connectToMongo = ()=>{
    mongoose.connect(mongoUri ,  () =>{
        console.log("connected to mongo")
    })
}

module.exports = connectToMongo;