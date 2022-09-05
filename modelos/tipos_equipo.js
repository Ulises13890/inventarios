const {Schema, model}=require('mongoose');

const tipoEquipoSchema=Schema({
nombre:{
    type: String,
required:true,},
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
}

});
const TipoEquipo=model('tipos_equipos',tipoEquipoSchema);
module.exports=TipoEquipo;