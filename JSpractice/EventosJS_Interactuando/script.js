const input1 = document.querySelector("#inputNumber1");
const input2 = document.querySelector("#inputNumber2");
const btn1 = document.querySelector("#concatenar");
const btn2 = document.querySelector("#calcular");
const resp = document.querySelector("#respuesta");
let answer;


//funciones
function cambiosInput(){
          console.log('cambiando...escuchando desde JS');
}

function calculosBtn1(){
          console.log(input1.value + input2.value); //para concatenar
          answer = input1.value + input2.value;
          resp.innerText = "Resultado de concatenar: "+answer;
}

function sumarMath(a,b){
          return parseInt(a) + parseInt(b);
}

function calculosBtn2(){
          answer = sumarMath(input1.value, input2.value);
          console.log(answer);
          resp.innerText = "Resultado de sumar: "+answer;
}