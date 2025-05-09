//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array //cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.

//Sugerencia de función:
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}

//Ej array:
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(findArrayIndex(mainCharacters, 'Leia'))
console.log(findArrayIndex(mainCharacters, 'Rey'))
console.log(findArrayIndex(mainCharacters, 'Peter'))

function findArrayIndex(array, texto) {
  return array.indexOf(texto)
}

console.log(findArrayIndex(mainCharacters, 'Leia'))
