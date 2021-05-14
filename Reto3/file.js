/*****************************************************
Reto 3, array a matriz cuadrada con funciones
*****************************************************/

function Calcular(){
    var stringArray = document.getElementById("array-string").value;    //lee el valor del input
    var array = stringArray.split(','); //se transforma en array
    var matriz = [];
    var cuadradoArray = Math.sqrt(array.length);
    if(Number.isInteger(cuadradoArray)){
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
            diagonalIzquierda += parseInt(element[izquierda]);
            izquierda++;
            //derecha
            diagonalDerecha += parseInt(element[derecha]);
            derecha--;
        });
        document.write(`La matriz ${matriz}`);
        document.write(`<br>La suma de la diagonal izquierda es ${diagonalIzquierda}`);
        document.write(`<br>La suma de la diagonal derecha es ${diagonalDerecha}`);
        //sacar la diferiencia positiva
        var diferencia = diagonalIzquierda - diagonalDerecha;
        diferencia = (diferencia < 0) ? diferencia * (-1) : diferencia;
        document.write(`<br>La diferencia entre la diagonal izquierda y derecha es de ${diferencia}`);
    }
    else{
        alert("No es posible crear una matriz con base a los datos ingresados");
        clear();
    }
}

function clear(){
    document.getElementById("array-string").value="";
}