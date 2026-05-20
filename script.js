// Función para hacer scroll suave hacia cada sección al pulsar los botones del menú
function scrollToSection(idSeccion) {
    const elemento = document.getElementById(idSeccion);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para evaluar los Quizzes individuales
function checkQuiz(categoria, valorCorrecto) {
    // Buscamos la opción seleccionada usando el nombre del grupo de radio buttons
    const opciones = document.getElementsByName('q-' + categoria);
    let respuestaUsuario = null;

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            respuestaUsuario = opciones[i].value;
            break;
        }
    }

    // Elemento de texto donde se mostrará el resultado del quiz
    const resultadoDiv = document.getElementById('res-' + categoria);

    // Validar si el usuario seleccionó algo
    if (!respuestaUsuario) {
        resultadoDiv.innerHTML = "⚠️ Por favor, selecciona una opción antes de enviar.";
        resultadoDiv.className = "result";
        return;
    }

    // Validar si es correcto o incorrecto
    if (respuestaUsuario === valorCorrecto) {
        resultadoDiv.innerHTML = "🎉 ¡Correcto! Has leído con atención la noticia.";
        resultadoDiv.className = "result correct";
    } else {
        resultadoDiv.innerHTML = "❌ Incorrecto. Vuelve a revisar la información del artículo.";
        resultadoDiv.className = "result incorrect";
    }
}
