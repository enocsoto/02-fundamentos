// setTimeout(() => {
//     console.log('hola mundo');
// }, 1000);

const getUsuarioById = (id, patito)=>{
const usuario={
id,
nombre: 'Enoc'
};

setTimeout(() => {
   patito(usuario);
}, 1500);
};

getUsuarioById(10, (patito)=>{

    console.log(patito.id);
    console.log(patito.nombre.toUpperCase());
    //console.log('hola mundo');
});