/*-------------------*/
/*PANTALLA DEL JUEGO*/
/*-----------------*/
let points = 0;
let pos = 0;
let ingresos = 0;
let rtaCorrecta;

let jugar = document.getElementById("jugar");
jugar.addEventListener("click", juego);

function juego() {
    ingresos++;
    localStorage.setItem("Ingresos", ingresos);
    pos = 0;
    jugar.style.display = "none";
    let comenzarJuego = document.getElementById("comenzarJuego");
    comenzarJuego.style.display = "block";
    let footer = document.getElementById("footer");
    footer.style.position = "static";

    fetch('./questions.json')
        .then(res => res.json())
        .then(data => cargarPreguntas(data))
        .catch(error => { console.log(error); })
}

function cargarPreguntas(data) {
    if (data.length <= pos) {
        juegoTerminado();
    } else {
        limpiar();

        // for (let i = 0; i < data.length; i++) {

        //     document.getElementById("preguntas").textContent = data[i].pregunta;
        //     rtaCorrecta = data[i].respuesta;
        //     document.getElementById("opcionUno").textContent = data[i].opcion1;
        //     rtaCorrecta = data[i].respuesta;
        //     document.getElementById("opcionDos").textContent = data[i].opcion2;
        //     rtaCorrecta = data[i].respuesta;
        //     document.getElementById("opcionTres").textContent = data[i].opcion3;
        //     rtaCorrecta = data[i].respuesta;
        //     document.getElementById("opcionCuatro").textContent = data[i].opcion4;
        //     rtaCorrecta = data[i].respuesta;
        // }

        let i = 0;

        let preguntas = document.getElementById("preguntas");
        preguntas.innerHTML = data[i].pregunta;
        rtaCorrecta = data[i].respuesta;

        let opcionUno = document.getElementById("opcionUno");
        opcionUno.innerHTML = data[i].opcion1;
        rtaCorrecta = data[i].respuesta;

        let opcionDos = document.getElementById("opcionDos");
        opcionDos.innerHTML = data[i].opcion2;
        rtaCorrecta = data[i].respuesta;

        let opcionTres = document.getElementById("opcionTres");
        opcionTres.innerHTML = data[i].opcion3;
        rtaCorrecta = data[i].respuesta;

        let opcionCuatro = document.getElementById("opcionCuatro");
        opcionCuatro.innerHTML = data[i].opcion4;
        rtaCorrecta = data[i].respuesta;

        i++;
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
    p.innerHTML = "Puntos totales: " + points + "/16";
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
        icon: "success",
        button: "Ver puntaje",
    })
        .then((willDelete) => {
            if (willDelete) {
                juegoOf();
            }
        });
}

function correctaONo(opcionElegida) {
    if (opcionElegida === rtaCorrecta) {
        switch (opcionElegida) {
            case 0: document.getElementById("opcionUno").className = "rtaCorrecta";
                points++;
                sessionStorage.setItem("Puntos", points);
                break;
            case 1: document.getElementById("opcionDos").className = "rtaCorrecta";
                points++;
                sessionStorage.setItem("Puntos", points);
                break;
            case 2: document.getElementById("opcionTres").className = "rtaCorrecta";
                points++;
                sessionStorage.setItem("Puntos", points);
                break;
            case 3: document.getElementById("opcionCuatro").className = "rtaCorrecta";
                points++;
                sessionStorage.setItem("Puntos", points);
                break;
        }
    } else {
        switch (opcionElegida) {
            case 0: document.getElementById("opcionUno").className = "rtaIncorrecta";
                break;
            case 1: document.getElementById("opcionDos").className = "rtaIncorrecta";
                break;
            case 2: document.getElementById("opcionTres").className = "rtaIncorrecta";
                break;
            case 3: document.getElementById("opcionCuatro").className = "rtaIncorrecta";
                break;
        }
    }

    pos++;
    setTimeout(cargarPreguntas, 1000);
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
