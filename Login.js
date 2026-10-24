/*Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
Consultar saldo
Ingresar monto
Retirar Monto
Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.*/

// Funciones de movimiento

// function depositar() {
//   window.location.href = "depositar.html";
// }

// function reitrar() {
//   window.location.href = "retirar.html";
// }

// function consulta() {
//   window.location.href = "consultaSaldo.html";
// }

// function movimientos() {
//   window.location.href = "movimientos.html";
// }
function alert(cuenta) {
  if (event) event.preventDefault();
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert theme-secondary" role="alert">`,
    `   <p>Tu numero de cuenta es: ${cuenta}, favor de guardarlo</p>`,
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
    `   <p>Numero de cuenta y/o contraseña incorrectos</p>`,
    '   <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertPlaceholder.append(wrapper);
}

function validacion() {
  if (event) event.preventDefault();
  let cuenta, pin, validacion1, validacion2;
  cuenta = document.getElementById("loginCuenta").value;
  pin = document.getElementById("loginPin").value;
  validacion1 = sessionStorage.getItem("NoTarjeta");
  validacion2 = sessionStorage.getItem("password");
  if (validacion1 === cuenta && pin === validacion2) {
    window.location.href = "MenuPrincipal.html";
  } else {
    alert2();
  }
}

// Funciones de logica del codigo

// document.addEventListener("DOMContentLoaded", function () {
//   if (event) event.preventDefault();
//   let propiedades;
//   propiedades = document.querySelectorAll("100");
//   console.log(propiedades);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("saldoActual").innerText =
//     sessionStorage.getItem("Monto");
// });

// function deposito() {
//   let dinero, acumulador;
//   acumulador = Number(sessionStorage.getItem("Monto"));
//   dinero = Number(document.getElementById("montoDeposito").value);
//   acumulador += dinero;
//   sessionStorage.setItem("Monto", acumulador);
// }

function numeroAleatorio() {
  let numeroAleatorio,
    cuenta = "";
  for (let i = 0; i < 16; i++) {
    numeroAleatorio = Math.floor(Math.random() * 10);
    cuenta += numeroAleatorio;
  }
  return cuenta;
}

function loguear() {
  if (event) event.preventDefault();
  let usuario, contraseña, numeroTarjeta, monto;
  usuario = document.getElementById("nombre").value;
  contraseña = document.getElementById("pin").value;
  numeroTarjeta = numeroAleatorio();
  monto = "";
  alert(numeroTarjeta);

  sessionStorage.setItem("user", usuario);
  sessionStorage.setItem("password", contraseña);
  sessionStorage.setItem("NoTarjeta", numeroTarjeta);
  sessionStorage.setItem("Monto", monto);

  //   let payload = {
  //     user: usuario,
  //     pin: contraseña,
  //     numeroDeCuenta: numeroTarjeta,
  //   };

  //   users.push(payload);
}
