"use strict";

var pagos = [];
var usuarios = [];
var listado = document.getElementById("list-group");
var cuadroResultado = document.getElementById("total");
var usuario = document.getElementById("nombre");
var pago = document.getElementById("pago");

function dividirGastos() {
  agregarGastosAListas();
  ultimoAPantalla();
  mostrarPagoIndividualEnHTML();
}

function agregarGastosAListas() {
  if (usuario.value == '') {
    swal({
      title: "¡Faltan datos!",
      text: "Falta ingresar el nombre de la persona.",
      button: "Ingresar dato",
      icon: "warning"
    });
    usuario.focus();
  } else if (pago.value == '') {
    swal({
      title: "¡Faltan datos!",
      text: 'Falta ingresar el gasto realizado por ' + usuario.value,
      button: "Ingresar dato",
      icon: "warning"
    });
    pago.focus();
  } else {
    usuarios.push(usuario.value);
    pagos.push(pago.value);
  }
}

function ultimoAPantalla() {
  var li = document.createElement("li");
  var text = document.createTextNode("".concat(usuario.value, ": Pag\xF3 $").concat(pago.value));
  li.classList.add("list-group-item");
  li.appendChild(text);
  listado.appendChild(li);
}

function sumarValores() {
  var suma = 0;

  for (var _i = 0, _pagos = pagos; _i < _pagos.length; _i++) {
    var cadaPago = _pagos[_i];
    suma += parseInt(cadaPago);
  }

  return suma;
}

function mostrarPagoIndividualEnHTML() {
  var total = sumarValores(pagos);
  var aporteIndividual = total / usuarios.length;
  cuadroResultado.innerText = "Total: $".concat(total, "\n                                A cada uno le toca aportar: $").concat(aporteIndividual.toFixed(2));
}