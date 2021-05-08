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

const getEmpleado = () => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });
};

const getSalario = () => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`No existe un salario para el Empleado con ID : ${id}`);
    });
};

const getInfoUsuario=async(id)=>{
  try {
      const empleado = await getEmpleado(id); 
      const salario = await getSalario(id); 
      return `El salario del Empleado ${empleado} es de : ${salario} `;
      
  } catch (error) {
      throw error;
}
}
const id=3;

getInfoUsuario()
.then(msg=> console.log(msg))
.catch(err=>console.log(err));