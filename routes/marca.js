const {Router}=require('express');
const marc=require('../modelos/marcas');

const cors=require('cors');

const router=Router();
router.use(cors());
//metodo POST
router.post('/', function(req,res){
    console.log(req.body);
    let marca=new marc();
    marca.nombre=req.body.nombre;
    marca.estado=req.body.estado;
    marca.fecha_creacion=new Date();
    marca.fecha_actualizacion=new Date();
    marca=marca.save();
    res.send(marca);
});

//metodo PUT
router.put('/:marcaId', async function(req,res){
    try{
        let marca= await marc.findById(req.params.marcaId);
        if (!marca){
            res.send('marca no existe');
        }
        
    console.log(req.body);
    marca.nombre=req.body.nombre;
    marca.estado=req.body.estado;
    marca.fecha_actualizacion=new Date();
    marca=marca.save();
    res.send(marca);}
    catch(error){
        console.log(error);
    }
});

//metodo GET
router.get('/', async function(req,res){
    try{
        const marquer=await marc.find();
        res.send(marquer);
    }
    catch(error){
        console.log(error);
        res.status(500).send('ocurrio un error en el servidor');
    }
});

module.exports=router;