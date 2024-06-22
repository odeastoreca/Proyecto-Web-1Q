
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


// Contador calorias
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
  
  
// Generador de rutinas

  
function generarRutina() {
    const rutinas = {
        1: "Día 1: Entrenamiento de cuerpo completo Ejercicios: Sentadillas, Press de banca, Peso muerto",
        2: "Día 1: Parte superior del cuerpo Ejercicios: Press de banca, Dominadas, Fondos Día 2 : Parte inferior del cuerpo Ejercicios: Sentadillas, Peso muerto, Estocadas",
        3: "Día 1: Pecho y espalda Ejercicios: Press de banca, Remo con barra, Pull-ups Día 2: Piernas Ejercicios: Sentadillas, Peso muerto, Extensiones de pierna Día 3: Brazos y hombros Ejercicios: Curl de bíceps, Press militar, Elevaciones laterales",
        4: "Dia 1: Pecho Ejercicios: Press de banca, Banco inclinado con mancuernas, Pectolera Día 2: Espalda Ejercicios: Remo con barra, Jalon al pecho, Pullover Día 3: Piernas Ejercicios: Sentadilla con barra, Peso muerto, Extension de cuadriceps Día 4: Zona media y cardio Ejercicios: Plancha, Crunches, Espinales, 20 mins de cinta",
        5: "Dia 1: Piernas anterior Ejercicios: Sentadilla con barra, Sentadilla búlgara, Extension de cuadriceps Día 2: Pecho Ejercicios: Press de banca, Banco inclinado con mancuernas, Pectolera Día 3: Espalda Ejercicios: Remo con barra, Jalon al pecho Día 4: Piernas posterior Ejercicios: Peso muerto, Balanza unilateral, Maquina isquios, Gemelos Dia 5:Zona media y cardio Ejercicios: Plancha, Crunches, Espinales, 20 mins de cinta",
        6: "Dia 1: Piernas anterior Ejercicios: Sentadilla con barra, Sentadilla búlgara, Extension de cuadriceps Día 2: Pecho Ejercicios: Press de banca, Banco inclinado con mancuernas, Pectolera Día 3: Espalda Ejercicios: Remo con barra, Jalon al pecho Día 4: Piernas posterior Ejercicios: Peso muerto, Balanza unilateral, Maquina isquios, Gemelos Dia 5:Zona media y cardio Ejercicios: Plancha, Crunches, Espinales, 20 mins de cinta Día 6: Brazos Ejercicios: Biceps martillo, Triceps en polea, Biceps en banco scott, Press francés",
        7:"Dia 1: Piernas anterior Ejercicios: Sentadilla con barra, Sentadilla búlgara, Extension de cuadriceps Día 2: Pecho Ejercicios: Press de banca, Banco inclinado con mancuernas, Pectolera Día 3: Espalda Ejercicios: Remo con barra, Jalon al pecho Día 4: Piernas posterior Ejercicios: Peso muerto, Balanza unilateral, Maquina isquios, Gemelos Dia 5:Zona media y cardio Ejercicios: Plancha, Crunches, Espinales, 20 mins de cinta Día 6: Brazos Ejercicios: Biceps martillo, Triceps en polea, Biceps en banco scott, Press francés Día 7: Flexibilidad Ejercicios: Estiramiento unilateral de gluteos, cuadriceps e isquios, Gato contento/enojado, Estiramientos de torso completo"
      };
    
    var dias = parseInt(document.getElementById('dias').value);
    
    var rutinaTexto = rutinas[dias];
    
    var rutinaElement = document.getElementById('rutina');
    rutinaElement.textContent = rutinaTexto;
    }
  




