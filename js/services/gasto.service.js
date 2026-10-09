'use strict'

//Se importa el array con objetos de la clase GastoCombustible
import {GASTOS_DB, GastoCombustible} from '../data/gasto.data.js';

var gastoAnual = {
  2020 : 0,
  2019 : 0,
  2018 : 0,
  2017 : 0,
  2016 : 0,
  2015 : 0
};

function almacenarGastos() {

  //Recorremos el array
  for (let i = 0; i < GASTOS_DB.length; i++) {
    //Extraemos el id primero y despues el valor(hay que parsearlo a cadena)
    let id = GASTOS_DB[i].id;
    let value = JSON.stringify(GASTOS_DB[i]);

    //Almacenamos los registros en localStorage
    localStorage.setItem(id, value);
    
    //Extraemos el año de la fecha
    let anio = GASTOS_DB[i].date.getFullYear();

    //Añadimos el gastoanual al año al que hacen referencia
    gastoAnual[anio] += GASTOS_DB[i].precioViaje;

    //Almacenamos los gatos anuales en el sessionStorage, necesitamos un bucle
    for (let anio in gastoAnual) {
      //Almacenamos la variable año como id y la variablegastoAnual como valor
      sessionStorage.setItem(anio, gastoAnual[anio]);
    } 
  }
}

function procesarGasto(jsonNuevoGasto){
  
  //Transformamos lo recibo en un objeto JSON
  const NuevoGastoParseado = JSON.parse(jsonNuevoGasto);

  //Utilizamos la clase GastoCombustible que ahora hemos importado para crear los diferentes objetos que recibiremos
  let gasto = new GastoCombustible(
    NuevoGastoParseado.id,
    NuevoGastoParseado.vehicleType,
    new Date(NuevoGastoParseado.date),
    NuevoGastoParseado.kilometres,
    NuevoGastoParseado.precioViaje
  );
  
  //Extraemos el año del gasto como anteriormente
  let aniogasto = gasto.date.getFullYear();

  //Obtenemos el gasto del sessionStorage y lo guardamos en una variable, hay que transformarla en un número
  let gastoAnio = Number(sessionStorage.getItem(aniogasto));

  //Le sumamos a esa variable el valor del viaje recibido
  gastoAnio += Number(gasto.precioViaje);

  //Actualizamos el valor del gastoAnual en el sessionStorage
  sessionStorage.setItem(aniogasto, gastoAnio);
}

const GastoService = {almacenarGastos, procesarGasto};

export { GastoService };