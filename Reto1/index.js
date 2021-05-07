const mario = {
    peso : 95,
    estatura : 1.88,
    IMC : 0 
}

const luigi = {
    peso : 85,
    estatura : 1.76,
    IMC : 0 
}

marioMayorIMC = false;

mario.IMC = mario.peso / (mario.estatura * mario.estatura);
document.write("<h3>IMC de Mario = " + mario.IMC.toFixed(2) + "</h3>");
luigi.IMC = luigi.peso / (luigi.estatura * luigi.estatura);
document.write("<h3>IMC de Luigi = " + luigi.IMC.toFixed(2) + "</h3>");

marioMayorIMC = (mario.IMC > luigi.IMC) ? true : false;

(marioMayorIMC) ? document.write("<h1>Mario tiene mayor IMC</h1>") : document.write("<h1>Luigi tiene mayor IMC</h1>");