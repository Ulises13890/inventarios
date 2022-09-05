const {Router}=require('express');
const estado=require('../modelos/estadoEquipo');
const cors=require('cors');

const router=Router();
router.use(cors());
//metodo POST
router.post('/', function(req,res){
    console.log(req.body);
    let status=new estado();
    status.nombre=req.body.nombre;
    status.estado=req.body.estado;
    status.fecha_creacion=new Date();
    status.fecha_actualizacion=new Date();
    status=status.save();
    res.send(status);
});

//metodo PUT
router.put('/:estadoId', async function(req,res){
    try{
        let status= await estado.findById(req.params.estadoId);
        if (!status){
            res.send('estado no existe');
        }
        
    console.log(req.body);
    status.nombre=req.body.nombre;
    status.estado=req.body.estado;
    status.fecha_actualizacion=new Date();
    status=status.save();
    res.send(status);}
    catch(error){
        console.log(error);
    }
});

//metodo GET
router.get('/', async function(req,res){
    try{
        const est=await estado.find();
        res.send(est);
    }
    catch(error){
        console.log(error);
        res.status(500).send('ocurrio un error en el servidor');
    }
});

module.exports=router;