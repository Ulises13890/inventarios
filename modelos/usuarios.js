const {Schema, model}=require('mongoose');
const usuarioSchema=Schema({
    nombre:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
estado:{
    type:String,
    required:true,
    enum:['activo','inactivo'],
},
fecha_creacion:{
    type:Date,
    required:true,
},
fecha_actualizacion:{
    type:Date,
    required:true,
},
});
const usuarios=model('usuarios',usuarioSchema);
module.exports=usuarios;