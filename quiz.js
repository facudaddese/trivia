/*-------------------*/
/*PANTALLA DEL JUEGO*/
/*-----------------*/
let points;
let ingresos = 0;
let rtaCorrecta;
let data;
let dataLength;

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
        .then(data => {
            dataLength = data.length;
            cargarPreguntas(data, 0);
        })
        .catch(error => { console.log(error); })
}

function cargarPreguntas(data, currentPos) {
    if (dataLength <= currentPos) {
        juegoTerminado();
    } else {
        limpiar();

        const el = data[currentPos];

        document.getElementById("preguntas").textContent = el.pregunta;
        rtaCorrecta = el.respuesta;

        let btn1 = document.getElementById("opcionUno");
        let btn2 = document.getElementById("opcionDos");
        let btn3 = document.getElementById("opcionTres");
        let btn4 = document.getElementById("opcionCuatro");

        btn1.textContent = el.opcion1;
        btn2.textContent = el.opcion2;
        btn3.textContent = el.opcion3;
        btn4.textContent = el.opcion4;

        btn1.addEventListener("click", () => correctaONo(data, currentPos, 0));
        btn2.addEventListener("click", () => correctaONo(data, currentPos, 1));
        btn3.addEventListener("click", () => correctaONo(data, currentPos, 2));
        btn4.addEventListener("click", () => correctaONo(data, currentPos, 3));
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

function correctaONo(data, currentPos, opcionElegida) {
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

    currentPos++;
    setTimeout(() => {
        cargarPreguntas(data, currentPos);
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
