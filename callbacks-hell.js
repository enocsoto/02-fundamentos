const empleados = [
    {
    id: 1,
    nombre: 'Enoc'
    },
    {
    id: 2,
    nombre: 'Fran'
    },
    {
    id: 3,
    nombre: 'Bettsy'
    }
];

const salarios = [
    {
    id: 1,
    salario: 1000
    },
    {
    id: 2,
    salario: 1500
    }
];

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find(e => e.id ===id);
    if(empleado) callback(null, empleado);
    else callback(`Empleado con id ${id} no existe`);
}

const getSalario = (id,sala)=>{
    const salario=salarios.find(s => s.id ===id)?.salario;
    if (salario) sala(null, salario);
    else sala(`El Salario del Empleado con  id ${id} no existe`);
}

const id=3;
getEmpleado(id, (err, empleado)=>{
    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
    getSalario(id, (err,sala)=>{
        if (err) {
            return console.log(err);
        }
        console.log('El empleado:', empleado.nombre, 'tiene un salario de ', sala);
    }); 
    
});





