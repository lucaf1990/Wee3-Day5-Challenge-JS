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
let sum = 10 + 20;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.round(Math.random() * 20) + 1;
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Luca",
  surname: "Forma",
  age: "32",
};
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills",
   contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript", "Phiton", "C++"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("java");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

let dice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num1 < num2) console.log(num2);
};
whoIsBigger(5, 3);
whoIsBigger(9, 16);
whoIsBigger(20, 4);
whoIsBigger(1, 19);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
let splitMe = function (str) {
  str.split(" ");
  return str.split(" ");
};
console.log(splitMe("Ciao mi chiamo Luca e questo esame è ok"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere,
   altrimenti la deve ritornare senza l'ultimo.
*/
let deleteOne = function (str, boo) {
  if (boo) {
    return str.slice(1);
  } else return str.slice(0, -1);
};

console.log(deleteOne("Hello There", true));
console.log(deleteOne("Hello There", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"*/

let onlyLetters = function (str) {
  let x = str.replace(/[0-9]?/g, "");
  return x;
};
console.log(onlyLetters("Ciao 123 come stai 45"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido
  indirizzo email.
*/
let isThisAnEmail = function (email) {
  console.log(email.includes("@"));
};
isThisAnEmail("luca@email");
isThisAnEmail("lucamail");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
let whatDayIsIt = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(whatDayIsIt[new Date().getDay()]);
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto
   contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori 
  estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

let rollTheDices = function (num) {
  let thisTrick = {
    sum1: 0,
    values: [],
  };
  for (let i = 0; i < num; i++) {
    let element = dice();
    thisTrick.values.push(element);
    thisTrick.sum1 = thisTrick.sum1 + thisTrick.values[i];
  }
  return thisTrick;
};

console.log(rollTheDices(3));
console.log(rollTheDices(15));
console.log(rollTheDices(10));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
let howManyDays = function (num) {
  let currentDate = new Date();
  let timeDiff = currentDate.getTime() - num.getTime();
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
};
console.log(howManyDays(new Date(2022, 5, 16)));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

/// Il 10 è uno con cui ho avuto particolari porblemi ho provato a farlo secondo le istruzioni
// che abbiamo visto venerdi ma non riesco a farlo andare correttamente :-( però il resto funziona

/*let isTodayMyBirthday = function (birthday, today) {
  let currentMonth = String(today.getMonth());
  let currentDay = String(today.getDate());
  let arrayOfDates = birthday.split("/");
  let [dayFirst, monthBirth, yearBirth] = arrayOfDates;
  if (currentMonth === monthBirth && currentDay === dayFirst)
    console.log("yess");
};
isTodayMyBirthday(new Date(), "11/6/1990");
isTodayMyBirthday(new Date(), "16/2/1584");
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
let me2 = {
  name: "Luca",
  surname: "Forma",
  age: "32",
};
let deleteProp = function (ogg, str) {
  delete ogg;
  delete ogg[str];
  return ogg;
};
console.log(deleteProp(me2, "surname"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies"
   fornito.
*/
let newestMovie = movies.map((movie) => parseInt(movie.Year));
console.log(newestMovie);

let found = newestMovie[0];
let findInd = 0;
let founMovie = movies[0];
console.log(found);
for (let i = 0; i < newestMovie.length; i++) {
  const element = newestMovie[i];
  if (element > found) {
    console.log(element);
    found = element;
    findInd = i;
    founMovie = movies[i];
  }
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti 
  nell'array "movies" fornito.
*/
let countMovies = (numOfMovies) => {
  return numOfMovies.length;
};
console.log(countMovies(movies));
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
let newArrey = [];
let onlyTheYears = function (n) {
  for (let i = 0; i < n.length; i++) {
    const numINedd = [n[i].Year];
    console.log(numINedd);
    newArrey.push(numINedd);
  }
};
onlyTheYears(movies);
console.log(newArrey);
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto
   nel millennio scorso contenuti nell'array "movies" fornito.
*/
let onlyInLastMillennium = movies.map((movie) => parseInt(movie.Year));
let found1 = onlyInLastMillennium[0];
let findInd1 = 0;
let founMovie1 = movies[0];
console.log(found);
for (let i = 0; i < onlyInLastMillennium.length; i++) {
  const element1 = onlyInLastMillennium[i];
  if (element1 >= 2000) {
    console.log(element1);
  }
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

let sumAllTheYears = movies.map((movie) => parseInt(movie.Year));
let sumAllTheYears1 = 0;
for (let i = 0; i < sumAllTheYears.length; i++) {
  sumAllTheYears1 += sumAllTheYears[i];
}
console.log(sumAllTheYears1);
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies"
   fornito che la contengono nel titolo.
*/
let searchByTitle = movies.map((str) => str.Title);
console.log(searchByTitle);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array:
   "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo
  , mentre "unmatch" deve includere tutti i rimanenti.
*/

let match = [];
let unmatch = [];
function searchAndDivide(str) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      match.push(movies[i]);
    } else unmatch[i] = movies[i];
  }
  console.log(match);
  console.log(unmatch);
}
searchAndDivide("Flies");
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo 
  dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(ind) {
  for (let i = 0; i < movies.length; i++) {
    if (ind - 1 === i) delete movies[i];
    else console.log(movies[i]);
  }
}
removeIndex(14);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const contId = () => {
  document.getElementById("#container");
};
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const tagTd = () => {
  document.querySelectorAll("body td");
};
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const stampTag = () => {
  console.log(td.forEach((element) => element.innerText));
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
let changeColor = () => {
  const a = document.querySelectorAll("body a");
  a.forEach((element) => (element.style.backgroundColor = "red"));
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addNewEle = () => {
  let unList = document.getElementById("#mylist");
  let ulLi = document.createElement("li");
  length.innerText = "This is the new Li";
  unList.appendChild(ulLi);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
let emptyList = () => {
  let ulLi = document.getElementById("#myList");
  ulLi.toEmpty();
};
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const assCssClass = () => {
  let classCss = document.querySelectorAll("tr");
  classCss.classList.add("Test");
};

/////// 29 FATTOOOOOOOO!!!
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo
  albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true
   se il numero fornito è un numero primo.
*/
let isItPrime = (num) => {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
console.log(isItPrime(5));
console.log(isItPrime(1));
console.log(isItPrime(2));
console.log(isItPrime(17));
console.log(isItPrime(25));
