//LLAMAR A LOS ELEMENTOS DE HTML DESDE JS
const h1 = document.querySelector('h1');//por el nombre de la etiqueta
const p = document.querySelector('p');//por el nombre de la etiqueta
const input = document.querySelector('input');//por el nombre de la etiqueta
const parrafo1 = document.querySelector('.parrafoCLASS');// por la clase
const parrafo2 = document.querySelector('#parrafoID');//por el ID
const pAll = document.querySelectorAll('p');//a todo por el nombre de la etiqueta


//PARA IMPRIMIR EN CONSOLA
console.log(input.value); //para acceder al valor del input

console.log({ //impresion en consola de todo
          h1,
          p,
          parrafo1,
          parrafo2,
          input,
          pAll
});

console.log('Hello all!');


//ESCRIBIR HTML DESDE JS
h1.innerHTML = 'Manipulando el DOM de diversas <br> maneras!'//para incluir etiquetas html
h1.innerText = 'Hola a todos!!!'//solo texto

//ACCESO A PROPIEDADES DE ATRIBUTOS
//PARA EL ELEMENTO h1:
console.log(h1.getAttribute('class'));//acceder al valor de la clase
h1.setAttribute('class','nombre nuevo animation');//cambio del valor de clase
h1.classList.add('anime');//para incluir un nuevo valor de clase
h1.classList.remove('nombre nuevo animation');//para remover un valor de clase
h1.classList.toggle('verde');//para cambios dinamicos del valor de la clase
h1.classList.contains('azul');//verificar si existe este valor de clase

//PARA EL ELEMENTO input:
input.value="789";//para cambiar el valor


//PARA CREAR UN NUEVO ELEMENTO
const imagen = document.createElement('img');
imagen.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQac3woqXsn-vGKuCbOxViA_JCi_Nt6hew82RtPdi2eFoidPz2VSQ9KKreGV2n8VY9SvEw&usqp=CAU');
parrafo2.append(imagen); //insertar imagen en el contenedor
