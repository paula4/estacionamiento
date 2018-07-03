/** Carga los vehiculos que estan en la localStorage a la lista */
const loadVehicles = (list) => {
  let miStorage = window.localStorage; //el storage en si
  let datosString = miStorage.getItem('vehiculos'); //los datos que traigo
  let datos = JSON.parse(datosString);
  list = datos;//guardo los datos ya transformados a arreglo/objeto en la lista.
}

var unVehiculoCualquiera = {
  brand:'Fiat',
  model:'palio',
  patentita:'abc-123'
};

/** Agrega un vehiculo a la lista */
const addVehicle = (marca,tipo,patente,modelo) => {
 let miVehiculo = new Vehiculo();
  miLista.push(vehicle);

}

/** Crea un node del DOM para agregar el vehiculo a la lista */
const createVehicleNode = model => {

}

const onVehicleTap = (e) => {

}

/** Quita un vehiculo de la lista */
const removeVehicle = (dominio) => {

}

/** Valida si el modelo que toma por parámetro pertenece a algún modelo de los fabricantes */
const isValidModel = model => {

}

/** Elimina todos los vehiculos cargados hasta el momento. */
const deleteAll = () => {

}

/**
 * Maneja el evento cuando el array de vehiculos fue cambiado.
 * En algún futuro se podrá usar Array.observe pero aun es es7 https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/observe
 */
const onVehiclesChange = () => {

}

/** Guardar el arreglo de vehiculos en la localStorage del navegador. */
const saveInLocalStorage = () => {
  localStorage.setItem('vehicles', JSON.stringify(vehiclesArray));
}

/** Maneja el evento del boton generar reporte */
const onReportButtonClicked = () => {

}

/** Popula una lista con los resultados */
const populateListResult = (list, results) => {

}

/** Crea la matriz para hacer los calculos de vehiculos por fabricante y tipo. */
const buildMatrix = () => {

}

/** Genera los datos necesarios para el reporte*/
const generateReportData = vehicles => {

}

/** Obtiene las catidades por fabricante, tipo y modelo de la matriz. */
const extractReportDataFromMatrix = (matrix) => {



}

/** */
const renderReport = () => {

}

/** */
const closeReport = () => {

}

function Vehiculo(marca,tipo,patente,modelo) {
  this.marca = marca;
  this.tipo = tipo;
  this.patente = patente;
  this.modelo= modelo;
}
var miLista = []; //esta variable va a ser la lista siempre y se puede usar adentro de todas las funcones sin declararla ni pasarla como parametro porque esta un nivel mas arriba, o sea al mismo nivel que las funciones.
const brands = ['Fiat', 'Renault', 'Chevrolet', 'Ford', 'VW'];
// models
const modelsFiat = [['palio', 'uno', 'linea', 'argo'], [], ['fiorino'], ['toro']];
const modelsRenault = [['megane', 'kiwi', 'zandero'], ['koleos', 'duster'], ['kangoo', 'master'], ['oroch']];
const modelsChevrolet = [['cruze', 'corsa'], ['tracker'], [], ['s-10']];
const modelsFord = [['fiesta', 'focus'], [], ['transit'], ['ranger']];
const modelsVW = [['ka', 'gol', 'vento', 'passat', 'bora'], [], [], ['amarok']];

const reportDOM = document.querySelector('.report');
const loadVehiclesDOM = document.querySelector('.load-vehicles');

// recupero los vehiculos de la local storage
let vehiclesArray = localStorage.getItem('motosIngresadas') ? JSON.parse(localStorage.getItem('motosIngresadas')) : [];
loadVehicles(vehiclesArray);
