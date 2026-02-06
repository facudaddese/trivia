/*-------------------*/
/*PANTALLA DEL JUEGO*/
/*-----------------*/
let points;
let ingresos = 0;
let rtaCorrecta;
let dataLength;
let data;

let jugar = document.getElementById("jugar");
jugar.addEventListener("click", juego);

function juego() {
    points = 0;
    ingresos++;
    localStorage.setItem("Ingresos", ingresos);
    jugar.style.display = "none";
    let comenzarJuego = document.getElementById("comenzarJuego");
    comenzarJuego.style.display = "block";
    let footer = document.getElementById("footer");
    footer.style.position = "static";

    fetch('./questions.json')
        .then(res => res.json())
        .then(fetchedData => {
            data = fetchedData;
            dataLength = data.length;
            cargarPreguntas(data, 0);
        })
        .catch(error => {
            console.log(error);
        });
}

function cargarPreguntas(data, currentPos) {
    if (currentPos >= dataLength) {
        juegoTerminado(); // Terminar el juego si ya pasamos todas las preguntas
    } else {
        limpiar(); // Limpiamos las respuestas anteriores

        const el = data[currentPos]; // Obtener la pregunta actual

        document.getElementById("preguntas").textContent = el.pregunta;
        rtaCorrecta = el.respuesta; // Asignar la respuesta correcta

        // Asignar las opciones a los botones
        document.getElementById("opcionUno").textContent = el.opcion1;
        document.getElementById("opcionDos").textContent = el.opcion2;
        document.getElementById("opcionTres").textContent = el.opcion3;
        document.getElementById("opcionCuatro").textContent = el.opcion4;

        // Eliminar event listeners anteriores
        const botones = ["opcionUno", "opcionDos", "opcionTres", "opcionCuatro"];
        botones.forEach(id => {
            const boton = document.getElementById(id);
            boton.replaceWith(boton.cloneNode(true)); // Remueve el event listener anterior
        });

        // Asignar nuevos event listeners
        document.getElementById("opcionUno").addEventListener("click", () => correctaONo(data, currentPos, 0));
        document.getElementById("opcionDos").addEventListener("click", () => correctaONo(data, currentPos, 1));
        document.getElementById("opcionTres").addEventListener("click", () => correctaONo(data, currentPos, 2));
        document.getElementById("opcionCuatro").addEventListener("click", () => correctaONo(data, currentPos, 3));
    }
}

function limpiar() {
    document.getElementById("opcionUno").className = "limpiado";
    document.getElementById("opcionDos").className = "limpiado";
    document.getElementById("opcionTres").className = "limpiado";
    document.getElementById("opcionCuatro").className = "limpiado";
}

function juegoOf() {
    let comenzarJuego = document.getElementById("comenzarJuego");
    comenzarJuego.style.display = "none";
    let p = document.createElement("p");
    p.innerHTML = "Puntos totales: " + points + "/" + dataLength;
    p = document.body.appendChild(p);
    p.classList = "pPuntos";
    let boton = document.createElement("button");
    boton.innerHTML = "Volver al inicio";
    boton.addEventListener("click", volver);
    boton = document.body.appendChild(boton);
    boton.classList = "pantallaFinal";
    let footer = document.getElementById("footer");
    footer.style.position = "absolute";

    function volver() {
        p.style.display = "none";
        boton.style.display = "none";
        jugar.style.display = "block";
        points = 0;
        sessionStorage.clear();
    }
}

function juegoTerminado() {
    swal({
        title: "Juego terminado!",
        text: `Tu puntaje final es: ${points} de ${dataLength}`, // Mostrar el puntaje final
        icon: "success",
        button: "Ver puntaje",
    })
        .then((willDelete) => {
            if (willDelete) {
                juegoOf(); // Mostrar pantalla final con el puntaje total
            }
        });
}

function correctaONo(data, currentPos, opcionElegida) {
    // Verificar si la opción elegida es la correcta
    if (opcionElegida === rtaCorrecta) {
        // Respuesta correcta, sumamos un punto
        points++;
        sessionStorage.setItem("Puntos", points); // Guardamos los puntos en sessionStorage

        // Actualizamos el botón correspondiente con clase de respuesta correcta
        switch (opcionElegida) {
            case 0: document.getElementById("opcionUno").className = "rtaCorrecta"; break;
            case 1: document.getElementById("opcionDos").className = "rtaCorrecta"; break;
            case 2: document.getElementById("opcionTres").className = "rtaCorrecta"; break;
            case 3: document.getElementById("opcionCuatro").className = "rtaCorrecta"; break;
        }
    } else {
        // Respuesta incorrecta, actualizamos el botón correspondiente con clase de respuesta incorrecta
        switch (opcionElegida) {
            case 0: document.getElementById("opcionUno").className = "rtaIncorrecta"; break;
            case 1: document.getElementById("opcionDos").className = "rtaIncorrecta"; break;
            case 2: document.getElementById("opcionTres").className = "rtaIncorrecta"; break;
            case 3: document.getElementById("opcionCuatro").className = "rtaIncorrecta"; break;
        }
    }

    // Actualizamos la posición para cargar la siguiente pregunta
    currentPos++;

    // Comprobamos si hay más preguntas, si no terminamos el juego
    if (currentPos < dataLength) {
        setTimeout(() => {
            cargarPreguntas(data, currentPos);
        }, 1000); // Esperamos 1 segundo antes de cargar la siguiente pregunta
    } else {
        setTimeout(() => {
            juegoTerminado();
        }, 1000); // Al terminar, mostramos el mensaje de fin de juego
    }
}

/*-----------------------------*/
/*PANTALLA DEL PUNTAJE - FINAL*/
/*---------------------------*/

let abandonar = document.getElementById("abandonar");
abandonar.addEventListener("click", pnts);

function pnts() {
    swal({
        title: "Estas seguro que quieres abandonar?",
        text: "Si abandonas no podrás seguir sumando puntos!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                juegoOf();

                swal("Juego terminado", {
                    icon: "error",
                });
            } else {
                swal("Sigues jugando!", {
                    icon: "success",
                });
            }
        });
}