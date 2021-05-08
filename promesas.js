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

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`No existe un salario para el Empleado con ID : ${id}`);
    });
};

const id = 10;
let nombre;
getEmpleado(id)
.then(empleado=> {
    nombre=empleado;
    return getSalario(id)
})
.then(salario => console.log('El emplado:', nombre, 'Tiene un salario de: ', salario))
.catch(err => console.log(err));

// getEmpleado(id)
// .then(empleado=> getSalario(id))
// .then(salario=> console.log(salario))
// .catch();