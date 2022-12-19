const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    nombre:{
        type: String,
        require:true
    },
    correo:{
        type: String,
        require:true
    },
    username:{
        type: String,
        require: true
    },
    contraseña:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema);