const preg = [

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
        pregunta: "¿En qué club jugaba Cristiano Ronaldo antes de ir al Manchester United?"
    },
]

const opciones = [];

opciones.push(["Cristiano Ronaldo", "Lionel Messi", "Pele", "Josef Bican"]);
opciones.push(["River", "Racing", "Newell's Old Boys", "Rosario Central"]);
opciones.push(["Inter", "Santos", "Barcelona", "PSG"]);
opciones.push([1985, 1990, 1987, 1986]);
opciones.push([4, 5, 6, 7]);
opciones.push(["Barcelona", "Milan", "Real Madrid", "Bayer Munich"]);
opciones.push(["Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappe", "Ronaldo Nazario"]);
opciones.push(["Real Madrid", "Juventus", "Sporting de Lisboa", "Benfica"]);

const correctas = [0, 2, 1, 0, 3, 2, 1, 2];

/*-------------------*/
/*PANTALLA DEL JUEGO*/
/*-----------------*/
let points = 0;
let intentos = 1;
let pos = 0;

let jugar = document.getElementById("jugar");
jugar.addEventListener("click", juego);


function juego() {
    pos = 0;
    intentos = 0;
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
                break;
            case 1: document.getElementById("opcionDos").className = "rtaCorrecta";
                points++;
                break;
            case 2: document.getElementById("opcionTres").className = "rtaCorrecta";
                points++;
                break;
            case 3: document.getElementById("opcionCuatro").className = "rtaCorrecta";
                points++;
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

let puntaje = document.getElementById("puntaje");
puntaje.addEventListener("click", pnts);

function pnts() {
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
        jugar.classList = "pantallaPrincipal";
        points = 0;
    }
}