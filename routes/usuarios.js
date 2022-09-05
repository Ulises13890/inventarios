const {Router}=require('express');
const users=require('../modelos/usuarios');


const cors=require('cors');

const router=Router();
router.use(cors());
//metodo POST
router.post('/', function(req,res){
    console.log(req.body);
    let usuario=new users();
    usuario.nombre=req.body.nombre;
    usuario.email=req.body.email;
    usuario.estado=req.body.estado;
    usuario.fecha_creacion=new Date();
    usuario.fecha_actualizacion=new Date();
    usuario=usuario.save();
    res.send(usuario);
});

//metodo PUT
router.put('/:usuarioId', async function(req,res){
    try{
        let usuario= await users.findById(req.params.usuarioId);
        if (!usuario){
            res.send('usuario no existe');
        }
        
    console.log(req.body);
    usuario.nombre=req.body.nombre;
    usuario.email=req.body.email;
    usuario.estado=req.body.estado;
    usuario.fecha_actualizacion=new Date();
    usuario=usuario.save();
    res.send(usuario);}
    catch(error){
        console.log(error);
    }
});
//metodo GET
router.get('/', async function(req,res){
    try{
        const user=await users.find();
        res.send(user);
    }
    catch(error){
        console.log(error);
        res.status(500).send('ocurrio un error en el servidor');
    }
});

module.exports=router;