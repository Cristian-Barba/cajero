document.addEventListener("DOMContentLoaded", function () {
  //   document.getElementById("saldoActual").innerText =
  //     sessionStorage.getItem("Monto");
  let fecha, noTarjeta, monto;
  fecha = new Date();
  const [month, day, year] = [
    fecha.getMonth() + 1,
    fecha.getDate(),
    fecha.getFullYear(),
  ];
  const [hour, minutes, seconds] = [
    fecha.getHours(),
    fecha.getMinutes(),
    fecha.getSeconds(),
  ];
  noTarjeta = sessionStorage.getItem("NoTarjeta");
  monto = sessionStorage.getItem("Monto");
  document.getElementById("reciboFecha").innerText = `${day}/${month}/${year}`;
  document.getElementById("reciboHora").innerText = `${hour}:${minutes}`;
  document.getElementById("reciboTarjeta").innerText = noTarjeta;
  if (monto > 0) {
    document.getElementById("reciboSaldo").innerText = `$${monto}`;
  } else {
    document.getElementById("saldoActual").innerText = "0.00";
  }
});
