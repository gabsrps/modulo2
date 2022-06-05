
function conta() {
    
var v0 = document. getElementById('v0').value;
const g = 10;

var hmax = (v0*v0)/(2*g)
var temposubida  = v0/g;
document.getElementById('resultado').innerHTML = "tempo de subida = " + temposubida + "s";
document.getElementById('resultado').innerHTML += "<br>aultura máxima = " + hmax + "m";
}