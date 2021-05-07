/*****************************************************
Reto 2, array a matriz cuadrada
*****************************************************/

var array = [19, 5, 7, 2, 27, 10, 0, 0, 1, 5];
var matriz = [];

var cuadradoArray = Math.sqrt(array.length);

if (Number.isInteger(cuadradoArray)) {
    var aux = new Array();  //array auxiliar para guardar los "rgistros" del la matriz
    array.forEach((element, index) => {  //recorro el array
        if (aux.length < cuadradoArray) {//reviso si el numero de elemento en el aux es menor al permitido por la matriz
            aux.push(element);
        }
        if (aux.length == cuadradoArray) {//si ya es la cantidad correcta lo agrego y reinicio
            matriz.push(aux);
            aux = new Array();
        }
    });
    var izquierda = 0;
    var diagonalIzquierda = 0;
    var derecha = matriz.length - 1;
    var diagonalDerecha = 0;

    //recorrer la matriz y sumar las diagonales
    matriz.forEach(element => {
        //izquierda
        diagonalIzquierda += element[izquierda];
        izquierda++;
        //derecha
        diagonalDerecha += element[derecha];
        derecha--;
    });
    console.log(`La suma de la diagonal izquierda es ${diagonalIzquierda}`);
    console.log(`La suma de la diagonal derecha es ${diagonalDerecha}`);
    //sacar la diferiencia positiva
    var diferencia = diagonalIzquierda - diagonalDerecha;
    diferencia = (diferencia < 0) ? diferencia * (-1) : diferencia;
    console.log(`La diferencia entre la diagonal izquierda y derecha es de ${diferencia}`);
}
else
    console.log("No es posible hacer una matriz cuadrada");