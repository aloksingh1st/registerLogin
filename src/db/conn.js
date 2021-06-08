const mongoose =require("mongoose")
mongoose.connect("mongodb://localhost:27017/myregister",{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("succesfully connected")
}).catch((err)=>{
    console.log(err)
})