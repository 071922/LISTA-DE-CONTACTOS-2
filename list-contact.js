let NameList = [
    
    {
        "id": "1102322432",
        "Nombre": "Maximiliano",
        "Apellido": "Valencia",
        "Telefono": 3226066359,
        "Ubicación": {"Ciudad": "Monteria", "Dirección": "Cra 18 52-12"}
    },
    
    {
        "id": "1112324567",
        "Nombre": "Melek",
        "Apellido": "Valencia",
        "Telefono": 3127981116,
        "Ubicación": {"Ciudad": "Monteria", "Dirección": "Cra 18 52-12"}
    },

    {
        "id": "1073975342",
        "Nombre": "Juan",
        "Apellido": "Guerra",
        "Telefono": 3142359803,
        "Ubicación": {"Ciudad": "Medellín", "Dirección": "Av 33 74e 19"}
    },
];

console.log(NameList)

const AgregarContacto = (id,nombre,apellido,telefono,ciudad,direccion) => {

    let NewContact = {
    
        id: id,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        ubicacion: {ciudad:ciudad,direccion:direccion}
    
    }
    
    console.log(NewContact);
    NameList.push(NewContact);
    return console.log(NameList);
    
    }
    
    AgregarContacto("1032456765","Camila","Salamanca",3245647799,"Medellín","Calle 32 54-33");
    
    
    const EliminarContacto = NameList.filter(eliminar => eliminar.Nombre === 'Juan')

     console.log(EliminarContacto)
    

    const EditarContacto = (id,nombre,apellido,telefono,ciudad,direccion) => {

        let NewContact = {
        
            id: id,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            ubicacion: {ciudad:ciudad,direccion:direccion}
        
        }
        
        console.log(NewContact);
        NameList.push(NewContact);
        return console.log(NameList);
        
        }
        
        EditarContacto("1032456765","Camila","Salamanca",3245647799,"Medellín","cra 25 45-15");