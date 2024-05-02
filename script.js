
let btnCalcular=document.getElementById("btnCalcular")
btnCalcular.addEventListener("click",clickcalcular)

function clickcalcular(){
    
    let txtestatura=document.getElementById("estatura")
    let txtpeso=document.getElementById("peso") 
    let estatura=txtestatura.value
    let peso=txtpeso.value
    if (isNaN(estatura) || isNaN(peso)) {
        alert("Por favor, ingrese valores válidos.")}
    else{
        let imc=peso/(estatura*estatura)
        alert( "Su IMC es: " + Math.round(imc));}
}




