## EVERY

- Every si utilizza quando vogliamo effettuare una verifica su ogni elmento di un'array,
e ottenere quindi un valore booleano come risultato nel caso la condizione sia soddisfatta o no.

- every esegue il ciclo sugli elementi dell'array da sinistra a destra

- Per ogni iterazione, chiama la funzione data con l'elemento dell'array corrente come primo argomento.
- Il ciclo continua finché la funzione non restituisce un valore false . E in quel caso every ritorna false – altrimenti ritorna true.

#### Sintassi di every
- every(callbackFn,thisArg), every ha due parametri:
1. callbackFn = funzione che verrá chiamata per ogni elemento e che restituisce un valore booleano
2. thisArg = é facoltativo, se non passato é impostato ad undefined

- callbackFn(element,index,array)
la funzione di callback ha 3 parametri:
1. element = l'elemento dell'array corrente
2. index = l'indice dell'elemento
3. array = l'array stesso su cui stiamo lavorando

#### Casi speciali
- se l'array é vuoto,js restituirá true,senza fare chiamate della funzione

- se l'array ha dei buchi, questi verranno ignorati