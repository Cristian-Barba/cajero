document.addEventListener("DOMContentLoaded", function () {
  let FehcaRetiro, FechaDeposito, retiro, deposito, monto;
  FehcaRetiro = new Date(sessionStorage.getItem("FechaRetiro"));
  FechaDeposito = new Date(sessionStorage.getItem("FechaDeposito"));
  retiro = Number(sessionStorage.getItem("MontoRetirado"));
  deposito = Number(sessionStorage.getItem("MontoDeposito"));
  monto = sessionStorage.getItem("Monto");
  const [month, day, year] = [
    FehcaRetiro.getMonth() + 1,
    FehcaRetiro.getDate(),
    FehcaRetiro.getFullYear(),
  ];
  const [hour, minutes, seconds] = [
    FehcaRetiro.getHours(),
    FehcaRetiro.getMinutes(),
    FehcaRetiro.getSeconds(),
  ];
  const [month2, day2, year2] = [
    FechaDeposito.getMonth() + 1,
    FechaDeposito.getDate(),
    FechaDeposito.getFullYear(),
  ];
  const [hour2, minutes2, seconds2] = [
    FechaDeposito.getHours(),
    FechaDeposito.getMinutes(),
    FechaDeposito.getSeconds(),
  ];

  if (monto > 0 && deposito > 0 && retiro === 0) {
    if (hour > 0 && hour < 12) {
      document.getElementById("deposito").innerText =
        `${day2}-${month2}-${year2} - ${hour2}:${minutes2} AM`;
    } else {
      document.getElementById("deposito").innerText =
        `${day2}-${month2}-${year2} - ${hour2}:${minutes2} PM`;
    }

    document.getElementById("B").innerText = `$ ${deposito}`;

    document.getElementById("retiro").innerText = "Sin movimientos";
    document.getElementById("A").innerText = `$ 0.00`;
  } else if (monto > 0 && retiro > 0) {
    if (hour > 0 && hour < 12) {
      document.getElementById("deposito").innerText =
        `${day2}-${month2}-${year2} - ${hour2}:${minutes2} AM`;
    } else {
      document.getElementById("deposito").innerText =
        `${day2}-${month2}-${year2} - ${hour2}:${minutes2} PM`;
    }
    if (hour > 0 && hour < 12) {
      document.getElementById("retiro").innerText =
        `${day}-${month}-${year} - ${hour}:${minutes} AM`;
    } else {
      document.getElementById("retiro").innerText =
        `${day}-${month}-${year} - ${hour}:${minutes} PM`;
    }

    document.getElementById("A").innerText = `$ ${retiro}`;
    document.getElementById("B").innerText = `$ ${deposito}`;
  } else {
    document.getElementById("retiro").innerText = "Sin movimientos";
    document.getElementById("deposito").innerText = "Sin movimientos";

    document.getElementById("A").innerText = `$ 0.00`;
    document.getElementById("B").innerText = `$ 0.00`;
  }
});
