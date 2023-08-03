const preg = [
    {
        pregunta: "¿En qué Mundial Maradona dijo, 'me cortaron las piernas'?"
    },

    {
        pregunta: "¿Cuántos goles hizo Diego Maradona en el mundial de México 86?"
    },

    {
        pregunta: "¿Quién es el máximo goleador de la historia del futbol?"
    },

    {
        pregunta: "Messi jugó toda su carrera profesional para el FC Barcelona, ¿pero en qué club dio sus primeros pasos?"
    },

    {
        pregunta: "¿Donde debutó Neymar Jr?"
    },

    {
        pregunta: "¿En que año nacio Cristiano Ronaldo?"
    },

    {
        pregunta: "¿Cuantos Balones de Oro tiene Lionel Messi?"
    },

    {
        pregunta: "¿Qué club tiene más títulos de la Champions League?"
    },

    {
        pregunta: "¿Quién es el máximo goleador de la historia de la Champions League?"
    },

    {
        pregunta: "¿En qué club jugó Cristiano Ronaldo antes de ir al Manchester United en su primera etapa (2003-2009)?"
    },
]

const opciones = [];

opciones.push(["España 82", "USA 94", "Italia 90", "México 86"]);
opciones.push([3, 4, 5, 6]);
opciones.push(["Cristiano Ronaldo", "Lionel Messi", "Pele", "Josef Bican"]);
opciones.push(["River", "Racing", "Newell's Old Boys", "Rosario Central"]);
opciones.push(["Inter", "Santos", "Barcelona", "PSG"]);
opciones.push([1985, 1990, 1987, 1986]);
opciones.push([4, 5, 6, 7]);
opciones.push(["Barcelona", "Milan", "Real Madrid", "Bayer Munich"]);
opciones.push(["Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappe", "Ronaldo Nazario"]);
opciones.push(["Real Madrid", "Juventus", "Sporting de Lisboa", "Benfica"]);

const correctas = [1, 2, 0, 2, 1, 0, 3, 2, 1, 2];

/*-------------------*/
/*PANTALLA DEL JUEGO*/
/*-----------------*/
let points = 0;
let pos = 0;
let ingresos = 0;
let flag = false;

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
    cargarPreguntas();
}

function cargarPreguntas() {

    if (preg.length <= pos) {
        pnts();
    } else {
        limiar();
        let pregunta = document.getElementById("preguntas");
        pregunta.innerHTML = preg[pos].pregunta;
        let opcionUno = document.getElementById("opcionUno");
        opcionUno.innerHTML = opciones[pos][0];
        let opcionDos = document.getElementById("opcionDos");
        opcionDos.innerText = opciones[pos][1];
        let opcionTres = document.getElementById("opcionTres");
        opcionTres.innerHTML = opciones[pos][2];
        let opcionCuatro = document.getElementById("opcionCuatro");
        opcionCuatro.innerHTML = opciones[pos][3];
    }
}

function limiar() {
    document.getElementById("opcionUno").className = "limpiado";
    document.getElementById("opcionDos").className = "limpiado";
    document.getElementById("opcionTres").className = "limpiado";
    document.getElementById("opcionCuatro").className = "limpiado";
}

function correctaONo(opcionElegida) {
    if (opcionElegida === correctas[pos]) {
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
                let comenzarJuego = document.getElementById("comenzarJuego");
                comenzarJuego.style.display = "none";
                let p = document.createElement("p");
                p.innerHTML = "Puntos totales: " + points;
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