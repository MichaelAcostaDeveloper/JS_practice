for (let index = 0; index < 10; index++) {
          if(index%2==0){
          console.log(index +" Es par");
          }
          else{
          console.log(index +" Es impar ");
          }
}

let i=0;
while (i<5){
          console.log('El valor de i es: '+i);
          i++;
}

let respuestaUsuario;
while(respuestaUsuario != '4'){
          let pregunta = prompt('Cuanto es 2+2?');
          respuestaUsuario = pregunta;
}
