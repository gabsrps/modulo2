
function conta(){
    
    let valor1 = parseInt(document.getElementById("number1").value);
    
    let valor2 = parseInt(document.getElementById("number2").value);
    
    let operator = document.getElementById("op").value;
    
    var result = Calculo(valor1, valor2, operator);

    document.getElementById("resultado").innerHTML = result;


}

function Calculo(x, y, op){
    let result;
    result = eval(x + op + y) 
    return result;
};
   
    
