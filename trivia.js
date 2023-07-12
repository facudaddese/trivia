/*let puntos = 0;
let intentos = 3;
let rtaC = true;
let rtaL = true;
let rtaN = true;

alert("Bienvenido a las trivias de Futbol. Empecemos a sumar puntos!");
alert("Intentos: " + intentos);
alert("Puntos: " + puntos);

const correcto = () => alert("Correcto!!!");
const incorrecto = () => alert("Incorrecto :(");
const acumulados = (puntosAcumulados) => alert(puntosAcumulados);
const chances = (numeroIntentos) => numeroIntentos;

while (intentos > 0 && intentos <= 3) {

    if (intentos >= 1) {

        if (rtaC) {

            let cr = prompt("Cual es el apodo caracteristico de Cristiano Ronaldo?");

            if (cr == "Cr7" || cr == "CR7" || cr == "cr7") {
                puntos++;
                correcto();
                rtaC = false;
            } else {
                incorrecto();
                intentos--;
                alert(chances("Te queda/n intento/s: " + intentos));
            }
        }
    }

    if (intentos >= 1) {

        if (rtaL) {

            let lionel = prompt("Cual es el nombre de pila de Messi?");

            if (lionel == "Lionel" || lionel == "LIONEL" || lionel == "lionel") {
                puntos++;
                correcto();
                rtaL = false;
            } else {
                incorrecto();
                intentos--;
                alert(chances("Te queda/n intento/s: " + intentos));
            }
        }
    }

    if (intentos >= 1) {

        if (rtaN) {

            let ney = prompt("En que pais nacio Neymar Jr?");

            if (ney == "Brasil" || ney == "BRASIL" || ney == "brasil") {
                puntos++;
                correcto();
                rtaN = false;
            } else {
                incorrecto();
                intentos--;
                alert(chances("Te queda/n intento/s: " + intentos));
            }
        }
    }

    if (rtaC == false && rtaL == false && rtaN == false) {
        intentos = 0;
    }
}

if (intentos == 0) {
    alert("Se acabaron los intentos");
}

switch (puntos) {
    case 0: alert("Intentalo mejor la proxima");
        acumulados("Puntos acumulados: " + puntos);
        break;
    case 1: alert("Podrias hacerlo mejor :)");
        acumulados("Puntos acumulados: " + puntos);
        break
    case 2: alert("Muy bien!");
        acumulados("Puntos acumulados: " + puntos);
        break;
    case 3: alert("Excelente!!!");
        acumulados("Puntos acumulados: " + puntos);
        break;
}*/

class Jugadores {
    constructor(nombreJ, nacionalidad, apodo, dorsal) {
        this.nombreJ = nombreJ;
        this.nacionalidad = nacionalidad;
        this.apodo = apodo;
        this.dorsal = dorsal;
    }
}

class CulturaGeneral {
    constructor(nombre, fecha) {
        this.nombre = nombre;
        this.fecha = fecha;
    }
}

let cr = new Jugadores("cristiano ronaldo", "portugues", "cr7", 7);
let messi = new Jugadores("lionel messi", "argentino", "pulga", 10);
let ney = new Jugadores("neymar jr", "brasilero", "ney", 10);

let guerraMundial = new CulturaGeneral("primera guerra mundial", 1914)
let muroBerlin = new CulturaGeneral("berlin", 1989);
let titanic = new CulturaGeneral("titanic", 1912);

const array = [Jugadores, CulturaGeneral];