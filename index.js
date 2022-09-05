const express=require('express');
const {getConnection}=require('./db/db-connection-mongo');
const marcas=require('./modelos/marcas');

const ipoEquipo=require('./modelos/tipos_equipo');
const usuarios=require('./modelos/usuarios');

const app=express();
//conectar a la base de datos
getConnection();

//leer json
app.use(express.json());

//enrutar inventario a http://localhost:3000/inventario/
const inventario=require('./routes/inventario');
app.use('/inventario',inventario);

//enrutar estado de equipos a http://localhost:3000/estado/
const est=require('./routes/estadoEquipos');
app.use('/estado',est);

//enrutar usuarios a http://localhost:3000/usuario/
const user=require('./routes/usuarios');
app.use('/usuario',user);

//enrutar usuarios a http://localhost:3000/marca/
const marc=require('./routes/marca');
app.use('/marca',marc);

//enrutar usuarios a http://localhost:3000/tipo/
const typer=require('./routes/tipoEquipo');
app.use('/tipo',typer);

app.listen(3000,function(){
    console.log('aplicacion corriendo en el puerto 3000');
});