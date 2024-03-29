// Definir la contraseña deseada
var contrasenaGuardada = "1023";

do {
    // Solicitar al usuario que ingrese la contraseña
    var passwordUsuario = prompt("Por favor, ingrese la contraseña:");

    // Verificar si la contraseña ingresada es correcta
    if (passwordUsuario === contrasenaGuardada) {
        alert("Contraseña correcta. Puedes continuar con el programa.");
        break; // Salir del bucle cuando la contraseña es correcta
    } else {
        alert("Contraseña incorrecta. Vuelve a intentar.");
    }
} while (true); // El bucle se repetirá hasta que la contraseña sea correcta

// Contadores inicializados a 0
var contadores = Array.from({ length: 38 }, () => 0);

// Variable para almacenar el número de iteraciones obtenido del primer input
var numeroDeIteraciones;
// Array para almacenar las marcas de tiempo
var marcasDeTiempo = new Array(38); // 38 es el número de casos (de 0 a 37)
// Variable para realizar un seguimiento del número actual de iteraciones en el bucle
var contadorIteraciones = 0;
var c = 0; // Contador general inicializado en 0

function sendData() {
  var userInput = document.getElementById('userInput').value;
  if (/^\d+$/.test(userInput) && parseInt(userInput) > 0) {
    numeroDeIteraciones = parseInt(userInput);
    document.getElementById('NumeroDeDatos').style.display = 'none';
    contadorIteraciones = 0;  // Reiniciar el contador al enviar nuevos datos
  } else {
    alert("Por favor, ingrese un número entero positivo mayor que cero.");
  }
}

function sendNumero() {
  // Validar que el usuario haya ingresado el número de iteraciones
  if (numeroDeIteraciones === undefined) {
    alert("Por favor, ingrese primero el número de iteraciones.");
    return;
  }

  var numeroInput = document.getElementById('numeroInput').value;
  if (/^\d+$/.test(numeroInput) && parseInt(numeroInput) >= 0 && parseInt(numeroInput) <= 37) {
    console.log("Número válido ingresado:", numeroInput);

    var index = parseInt(numeroInput);
    history(index);
    console.log("Realizar acciones para el caso " + index + ".");
    contadores[index]++;
    c++;
    mostrarContadorEnDOM(c); // Mostrar el contador actualizado en el DOM

    // Verificar condiciones específicas para cada caso
    if (contadores[index] > 1 && contadores[index] < 3) {
      var currentTime = marcasDeTiempo[index];
      marcasDeTiempo[index] = currentTime;
      setTimeout(imprimirEnTextarea, 500);
    } else if (contadores[index] >=3) {
      contadores[index] = 1; // Reiniciar a 1 si es mayor o igual a 3
      borrarDelTextarea(index); // Llamar a la función para borrar del textarea
    }
   
    contadorIteraciones++;
   
    marcasDeTiempo[index] = contadorIteraciones;

    if (contadorIteraciones === numeroDeIteraciones) {
      contadorIteraciones = 0;
      document.getElementById('NumeroDeDatos').style.display = 'block';
    }
  } else {
    alert("Por favor, ingrese un número entre 0 y 37.");
  }

  // Resto del código...
  clearNumero();
}

function imprimirEnTextarea() {
  var resultadoTextarea = document.getElementById('output');
  if (resultadoTextarea) {
    resultadoTextarea.value = '';

    for (var i = 0; i <= 37; i++) {
      var contador = contadores[i];
      if (contador > 1 && contador < 3) {
        resultadoTextarea.value += "N " + i + " || " + "MT " + marcasDeTiempo[i] + "\n";
      }
    }
  }
}

function clearDataDiv1() {
  document.getElementById('userInput').value = '';
}

function closeWindow() {
  document.getElementById('NumeroDeDatos').style.display = 'none';
  document.getElementById('EntradaNumero').style.display = 'none';
}

function clearNumero() {
  var numeroInput = document.getElementById('numeroInput');
  if (numeroInput) {
    numeroInput.value = '';
    numeroInput.focus();
  }
}

function borrarDelTextarea(index) {
  // Función para borrar del textarea
  var resultadoTextarea = document.getElementById('output');
  if (resultadoTextarea) {
    resultadoTextarea.value = resultadoTextarea.value.replace("N " + index + " || " + "MT " + marcasDeTiempo[index] + "\n", "");
  }
}


var historyArray = []; // Declarar el array fuera de la función para que pueda ser accedido por ambas funciones

function history(index) {
  // No necesitas declarar un array dentro de esta función
  historyArray.unshift(index); // Agrega el elemento index al principio del array
  mostrarHistoricoEnDOM(); // Llamar a la función para actualizar la visualización en el DOM
}

function mostrarHistoricoEnDOM() {
  var historicoDiv = document.getElementById("historico");
  if (historicoDiv) {
    // Limpiamos el contenido del div antes de mostrar el historial
    historicoDiv.innerHTML = "";

    // Creamos un texto que contenga los elementos del array separados por el carácter personalizado
    var textoHistorico = "[" + historyArray.join("|") + "]";

    // Creamos un elemento de texto para mostrar el historial con el formato deseado
    var texto = document.createTextNode(textoHistorico);

    // Añadimos el texto al div historico
    historicoDiv.appendChild(texto);
  } else {
    console.error("No se encontró el elemento con el ID 'historico'");
  }
}

function mostrarContadorEnDOM(contador) {
  var registroDiv = document.getElementById("registro");
  if (registroDiv) {
    // Actualizamos el contenido del div con el contador
    registroDiv.textContent = "Cont: " + contador;
  } else {
    console.error("No se encontró el elemento con el ID 'registro'");
  }
}


