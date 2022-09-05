const {Router}=require('express');
const typer=require('../modelos/tipos_equipo');


const cors=require('cors');

const router=Router();
router.use(cors());
//metodo POST
router.post('/', function(req,res){
    console.log(req.body);
    let tipo=new typer();
    tipo.nombre=req.body.nombre;
    tipo.estado=req.body.estado;
    tipo.fecha_creacion=new Date();
    tipo.fecha_actualizacion=new Date();
    tipo=tipo.save();
    res.send(tipo);
});

//metodo PUT
router.put('/:tipoId', async function(req,res){
    try{
        let tipo= await typer.findById(req.params.tipoId);
        if (!tipo){
            res.send('tipo de equipo no existe');
        }
        
    console.log(req.body);
    tipo.nombre=req.body.nombre;
    tipo.estado=req.body.estado;
    tipo.fecha_actualizacion=new Date();
    tipo=tipo.save();
    res.send(tipo);}
    catch(error){
        console.log(error);
    }
});

//metodo GET
router.get('/', async function(req,res){
    try{
        const tip=await typer.find();
        res.send(tip);
    }
    catch(error){
        console.log(error);
        res.status(500).send('ocurrio un error en el servidor');
    }
});

module.exports=router;