// let fecha = new Date("11/16/2024");
// let msFecha = fecha.getTime();

// let parrafoDias = document.querySelector("#dias");
// let parrafoHoras = document.querySelector("#horas");
// let parrafoMinutos = document.querySelector("#minutos");
// let parrafoSegundos = document.querySelector("#segundos");
// let spanFecha = document.querySelector("#fecha");

// spanFecha.innerText = fecha.toLocaleDateString();

// setInterval(() => {
//    let hoy = new Date().getTime();

//    let distancia = msFecha - hoy;

//    let msPorDia = 1000 * 60 * 60 * 24;
//    let msPorHora = 1000 * 60 * 60;
//    let msPorMinuto = 1000 * 60;
//    let msPorSegundo = 1000;

//    let dias = Math.floor(distancia / msPorDia);
//    let horas = Math.floor(distancia % msPorDia) / msPorHora;
//    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
//    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

//    parrafoDias.innerText = dias;
//    parrafoHoras.innerText = horas;
//    parrafoMinutos.innerText = minutos;
//    parrafoSegundos.innerText = segundos;
// }, 1000);

// Fecha objetivo: 18 de enero de 2025
let fecha = new Date(2025, 0, 18); // Meses en JavaScript van de 0 a 11, enero es 0.
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras");

// Mostrar la fecha objetivo en formato local
spanFecha.innerText = fecha.toLocaleDateString();

// Actualización del temporizador
let intervalo = setInterval(() => {
   let hoy = new Date().getTime(); // Obtener el tiempo actual en milisegundos

   let distancia = msFecha - hoy; // Diferencia entre la fecha objetivo y la actual

   // Constantes para calcular días, horas, minutos y segundos
   let msPorDia = 1000 * 60 * 60 * 24;
   let msPorHora = 1000 * 60 * 60;
   let msPorMinuto = 1000 * 60;
   let msPorSegundo = 1000;

   // Cálculos para obtener días, horas, minutos y segundos restantes
   let dias = Math.floor(distancia / msPorDia); // Solo días completos
   let horas = Math.floor((distancia % msPorDia) / msPorHora); // Restante del día
   let minutos = Math.floor((distancia % msPorHora) / msPorMinuto); // Restante de la hora
   let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo); // Restante del minuto

   // Actualizar los elementos HTML con los valores calculados
   parrafoDias.innerText = dias >= 0 ? dias : "00";
   parrafoHoras.innerText = horas >= 0 ? (horas < 10 ? "0" + horas : horas) : "00";
   parrafoMinutos.innerText =
      minutos >= 0 ? (minutos < 10 ? "0" + minutos : minutos) : "00";
   parrafoSegundos.innerText =
      segundos >= 0 ? (segundos < 10 ? "0" + segundos : segundos) : "00";

   // Detener el intervalo cuando se alcanza la fecha objetivo
   if (distancia < 0) {
      clearInterval(intervalo);
      cuentaAtras.innerHTML = "<p class='grande'>¡Ya llegamos!</p>";
   }
}, 1000);
