/*Modelo de datos, creamos la clase y la exportamos para que pueda ser utilizada en otros módulos*/

'use strict'

class GastoCombustible {
    constructor(id, vehicleType, date, kilometers, precioViaje) {
        this.id = id;
        this.vehicleType = vehicleType;
        this.date = date;
        this.kilometers = kilometers;
        this.precioViaje = precioViaje;
    }
}

export default GastoCombustible;