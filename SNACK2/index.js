 /*

Snack 2:
Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 */

let array1 = ["a","b","c"]
let array2 = [1,2,3]
let concatArray = array1.concat(array2)
let mixArray = []


/*for (let i =0; i<(array1.length+array2.length); i++) {

    
    mixArray.push(array1[i][i])
}*/


for (let i =0; i<array1.length ; i++) {
    mixArray.push(concatArray[i])
    
    for (let j =0; j<array2.length; j++) {

        mixArray[i].push(concatArray[i])
     } 
   
 } 

 


console.log(mixArray)