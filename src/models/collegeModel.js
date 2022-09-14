const mongoose = require("mongoose");


const collegeSchema = new mongoose.Schema(
    {
        name : {
            type : String , 
            required : true,
            unique : true
        },
        fullName : {
            type : String , 
            required : true,
            unique : true
        },
        logoLink : {
            type : String , 
            required : true
        },
        isDeleted : {
            type : Boolean,
            default : false
        },
        interns : {type : []}
    },{timeStamp : true}
);

module.exports = mongoose.model("college" , collegeSchema)

//{ name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`},
// logoLink: {mandatory}, isDeleted: {boolean, default: false} }