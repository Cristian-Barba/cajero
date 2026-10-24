function deposito() {
  let dinero, acumulador, fecha;
  acumulador = Number(sessionStorage.getItem("Monto"));
  dinero = Number(document.getElementById("montoDeposito").value);
  acumulador += dinero;
  fecha = new Date();
  sessionStorage.setItem("Monto", acumulador);
  sessionStorage.setItem("FechaDeposito", fecha);
  sessionStorage.setItem("MontoDeposito", dinero);
}
