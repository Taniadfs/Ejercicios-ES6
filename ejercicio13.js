//Usando la función anterior beneficiate de poder conocer el indice del array
//para crear una función llamada removeItem que pasandole un array y un texto
//como parametros (los mismos parametros que en el anterior ejercicio) llame a
//la función anteriormente creada findArrayIndex y obten el indice para
//posteriormente usar la función de javascript .splice() para eliminar el
//elemento del array.

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, texto) {
  return array.indexOf(texto)
}

function removeItem(array, texto) {
  const index = findArrayIndex(array, texto)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}

console.log(findArrayIndex(mainCharacters, 'Rey'))
console.log(findArrayIndex(mainCharacters, 'Luke'))
console.log(mainCharacters)
removeItem(mainCharacters, 'Rey')
console.log(mainCharacters)

//De nuevo haz varios ejemplos para practicar y comprueba que funcionan
//correctamente.
