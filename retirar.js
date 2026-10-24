// document.addEventListener("DOMContentLoaded", function () {
//   if (event) event.preventDefault();
//   let propiedades;
//   // Nota personal, para mostrar las propiedades que tiene por ejemplo una etiqueta button necesito poner lo que esta abajo y dentro de los parentesis la etiqueta que quiero revisar
//   propiedades = document.querySelectorAll("button");
//   console.log(propiedades);
//   let opciones = [];
//   document.getElementById;
// });

function quitarMontoRapido() {
  let radios = document.querySelectorAll("input[name = montoRapido]");
  radios.forEach((radio) => {
    radio.checked = false;
  });
}

function alert() {
  if (event) event.preventDefault();
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert theme-secondary" role="alert">`,
    `   <p>Favor de ingresar una cantidad valida</p>`,
    '   <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertPlaceholder.append(wrapper);
}

function alert2() {
  if (event) event.preventDefault();
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert theme-secondary" role="alert">`,
    `   <p>Saldo insuficiente, favor de ingresar una cantidad valida</p>`,
    '   <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertPlaceholder.append(wrapper);
  document.getElementById("montoRetiro").value = "";
}

function retiro() {
  let monto, manual, radios, boton, fecha;
  boton = 0;
  radios = document.querySelectorAll("input[name = montoRapido]");
  monto = Number(sessionStorage.getItem("Monto"));
  manual = Number(document.getElementById("montoRetiro").value);
  radios.forEach((radio) => {
    if (radio.checked == true) boton = Number(radio.value);
  });

  if (boton > 0 && boton <= monto) {
    monto -= boton;
    sessionStorage.setItem("Monto", monto);
    fecha = new Date();
    sessionStorage.setItem("FechaRetiro", fecha);
    sessionStorage.setItem("MontoRetirado", boton);
  } else if (manual > 0 && manual <= monto) {
    monto -= manual;
    sessionStorage.setItem("Monto", monto);
    fecha = new Date();
    sessionStorage.setItem("FechaRetiro", fecha);
    sessionStorage.setItem("MontoRetirado", manual);
  } else if (manual > monto || boton > monto) {
    alert2();
  } else {
    alert();
  }
}
