/*
Snack 1:
Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")
*/
  let parola = "ciao"

  function reverse(){

  // array dove salverò ogni lettera della mia parola rovesciata  
  const parolaReverse = []

  // ciclo che riepie il mio array al contrario
    for(let i =parola.length-1 ; i>=0 ; i--){
        parolaReverse.push(parola[i])
    }

    //console.log(parolaReverse)

    return parolaReverse
}

console.log(reverse())