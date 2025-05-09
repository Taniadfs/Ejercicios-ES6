//Dado el siguiente javascript usa forof y forin para hacer la media del
//volumen de todos los sonidos favoritos que tienen los usuarios.

//forof para  iterables forin  para valores . luego sumar y dividir entre el numero total
//acceder à favorites sounds --> volume
const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

let totalVolume = 0
let countSounds = 0

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    ;(totalVolume += user.favoritesSounds[sound].volume), countSounds++
  }
}
const averageVolume = totalVolume / countSounds

console.log(averageVolume)
