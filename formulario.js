

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM cargado!!");

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  var entradaForm = document.getElementById("entrada-form");
  var resumenEntrada = document.getElementById("resumenEntrada");
  var cantidadForm = document.getElementById("cantidad-form");

  box_dashed.style.display = "none";

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);
    var cedula = document.querySelector("#cedula").value;

    if (nombre.trim() == '' || apellidos.trim() == '' || isNaN(edad) || cedula.trim() == '') {
      alert("Por favor, complete todos los campos correctamente.");
      return false;
    }

    box_dashed.style.display = "block";
    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");
    var p_cedula = document.querySelector("#p_cedula span");
    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;
    p_cedula.innerHTML = cedula;

      entradaForm.style.display = "block";
    
  });

  document.getElementById("confirmarEntrada").addEventListener('click', function () {
    var entradaSeleccionada = document.getElementById("entrada").value;
    var cantidadEntrada = document.getElementById("cantidad").value;

    switch (entradaSeleccionada) {
      case '1':
        mostrarEntrada("Lavadora ($350)", cantidadEntrada, 20);
        break;
      case '2':
        mostrarEntrada("Refrigeradora ($400)", cantidadEntrada, 35);
        break;
      case '3':
        mostrarEntrada("Cocina ($72.99)", cantidadEntrada, 49.99);
        break;
      case '4':
        mostrarEntrada("Televisor 50 pulgadas ($420)", cantidadEntrada, 65);
        break;
      case '5':
        mostrarEntrada("Microondas ($85.00)", cantidadEntrada, 85);
        break;
      default:
        alert("Por favor, selecciona una entrada válida.");
        break;
    }
  });

  function mostrarEntrada(entrada, cantidad, precio) {
    var p_entradaSeleccionada = document.getElementById("p_entradaSeleccionada").querySelector("span");
    var p_cantidadEntrada = document.getElementById("p_cantidadEntrada").querySelector("span");
    var p_totalCosto = document.getElementById("p_totalCosto").querySelector("span");

    p_entradaSeleccionada.innerHTML = entrada;
    p_cantidadEntrada.innerHTML = cantidad;
    var totalCosto = cantidad * precio;
    p_totalCosto.innerHTML = totalCosto.toFixed(2);
    resumenEntrada.style.display = "block";
    cantidadForm.style.display = "block";
  }

  document.getElementById("calcularTotal").addEventListener('click', function () {
    var cantidadTotal = document.getElementById("cantidadTotal").value;
    var costoPorEntrada = document.getElementById("p_totalCosto").querySelector("span").innerHTML;
    var costoTotal = cantidadTotal * parseFloat(costoPorEntrada);

    var resumenCantidadTotal = document.getElementById("resumenCantidadTotal").querySelector("span");
    var resumenCostoTotal = document.getElementById("resumenCostoTotal").querySelector("span");

    resumenCantidadTotal.innerHTML = cantidadTotal;
    resumenCostoTotal.innerHTML = costoTotal.toFixed(2);

    cantidadForm.style.display = "none";
    resumenCantidadTotal.parentElement.style.display = "block";
  });

});
