const mongoose=require('mongoose');

//defining schema
const noteSchema=mongoose.Schema({
    title:{
        type: String,
    },
    author:{
        type: String,
    },
    content:{
        type : String,
    }
},{
    timestamps: true
});

//exporting the schema model 
module.exports=mongoose.model('Note',noteSchema);
