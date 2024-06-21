
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



function calcularCalorias() {
    var genero = document.getElementById('genero').value;
    var edad = parseInt(document.getElementById('edad').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseInt(document.getElementById('altura').value);
    var nivel_act = parseFloat(document.getElementById('nivel_act').value);

    if (isNaN(edad) || edad < 10 || edad > 110) {
        alert('Por favor, ingresa una edad válida entre 10 y 110 años.');
        return;
      }
      
    if (isNaN(peso) || peso < 30 || peso > 250) {
        alert('Por favor, ingresa un peso válido entre 30 y 250 kg.');
        return;
      }
      
    if (isNaN(altura) || altura < 100 || altura > 230) {
        alert('Por favor, ingresa una altura válida entre 100 y 230 cm.');
        return;
      }
    
    var bmr = 0;
    if (genero === 'masculino') {
      bmr = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
    } else if (genero === 'femenino') {
      bmr = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
    }
    
    var calorias = Math.round(bmr * nivel_act);
    
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = 'Tus necesidades calóricas diarias son aproximadamente ' + calorias + ' calorías.';
  }
  




