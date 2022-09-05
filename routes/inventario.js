const {Router}=require('express');
const { body } = require('express-validator');
const Inventario=require('../modelos/inventario');
const cors=require('cors');

const router=Router();

router.use(cors());
//metodo POST
router.post('/', function(req,res){
    console.log(req.body);
    let inventar=new Inventario();
    inventar.modelo=req.body.modelo;
    inventar.serial=req.body.serial;
    inventar.descripcion=req.body.descripcion;
    inventar.foto_equipo=req.body.foto_equipo;
    inventar.precio=req.body.precio;
    inventar.fecha_creacion=new Date();
    inventar.fecha_actualizacion=new Date();
    inventar.fecha_compra=new Date();
    inventar.usuario=req.body.usuario;
    inventar.marca=req.body.marca;
    inventar.tipoEquipo=req.body.tipoEquipo;
    inventar.estadoEquipos=req.body.estadoEquipos;
    inventar=inventar.save();
    res.send(inventar);    
});

//metodo PUT
router.put('/:inventarioId', async function(req,res){
    try{
    let inventar= await Inventario.findById(req.params.inventarioId);
    if (!inventar){
        res.send('inventario no existe');
    }
    const existeInventarioSerial= await Inventario.
                        findOne({serial:req.body.serial, _id:{$ne:inventar._id}});
    console.log(req.body);
    inventar.modelo=req.body.modelo;
    inventar.serial=req.body.serial;
    inventar.descripcion=req.body.descripcion;
    inventar.foto_equipo=req.body.foto_equipo;
    inventar.precio=req.body.precio;
    inventar.fecha_actualizacion=new Date();
    inventar.fecha_compra=new Date();
    inventar.usuario=req.body.usuario;
    inventar.marca=req.body.marca;
    inventar.tipoEquipo=req.body.tipoEquipo;
    inventar.estadoEquipos=req.body.estadoEquipos;
    inventar=inventar.save();
    res.send(inventar);}
    catch(error){
        console.log(error);
    }    
});

//metodo GET
router.get('/', async function(req,res){
    try{
        const invent=await Inventario.find().populate(
            [
                {path:'usuario', select: 'nombre email estado'}, 
                {path:'marca', select: 'nombre estado'}, 
                {path:'tipoEquipo', select: 'nombre estado'}, 
            {path: 'estadoEquipos', select: 'nombre estado'}]
        );
        res.send(invent);
    }
    catch(error){
        console.log(error);
        res.status(500).send('ocurrio un error en el servidor');
    }
});

module.exports=router;