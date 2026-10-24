function depositar() {
  window.location.href = "depositar.html";
}

function reitrar() {
  window.location.href = "retirar.html";
}

function consulta() {
  window.location.href = "consultaSaldo.html";
}

function movimientos() {
  window.location.href = "movimientos.html";
}

document.addEventListener("DOMContentLoaded", function () {
  let usuario = sessionStorage.getItem("user");
  document.getElementById("nombreUsuarioCajero").innerText = usuario;
});
