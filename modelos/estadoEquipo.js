const {Schema, model}=require('mongoose');

const estadoEquipoSchema=Schema({
    nombre:{
        type:String,
        required:true,
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

const estadoEquipo=model('estado_equipos',estadoEquipoSchema);
module.exports=estadoEquipo;