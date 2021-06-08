const express = require("express")
const path = require("path")
const hbs = require("hbs")
const register = require("./models/register");
const Register = require("./models/register");
require("./db/conn");

const port = process.env.PORT || 8000;

const staticPath =  path.join(__dirname,"../public");
const partialsPath = path.join(__dirname, "../template/partials")
const viewsPath = path.join(__dirname, "../template/views")


const app = express()
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

app.get("/", (req, res)=>{
    res.render("index")
})

app.post("/register", async (req, res)=>{
    try{
        const registerEmployee = new Register({

            firstname:req.body.Firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            phonenumber:req.body.pnumber,
            password:req.body.password,
            cpassword:req.body.cpassword
            
        })

        const resistor = await registerEmployee.save();
        res.status(201).render("index")
        console.log(req.body.Firstname)
        // app.send(req.body.Firstname)
    }
    catch(err){
        console.log(err)
    }
})

app.listen(port, ()=>{
    console.log("connection stablished")
})