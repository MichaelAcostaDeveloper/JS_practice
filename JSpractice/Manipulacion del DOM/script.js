
const h1 = document.querySelector('h1');//por el nombre de la etiqueta
const p = document.querySelector('p');//por el nombre de la etiqueta
const parrafo1 = document.querySelector('.parrafoCLASS');// por la clase
const parrafo2 = document.querySelector('#parrafoID');//por el ID
const input = document.querySelector('input');//por el nombre de la etiqueta
const pAll = document.querySelectorAll('p');//a todo por el nombre de la etiqueta

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

h1.innerHTML = 'Manipulando el DOM de diversas <br> maneras!'
h1.innerText = 'Hola a todos!!!'
console.log(h1.getAttribute('class'));
h1.setAttribute('class','animation');
h1.classList.add('anime');
h1.classList.remove('animation');
h1.classList.toggle('verde');
h1.classList.contains('azul');

input.value="789";

const imagen = document.createElement('img');
imagen.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQac3woqXsn-vGKuCbOxViA_JCi_Nt6hew82RtPdi2eFoidPz2VSQ9KKreGV2n8VY9SvEw&usqp=CAU');
parrafo2.append(imagen);
