//Crea una función llamada swap que reciba un array y dos parametros que sean
//indices del array. La función deberá intercambiar la posición de los valores de
//los indices que hayamos enviado como parametro. Retorna el array resultante.

//Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

function swap(array, indice1, indice2) {
  ;[array[indice1], array[indice2]] = [array[indice2], array[indice1]]

  return array
}
console.log(swap(fantasticFour, 0, 1))
