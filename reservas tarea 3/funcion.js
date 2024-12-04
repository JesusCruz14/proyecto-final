//Funcion de reserva
function reserva(nombre, fecha){
    const nuevaReserva = {
        nombre,
        fecha,
        estado: `reservado`
    };
    reserva.push(nuevaReserva);
    console.log(`Dame la reserva de ${nombre} para la ${fecha}`)
}



//Funcion para asignar una reserva
function asignar(Idreservas, Recursos){
    const reserva = reserva.find(r=>r.Id == Idreservas);
    if (reserva){
        reserva.estado = 'asignado';
        reserva.Recursos = Recursos;
        console.log(`Reserva ${Idreservas} asignado al recurso ${Recursos}`);
    }
    else{
        console.error("Mejor Reinicia vida")
    }

}
// Funcion de liberacion de una reserva
function liberar(Idreservas){
    const index = reserva.findIndex(r=>r.Id == Idreservas);
    if (index !== -1){
        reserva.splice(index, 1);
        console.log(`reserva ${Idreservas} librardo`);        
    }
    else{
        console.error("La reserva no se encontro");   
    }
}
reserva(`David`, `19/09/2000`,);
reserva(`Jesus aspiricueta`,"11/11/2011");
asignar(1,"cuarto 104");
liberar(1,);
