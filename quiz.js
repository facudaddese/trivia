/*-------------------*/
/*PANTALLA DEL JUEGO*/
/*-----------------*/
let points = 0;
let pos = 0;
let ingresos = 0;
let rtaCorrecta;
let data;
let dataLength;
let preg = [];
let opc = [];

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
        .then(data => {
            for (let i = 0; i < data.length; i++) { //guardo individualmente cada pregunta
                preg[i] = data[i].pregunta;
            }
            dataLength = data.length;
            cargarPreguntas(data)
        })
        .catch(error => { console.log(error); })
}

function cargarPreguntas(data) {
    //verifico si las preguntas se guardaron correctamente
    //for (let i = 0; i < data.length; i++) { console.log(preg[i]); }
    //console.log(data);
    if (dataLength <= pos) {
        juegoTerminado();
    } else {
        limpiar();

        data.forEach(el => {
            document.getElementById("preguntas").textContent = el.pregunta;
            rtaCorrecta = el.respuesta;
            document.getElementById("opcionUno").textContent = el.opcion1;
            rtaCorrecta = el.respuesta;
            document.getElementById("opcionDos").textContent = el.opcion2;
            rtaCorrecta = el.respuesta;
            document.getElementById("opcionTres").textContent = el.opcion3;
            rtaCorrecta = el.respuesta;
            document.getElementById("opcionCuatro").textContent = el.opcion4;
            rtaCorrecta = el.respuesta;
        });


        // let preguntas = document.getElementById("preguntas");
        // preguntas.innerHTML = data[pos].pregunta;
        // rtaCorrecta = data[pos].respuesta;

        // let opcionUno = document.getElementById("opcionUno");
        // opcionUno.innerHTML = data[pos].opcion1;
        // rtaCorrecta = data[pos].respuesta;

        // let opcionDos = document.getElementById("opcionDos");
        // opcionDos.innerHTML = data[pos].opcion2;
        // rtaCorrecta = data[pos].respuesta;

        // let opcionTres = document.getElementById("opcionTres");
        // opcionTres.innerHTML = data[pos].opcion3;
        // rtaCorrecta = data[pos].respuesta;

        // let opcionCuatro = document.getElementById("opcionCuatro");
        // opcionCuatro.innerHTML = data[pos].opcion4;
        // rtaCorrecta = data[pos].respuesta;
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
    setTimeout(() => {
        cargarPreguntas(data)
    }, 1000);
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
