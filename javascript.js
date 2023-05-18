//? Crea una funzione che controlli due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma dei due è 50.

// function controlla(n1, n2) {
    
//     if (n1 === 50 || n2 === 50 || n1 + n2 === 50) {
//       return true;
//     }else
    
//     return false;
//   }

// console.log(controlla(22 , 25));
// console.log(controlla(25, 25));

//? Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la 
//? e la poszione come parametri e ritorna la stringa modificata

// let stringa = [ciao]

// function rimuoviCarattere (){
//     for (let i = 0; i < stringa.length; i++) {
//         if(stringa.includes("o")){
            
//         }

//     }

// }

//? 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true`
//? se rispecchiano queste condizioni, altrimenti ritorna `false`.

// function controlloNumeri(a, b){
//    if (( a >= 40 && a <= 60 || b <= 60 && b >= 40) || ( a >= 70 && a <= 100 || b <= 100 && b >= 60))
//  {
//    return true

// }else{
//     return false
//  }
// }
//  console.log(controlloNumeri( 55, 60));



//? 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.
// function cities (n) {
//     let itemMin = n.toLowerCase();
//     let item = itemMin.split('');
//     if (((item[0] == "l")&&(item[1] == "o")&&(item[2] == "s"))||((item[0] == "n")&&(item[1] == "e")&&(item[2] == "w"))) {
//         return n
//     } else {
//         return "false"
//     };
// }
// console.log(cities("New York"));

//? 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. l'array deve essere passato come paramentro.

// let somma=[1,2,5,6,8,9,10];
// let sum = 0;

// function sommaArray(){
//      for (let i = 0; i < somma.length; i++) {
//         sum += somma[i]; 
//      }
//      return sum
// }
// console.log(sommaArray(sum));

//? 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se non li contiene ritorna true altrimenti false.

// let numeri=[1,2,5,6,8,9,10];

// function controllaNumeri(){
//     for ( let i=0; i< numeri.length; i++){
        
//         if(!numeri.includes(1) && !numeri.includes(3)){
//             return true
//         }else {
//             return false
//         }
//     }
// }
// console.log(controllaNumeri());

//? 7. Creare una funzione per trovare il tipo di un angolo in cui i gradi sono passati come parametro.
//? Angolo acuto: meo di 90° => ritorna "acuto"
//? Angolo ottuso: tra i 90° e i 180° gradi => ritorna "ottuso"
//? Angolo retto: 90° => ritorna "retto"
//? Angolo piatto: 180° => ritorna "piatto"




// function angoli(gradi){
    
//   if( gradi < 90 ){
//     return "acuto"
//   } else if( gradi > 90 && gradi < 180){
//     return "ottuso"
//   } else if (gradi == 90){
//     return "retto"
//   }else if (gradi == 180){
//     return "piatto"
//   }
    
// }


// console.log(angoli(180));


//? 8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "Fiat"

function casaMadre(frase){
 let parole = frase.split(" ")
 let acronimo = ""
  
 for (const parola of parole )  {
  acronimo +=  parola.charAt(0)
 } 
  return acronimo
}

console.log(casaMadre("Fabbrica Italiana Automobili Torino"));