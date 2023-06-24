let puntos = 0;
let intentos = 3;
let rtaC = true;
let rtaL = true;
let rtaN = true;

alert("Bienvenido a las trivias de Futbol. Empecemos a sumar puntos!");
alert("Intentos: " + intentos);
alert("Puntos: " + puntos);

function correcto() { alert("Correcto!!!"); } //funcion sin parametros
function incorrecto() { alert("Incorrecto :("); } //funcion sin parametros
function acumulados(puntosAcumulados) { alert(puntosAcumulados); } //funcion con parametros
function chances(numeroIntentos) { return numeroIntentos; } //funcion con return

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
}