let puntos = 0;
let intentos = 4;
let rtaC = true;
let rtaL = true;
let rtaN = true;
let rtaF = true;

alert("Bienvenido a las trivias de Futbol. Empecemos a sumar puntos!");
alert("Intentos: " + intentos);
alert("Puntos: " + puntos);

const correcto = () => alert("Correcto!!!");
const incorrecto = () => alert("Incorrecto :(");
const acumulados = (puntosAcumulados) => alert(puntosAcumulados);
const chances = (numeroIntentos) => numeroIntentos;

const arrayObjetos = [
    {
        nombre: "cristiano ronaldo",
        pais: "portugal",
        apodo: "cr7",
        dorsal: 7
    },
    {
        nombre: "lionel",
        pais: "argentina",
        apodo: "pulga",
        dorsal: 10
    },
    {
        nombre: "neymar jr",
        pais: "brasil",
        apodo: "ney",
        dorsal: 10
    }
];

while (intentos > 0 && intentos <= 4) {

    if (intentos >= 1) {

        if (rtaC) {

            let cr7 = prompt("Cual es el apodo caracteristico de Cristiano Ronaldo?");

            if (cr7 === arrayObjetos[0].apodo) {
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

            if (arrayObjetos.some((item) => (item.nombre === lionel))) {
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

            let brasil = prompt("En que pais nacio Neymar Jr?");

            if (arrayObjetos.some((item) => (item.pais === brasil))) {
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

    if (intentos >= 1) { //corregir

        if (rtaF) {

            let año = prompt("En que año nacio Cristiano Ronaldo?");
            let nac = 1985;

            if (getFullYear() == año) {
                puntos++;
                correcto();
                rtaF = false;
            } else {
                incorrecto();
                intentos--;
                alert(chances("Te queda/n intento/s: " + intentos));
            }
        }
    }

    if (rtaC == false && rtaL == false && rtaN == false && rtaF == false) {
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