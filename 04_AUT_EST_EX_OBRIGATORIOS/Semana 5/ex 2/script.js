
function trocarValor(){
    var aux = document.getElementById("1").value;
    document.getElementById("1").value = document.getElementById("2").value;
    document.getElementById("2").value = aux;
    
}