'use strict'

//Se importa el array con objetos de la clase GastoCombustible
import {GASTOS_DB} from '../data/gasto.data.js';

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
  }
}

function procesarGasto(jsonNuevoGasto){

}

export { almacenarGastos };