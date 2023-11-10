// EVERY

// Every si utilizza quando vogliamo effettuare una verifica su ogni elmento di un'array,
//e ottenere quindi un valore booleano come risultato nel caso la condizione sia soddisfatta o no.

//every esegue il ciclo sugli elementi dell'array da sinistra a destra

//Per ogni iterazione, chiama la funzione data con l'elemento dell'array corrente come primo argomento.
//Il ciclo continua finché la funzione non restituisce un valore false . E in quel caso every ritorna false – altrimenti ritorna true.

//sintassi di every
//every(callbackFn,thisArg)

//callbackFn(element,index,array)
//callbackFn = funzione che verrá chiamata per ogni elemento e che restituisce un valore booleano
//thisArg = é facoltativo, se non passato é impostato ad undefined

//la callback ha 3 parametri:
//element = l'elemento dell'array corrente
//index = l'indice dell'elemento
//array = l'array stesso su cui stiamo lavorando

//se l'array é vuoto,js restituirá true,senza fare chiamate della funzione

//se l'array ha dei buchi, questi verranno ignorati

// Fino ad ora avremmo dovuto usare un ciclo for o forEach per scorrere su un array, invece tramite questa iterazione possiamo usare questa sintassy per risparmiare righe di codice e iterazioni con i cicli




//ESEMPI
//scorrere questo array e verificare se sono tutti maggiori di 18
const numbersArray = [45, 4, 9, 16, 25];

//uso ciclo for
let flagFor = true;
for (let i = 0; i < numbersArray.length; i++) {
    const element = numbersArray[i];
    if(element < 18){
        flagFor = false;
    }
}
console.log(flagFor,"risultato del for");//false

//uso ciclo forEach
let flagForEach = true;

numbersArray.forEach(currNumb => {
    if(currNumb < 18){
        flagForEach = false;
    }
})
console.log(flagForEach,"risultato del foreach");//false

// Con every, possiamo ottenere lo stesso risultato con molte meno righe di codice
let allOver18 = numbersArray.every(myFunction);
console.log(allOver18, "risultato di every");//false

//funzione che verrá chiamata da every
function myFunction(value, index, array) {
  return value > 18;
}

//diciamo che vogliamo verificare se ogni numero nell'array è minore di 100 e poi se é minore di 50
//Utilizzando every possiamo facilmente testarlo come di seguito:
const nums = [34, 2, 48, 91, 12, 32];
console.log(nums.every(n => n < 100),"risultato every se i numeri sono minori di 100");//true
console.log(nums.every(n => n < 50),"risultato every se i numeri sono minori di 50");//false


//qui verifichiamo se i numeri siano pari 
//il primo array sono numeri sia pari che dispari
const numberNotEven = [1, 2, 3, 4, 5];
//nel secondo sono soltanto pari
const numberEven = [2, 4, 6, 8, 10];

const even = element => element % 2 === 0;

const areAllEven = numberNotEven.every(even);
const areAllDoubledEven = numberEven.every(even);

console.log(areAllEven,"risultato sull'array non pari"); // false
console.log(areAllDoubledEven,"risultato sull'array  pari"); // true

