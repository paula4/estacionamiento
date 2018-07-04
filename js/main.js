var miLista = []; //esta variable va a ser la lista siempre y se puede usar adentro de todas las funcones sin declararla ni pasarla como parametro porque esta un nivel mas arriba, o sea al mismo nivel que las funciones.
var montoAcumulado = 0;
var precio ={auto:30,moto:15,camioneta:45};
var espacios ={auto:10,moto:15,camioneta:6};

/** Carga los vehiculos que estan en la localStorage a la lista */

const loadStorage = () => {
  let miStorage = window.localStorage; //el storage en si
  let listaString = miStorage.getItem('vehiculos'); //los datos que traigo
  if(listaString)
    miLista = JSON.parse(listaString);//guardo los datos ya transformados a arreglo/objeto en la lista.
  let precioString = miStorage.getItem('precios');
  if(precioString)
    precio = JSON.parse(precioString);
  let espaciosString = miStorage.getItem('espacios');
  if(espaciosString)
    espacios = JSON.parse(espaciosString);
  let montoAcumuladoString = miStorage.getItem('acumulado');
  if(montoAcumuladoString)
    montoAcumulado = parseFloat(montoAcumuladoString);
}

const saveList = () => {
  let miStorage = window.localStorage;
  let listaString = JSON.stringify(miLista);
  miStorage.setItem('vehiculos',listaString);
}

const saveAmount = () => {
  let miStorage = window.localStorage;
  miStorage.setItem('acumulado',montoAcumulado);
}

const savePrices = () => {
  let miStorage = window.localStorage;
  let preciosString = JSON.stringify(precio);
  miStorage.setItem('precios',preciosString);
}

const saveEspacios = () => {
  let miStorage = window.localStorage;
  let espaciosString = JSON.stringify(espacios);
  miStorage.setItem('espacios',espaciosString);
}

function Vehiculo(patente,tipo) {
  this.patente = patente;
  this.tipo = tipo;
  this.ingreso = new Date();
}
const setPrice = (tipo,precio) => {
  precio[tipo] = precio;
  savePrices();
}
/** Agrega un vehiculo a la lista */
const addVehicle = (patente,tipo) => {
  let miVehiculo = new Vehiculo();
  miVehiculo.patente = patente;
  miVehiculo.tipo = tipo;
  miVehiculo.ingreso = new Date();
  let canAdd = true;
  for (var vehiculo in miLista) {
    if (miLista[vehiculo].patente == patente) {
      canAdd = false;
      break;
    }
  }
  if(canAdd){
    if(!miLista) miLista = [];
    miLista.push(miVehiculo);
    saveList();
  }
}

/** Quita un vehiculo de la lista y suma la cantidad total */
const exitVehicle = (dominio) => {
  for (var vehiculo in miLista) {
    if (miLista.hasOwnProperty(vehiculo) && miLista[vehiculo].patente == dominio) {
      let toDelete = miLista[vehiculo];
      let timeDiff =  (new Date().getTime() - new Date(toDelete.ingreso).getTime()) / 1000 / 60 / 60; //in hours
      montoAcumulado =  isNaN(montoAcumulado) ? 0 : montoAcumulado + precio[miLista[vehiculo].tipo] * timeDiff;
      delete miLista[vehiculo];
      miLista = miLista.filter((e)=>{ return e !== false});
      saveList();
      saveAmount();
      break;
    }
  }
}
/** Quita un vehiculo de la lista*/
const removeVehicle = (dominio) => {
  for (var vehiculo in miLista) {
    if (miLista.hasOwnProperty(vehiculo) && miLista[vehiculo].patente == dominio) {
      delete miLista[vehiculo];
      miLista = miLista.filter((e)=>{ return e !== false});
      saveList();
      break;
    }
  }
}

/** Elimina todos los vehiculos cargados hasta el momento. */
const deleteAll = () => {
  miLista = [];
  saveList();
}

const toggleMenu = ()=> {
  var element = document.querySelector(".menu-popup");
  element.classList.toggle("show");
}

const getCountByType = (tipo) => {
  if(miLista){
    let listaTipo = miLista.filter((e)=>{ return e.tipo === tipo});
    return listaTipo.length;
  }
  else return 0;
}
const reset = () =>{
  localStorage.clear();
  miLista = []; //esta variable va a ser la lista siempre y se puede usar adentro de todas las funcones sin declararla ni pasarla como parametro porque esta un nivel mas arriba, o sea al mismo nivel que las funciones.
  montoAcumulado = 0;
  precio ={auto:30,moto:15,camioneta:45};
  espacios ={auto:10,moto:15,camioneta:6};
  saveList();
  saveAmount();
  savePrices();
  saveEspacios();
  window.location.replace("/");
}


//-----------------------------------------//

loadStorage();




const divMoto = document.querySelector(".contador.moto");
const contadorMoto = document.querySelector(".numero.moto");
const divAuto = document.querySelector(".contador.auto");
const contadorAuto = document.querySelector(".numero.auto");
const divCamioneta = document.querySelector(".contador.camioneta");
const contadorCamioneta = document.querySelector(".numero.camioneta");
let motoCount = getCountByType('moto');
let autoCount = getCountByType('auto');
let camionetaCount = getCountByType('camioneta');

contadorMoto.innerHTML = motoCount+'/'+espacios.moto;
contadorAuto.innerHTML = autoCount+'/'+espacios.auto;
contadorCamioneta.innerHTML = camionetaCount+'/'+espacios.camioneta;

divAuto.classList.add((autoCount <= espacios.auto / 3) ? "bg-green" : (autoCount <= (espacios.auto / 3)*2 ) ? "bg-orange" : "bg-red")
divMoto.classList.add((motoCount <= espacios.moto / 3) ? "bg-green" : (motoCount <= (espacios.moto / 3)*2 ) ? "bg-orange" : "bg-red")
divCamioneta.classList.add((camionetaCount <= espacios.camioneta / 3) ? "bg-green" : (camionetaCount <= (espacios.camioneta / 3)*2 ) ? "bg-orange" : "bg-red")

const contadorAcumulado = document.querySelector(".acumulado");
if(contadorAcumulado){
  contadorAcumulado.innerHTML =   isNaN(montoAcumulado) ? 0 : montoAcumulado.toFixed(2);
}
