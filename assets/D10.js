/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log("Risultato sum:", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log("Risultato Random:", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Alessio",
  surname: "Visconti",
  age: 25,
};
console.log("me prima del delete", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("me dopo il delete", me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["C forse", "JS sicuro no", "Python me lo sogno"];
console.log("me dopo l'aggiunta di skills", me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("sto iniziando a finire i linguaggi C++");
console.log("me dopo il push", me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("me dopo la rimozione dell'ultimo elemento di skills", me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log("Risultato di dice", dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(a, b) {
  if (a > b) {
    return "Il numero a è il maggiore: " + a;
  } else if (b > a) {
    return "Il numero b è il maggiore: " + b;
  } else {
    return "I numeri sono uguali: " + a + " e " + b;
  }
}

console.log("whoIsBigger", whoIsBigger(dice(), dice()));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const str = "i love coding";
function splitMe(str) {
  // Divido la stringa in parole con lo spazio
  let words = str.split(" ");
  // Uso map per trasformare ogni parola
  let wordMap = words.map((word) => {
    // Prendo la prima lettera e la rendo maiuscola
    let primaLettera = word.charAt(0).toUpperCase();
    // Prendo il resto della parola (dalla seconda lettera in poi)
    let restoDellaParola = word.slice(1);
    // Unisco prima lettera maiuscola + resto della parola
    return primaLettera + restoDellaParola;
  });
  return wordMap;
}
console.log(splitMe(str));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const str2 = "Anna";
function deleteOne(str, booleano) {
  if (booleano) {
    //metto solo booleano perchè è come dire se booleano è true
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}
console.log("questo è true", deleteOne(str2, true));
console.log("questo è false", deleteOne(str2, false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
/* Devo prendere una variabile con all'interno una stringa. Devo far analizzare la stringa e valutare cosa è buono e cosa no. Facesti una ocsa del genere in passato, tutto è numero tutto è numero tutto è numero.
Inumeri non sono buoni e gli spazi lo sono.Trovare un modo per far passare gli spazi*/
const str3 = "I have 4 dogs";
function onlyLetters(str) {
  // Divido la stringa in singoli caratteri
  let characters = str.split("");
  // Creo un array vuoto dove metterò solo lettere e spazi
  let newStr = [];
  // Controllo ogni carattere
  for (let i = 0; i < characters.length; i++) {
    let char = characters[i];
    // Controllo se il carattere è una lettera
    let isLetter = char.toLowerCase() >= "a" && char.toLowerCase() <= "z";
    // Se è una lettera o uno spazio lo aggiungo
    if (isLetter || char === " ") {
      newStr.push(char);
    }
  }
  // Unisco il tutto in una stringa
  return newStr.join("");
}
console.log("onlyLetters", onlyLetters(str3));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
/*Trovare un modo per controllare le email. Cosa comune edlle email sono la @ ed un . nessuna email ha una @ ed . attaccate. Trovare modo per controllare la loro distanza, se sono attaccate non va bene, se sono staccate fra di loro in teoria è un email valida.
TODO sei riuscito a creare un controllo sulla distanza ma si può fare di più?@g.com passerebbe comunque come email valida ma non credo esiste un email del genere*/
function isThisAnEmail(str) {
  const controlloChiocciola = str.indexOf("@"); //indexof cerca quello che chiediamo in questo caso la @ e dice in che punto la trova, se non la trova riporta -1
  if (controlloChiocciola === -1) return false;
  const controlloPunto = str.indexOf(".", controlloChiocciola); //indexof cerca quello che chiediamo in questo caso il . e dice in che punto la trova, se non la trova riporta -1
  if (controlloPunto === -1) return false;
  if (controlloPunto - controlloChiocciola === 1) return false; //seguendo il ragionamento di sopra se entrambi sono true, ovvero hanno passato i controlli, sottraendo il secondo controllo al primo controllo, se ripostano un numero superiore a 1 vuol dire che c'è almeno un carattere quindi la email dovrabbe essere valida, se dice riportano 1 invece vuol dire che il punto è stato messo immediatamente dopo alla @ quindi non può essere un email valida
  return true; // tutti i controlli passano ritorna true
}
console.log("Email corretta Dovrebbe dare true", isThisAnEmail("email@esercizio.com"));
console.log("Manca @, dovrebbe dare false", isThisAnEmail("email.esercizio.com"));
console.log("Manca il punto dopo @, dovrebbe adre false", isThisAnEmail("email@com"));
console.log("Punto subito dopo la @ ovrebbe dare false", isThisAnEmail("email@.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const giorniDellaSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const oggi = new Date(); //stampa il giorno corrente, ricordarsi che segue il modello Americano dove per loro il primo giorno è la Domenica
  const indiceDiOggi = oggi.getDay();
  return giorniDellaSettimana[indiceDiOggi];
}
console.log("Che giorno è oggi?", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(parametro) {
  const values = [];
  let sum = 0;
  for (let i = 0; i < parametro; i++) {
    const risultatoTiro = dice();
    values.push(risultatoTiro);
    sum += risultatoTiro;
  }
  return {
    sum: sum,
    values: values,
  };
}

console.log("rollTheDices", rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
/*I giorni sono valutati anche in millisicondi, Maci diceva di scomporre tutto fino al più piccolo e di ricavare il più grande. millisecond in secondi, secondi in minuti, minuti in ore. Ricavare gli ms e moltiplicarli quella è la distanza di giorni
TODO funziona solo a stile americano ma se l'utente dovesse scrivere in modo diverso? Risolvere*/
function howManyDays(parametroData) {
  const oggi = new Date();
  const dataPassata = new Date(parametroData); // converto il parametro in data, new Date() se vuoto da la data di oggi, se gli si mette un valore di data accettato mette quella data e la converte in data impostata a mezzanotte con tanto di millisecondi
  const diffMs = oggi - dataPassata; // calcolo la differenza in millisecondi
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // converto millisecondi in giorni 1000 ms * 60 secondi * 60 min * 24 ore, co nMath.floor arrotondo come sempre per difetto

  return diffDays;
}
console.log("Quanto tempo è passato", howManyDays("1999-09-11"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  const today = new Date();
  const myBirthdayMonth = 2;
  const myBirthdayDay = 24;

  return today.getMonth() === myBirthdayMonth && today.getDate() === myBirthdayDay;
}

console.log("E' oggi il mio compleanno?", isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const leagueOfLegends = { name: "Garen", age: 25, state: "Demacia" };
function deleteProp(oggInteresato, oggDaEliminare) {
  delete oggInteresato[oggDaEliminare];
  return oggInteresato;
}
console.log("Eliminato state?", deleteProp(leagueOfLegends, "state"));
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  let newest = movies[0];
  for (let i = 1; i < movies.length; i++) {
    //mettiamo i=1 perchè stiamo confrontando il newest che è il primo film che punta a 0 con un altro film, in questo caso il secondo che punta ad 1, non mettiamo 0 perchè sennò confronteremmo lo stesso film
    if (movies[i].Year > newest.Year) {
      newest = movies[i];
    }
  }
  return newest;
}
console.log("Il film più recente è:", newestMovie(movies));
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}
console.log("Il numero di film è:", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  const years = movies.map((movies) => movies.Year);
  return years;
}
console.log("Solo gli anni:", onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  const limiteAnno = 2000;
  const filmVecchi = movies.filter((movie) => parseInt(movie.Year) < limiteAnno); //con parseInt converto da stringa a numero
  return filmVecchi;
}
console.log("Film dello scorso Millennio", onlyInLastMillennium(movies));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  let somma = 0;
  for (let i = 0; i < movies.length; i++) {
    somma += parseInt(movies[i].Year);
  }
  return somma;
}
console.log("sumAllTheYears", sumAllTheYears(movies));
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(filmDaCercare) {
  return movies.filter((movie) => movie.Title.toLowerCase().includes(filmDaCercare.toLowerCase()));
}
console.log("Il film è:", searchByTitle("gers"));
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
/*E' l'esercizio sopra ma devi drovare solo il modo di aggiungere unmatch. Mettere l'opzione diverso*/
function searchAndDivide(strInteressata) {
  const match = movies.filter((movie) => movie.Title.toLowerCase().includes(strInteressata.toLowerCase()));
  const unmatch = movies.filter((movie) => !movie.Title.toLowerCase().includes(strInteressata.toLowerCase()));
  return { match, unmatch };
}
console.log("Stringa interessata", searchAndDivide("aven"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(index) {
  const removeFilm = movies.filter((elementoNonInteressato, i) => i !== index);
  return removeFilm;
}
console.log("ritorno senza film selezionato", removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function getContainer() {
  const container = document.getElementById("container");
  return container;
}
const container = getContainer();
console.log("Container", container);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function getTds() {
  const leMieTds = document.querySelectorAll("td");
  return leMieTds;
}
const tds = getTds();
console.log("Tds", tds);
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function stampaTestoTd() {
  const celleTd = document.querySelectorAll("td");
  for (let i = 0; i < celleTd.length; i++) {
    console.log(celleTd[i].innerText);
  }
}
stampaTestoTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function backgroundColorA() {
  const links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red"; //si potrebbe anche dare una classe per poi stilizzare il tutto nel css ma ho visto che nell'esercizio dopo dobbiamo dare una classe quindi suppongo che l'esercizio voglia farmi dare qui lo stile
  }
}
backgroundColorA();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function aggiungiLiAdUl(testoDaAggiungere) {
  const lista = document.getElementById("myList");
  const nuovoElemento = document.createElement("li");
  nuovoElemento.innerText = testoDaAggiungere;
  lista.appendChild(nuovoElemento);
}
aggiungiLiAdUl("Iron-Man");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaMyList() {
  const lista = document.getElementById("myList");
  lista.innerHTML = ""; // svuota tutto il contenuto della lista
}
svuotaMyList();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function aggiungiClasseATr() {
  const righe = document.querySelectorAll("tr");
  righe.forEach((tr) => {
    tr.classList.add("test");
  });
}
aggiungiClasseATr();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(quantiAsterschiVuoi) {
  for (let i = 1; i <= quantiAsterschiVuoi; i++) {
    console.log("*".repeat(i));
  }
}
halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
TODO La via potrebbe essere quella di sopra per generare ma come faccio a mettere gli spazi alla seconda riga? Ci stava un modo per levare gli spazi ai lati quindi ci sta un modo per metterli
  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrimeClassic(numeroInteressato) {
  //un numero primo è un numero che è divisibile per se stesso e per 1, per definizione 1 e 0 non sono numeri primi.
  if (numeroInteressato <= 1) return console.log("inserisci un numero valido");
  for (let i = 2; i < numeroInteressato; i++) {
    if (numeroInteressato % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isItPrimeClassic(20));
/* Questo array viene usato per gli esercizi. Non modificarlo. */
