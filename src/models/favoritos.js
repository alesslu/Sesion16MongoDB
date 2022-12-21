const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    pokemon:{
        type: String,
        require: true
    }
});


module.exports = mongoose.model('User', userSchema);