const express=require('express');
const bodyparser=require('body-parser');
var mongoose = require('mongoose');
const dburl  = "mongodb+srv://sohaib:Myself.me1@cluster0.6ve9r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"




//create express app
const app=express();

//parse application/ x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended : false}));
//parse application json
app.use(bodyparser.json());

mongoose.Promise = global.Promise;
mongoose.connect(dburl,{
useNewUrlParser :true
}) .then(() =>{ 
    console.log('database is connected');
    process.exit;
 }  )



.catch( (err) => {
console.log( 'could not connect to database'  );
process.exit;

} )


app.get('/',function(req,res){
    res.send("hello world");
});

require('./app/routes/routes')(app);


const PORT= 3000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});

// heroku config:set MONGODB_URI="mongodb+srv://sohaib:Myself.me1@cluster0.6ve9r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

