document.addEventListener("DOMContentLoaded", function () {
  let monto;
  monto = sessionStorage.getItem("Monto");
  if (monto > 0) {
    document.getElementById("saldoActual").innerText =
      sessionStorage.getItem("Monto");
  } else {
    document.getElementById("saldoActual").innerText = "0.00";
  }
});

function recibo() {
  window.location.href = "recibo.html";
}
