//Array es una lista de elementos
//Se usa cuando no cambian los elementos
const array = [1193, 'micke', true, false];

//Objeto es una lista de elementos, pero
//cada elemento tiene un nombre clave
const obj = {
          nombre: 'Micke',
          edad: 3,
          profesion: 'Ing',
          experiencia: 12,
          certificados:['A','B','C','D']
};
console.log(obj);

//EJEMPLOS
//Crear una funcion que imprima el primer elemento
function imprimirPrimerElemento(arr){
          console.log(arr[2]);
}
imprimirPrimerElemento([1,2,3,4,5]);
//Crear una funcion que imprima elemento a elemento de un array
function imprimirElementoPorElemento(arr){
          for(let i =0; i<arr.length; i++){
                    console.log(arr[i]);
          }
}
imprimirElementoPorElemento([1,2,3,4,5,6]);

//Crear una funcion que imprima elemento a elemento de un OBJETO
function imprimirElementoPorElementoObjeto(objeto){
          const arr_keys = Object.keys(objeto);
          const arr_values = Object.values(objeto);
          const arr_entries = Object.entries(objeto);
          for(let i =0; i<arr_values.length; i++){
                    console.log(arr_values[i]);
          }

          for(let i =0; i<arr_keys.length; i++){
                    console.log(arr_keys[i]);
          }

          for(let i =0; i<arr_entries.length; i++){
                    console.log(arr_entries[i]);
          }
}
imprimirElementoPorElementoObjeto(obj)

