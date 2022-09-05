const mongoose= require('mongoose');
const getConnection=async()=>{
    try{
    await mongoose.connect('mongodb://Udeilor:admin@ac-jmggglq-shard-00-00.dsqovze.mongodb.net:27017,ac-jmggglq-shard-00-01.dsqovze.mongodb.net:27017,ac-jmggglq-shard-00-02.dsqovze.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-pzkbv9-shard-0&authSource=admin&retryWrites=true&w=majority');
    console.log('estoy conectado');
}catch(error){
    console.log(error);
    console.log('fallo la conexion a la base de datos');
}
}
module.exports={getConnection}