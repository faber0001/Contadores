// Contadores inicializados a 0
var c0 = 0, c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0, c8 = 0, c9 = 0;
var c10 = 0, c11 = 0, c12 = 0, c13 = 0, c14 = 0, c15 = 0, c16 = 0, c17 = 0, c18 = 0, c19 = 0;
var c20 = 0, c21 = 0, c22 = 0, c23 = 0, c24 = 0, c25 = 0, c26 = 0, c27 = 0, c28 = 0, c29 = 0;
var c30 = 0, c31 = 0, c32 = 0, c33 = 0, c34 = 0, c35 = 0, c36 = 0, c37 = 0;

// Variable para almacenar el número de iteraciones obtenido del primer input
var numeroDeIteraciones;

// Variable para realizar un seguimiento del número actual de iteraciones en el bucle
var contadorIteraciones = 0;

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

    // Realizar acciones adicionales según el número ingresado
    var index = parseInt(numeroInput);
    switch (index) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
        console.log("Realizar acciones para el caso " + index + ".");
        window['c' + index]++;
        
        // Verificar si el contador es mayor o igual a 4 para reiniciar
        if (window['c' + index] >= 4) {
          window['c' + index] = 0;
        }

        // Incrementar el contador de iteraciones
        contadorIteraciones++;

        // Verificar si hemos alcanzado el número deseado de iteraciones
        if (contadorIteraciones === numeroDeIteraciones) {
          // Reiniciar el contador y mostrar nuevamente el div1 al alcanzar el límite de iteraciones
          contadorIteraciones = 0;
          document.getElementById('NumeroDeDatos').style.display = 'block';
        }

        // Verificar si el contador está entre 2 y 4 (inclusive) para imprimir en el textarea
        if (contadorIteraciones > 2 && contadorIteraciones <= 4) {
          // Agregar un retardo de 500 milisegundos (0.5 segundos) antes de imprimir en el textarea
          setTimeout(imprimirEnTextarea, 500);
        }
        break;
      default:
        // Puedes agregar acciones predeterminadas aquí
        break;
    }
  } else {
    alert("Por favor, ingrese un número entre 0 y 37.");
  }

  // Verificar si el contador está entre 2 y 4 (inclusive) para imprimir en el textarea
  if (contadorIteraciones > 2 && contadorIteraciones <= 4) {
    // Agregar un retardo de 500 milisegundos (0.5 segundos) antes de imprimir en el textarea
    setTimeout(imprimirEnTextarea, 500);
  } else if (contadorIteraciones > 4) {
    // Si el contador es mayor que 4, limpiar textarea inmediatamente
    imprimirEnTextarea();
  }
}

// Resto del código

function imprimirEnTextarea() {
    var resultadoTextarea = document.getElementById('output');
    if (resultadoTextarea) {
      // Limpiar el contenido actual del textarea
      resultadoTextarea.value = '';
  
      // Iterar sobre todos los contadores
      for (var i = 0; i <= 37; i++) {
        var contador = window['c' + i];
        // Verificar las condiciones para imprimir en el textarea
        if (contador > 2 && contador <= 4) {
          resultadoTextarea.value += "C" + i + ": " + contador + "\n";
        }
      }
    }
}
  
// ... (código anterior)

// Resto del código

function clearDataDiv1() {
    // Limpiar el contenido del input en el Div1
    document.getElementById('userInput').value = '';
}

function closeWindow() {
    // Ocultar el Div2 al cerrar la ventana
    document.getElementById('EntradaNumero').style.display = 'none';
}

// ... (código posterior)
function clearNumero() {
    document.getElementById('numeroInput').value = '';
}

function closeWindow() {
    // Ocultar ambos divs al hacer clic en el botón CLOSE
    document.getElementById('NumeroDeDatos').style.display = 'none';
    document.getElementById('EntradaNumero').style.display = 'none';
}

