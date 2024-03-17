console.log(123);

/**
 * ZMIENNE, hoisting
 *
 * var
 *
 *
 * const
 * let
 *
 */

// var nazwaZmiennej = 123;

const zmienna1 = 123;
let zmienn2 = "123";

let suma = 0;

const liczba1 = 1;
const liczba2 = 2;

suma = liczba1 + liczba2;

const string1 = "str1";
const string2 = "str1";

const string3 = string1 + string2;
const string4 = `trelemorele ${string2}    ${string3}

lwrfwe

wefwe
fwef
wefwefwef

wef
`;

/**
 * console.log
 *
 * narzędzia deweloperskie
 */

/**
 * typy danych
 *
 * prymitywne:
 * string
 * number
 * boolean
 *
 * undefined
 * null
 *
 * typy złożone/referencyjne
 * obiekty
 * tablice
 * funkcje
 *
 */

const isDeveloper = true;
const isDesigner = false;

let imie = "";

// Animal animal = new Animal(); // JAVA way

const animal = {
  name: "Reksio",
  age: 10,
  // sayHello:
};

animal.age;
animal.name;

console.log(imie);

/**
 * funkcje warunkowe
 */

let user = {
  name: "John",
  lastName: "Doe",
  age: 20,
};

if (
  user.age === undefined ||
  user.age === null ||
  typeof user.age !== "number"
) {
  console.log("User nie ma określonego wieku");
} else if (user.age < 18) {
  console.log("user jest nieletni");
} else if (user.age === 18) {
  console.log("user ma 18 lat");
} else {
  console.log("user jest pełnoletni");
}

// ternary operator - w Javie i w JS
// const temp = user.age === 18 ? "yes" : "no";

/**
 * Zadanie:
 * Napisz warunek który będzie sprawdzał
 * czy zmienna age jest większa niż 18 jeżeli tak wyświetl w konsoli informacje że user jest dorosły
 * w przeciwnym wypadku wyświetl wiadomosc odwrotną
 *
 */

/**
 * struktury danych
 * obiekty (słowniki) i tablice (listy)
 *
 * - tworzenie obiektów/tablic
 * - *tworzenie obiektów za pomocą klas
 * - odczytywanie pól/elementów z obiektów/tablic
 * - dodawanie nowych pól/elementów do obiektów/tablic
 *
 */

// List<string> stringi = new List<string>{};

const listaSłow = [
  "trelemorele",
  "hej",
  "kup",
  "se",
  "klej",
  123,
  true,
  undefined,
  null,
  [],
  [[[[]]]],
  {
    name: "John",
    age: 20,
  },
];

console.log(listaSłow[2]);

listaSłow.push(10);

/**
 * Kolekcje - tablice
 */

/**
 * Porównywanie obiektów za pomocą JSONa
 *
 * 1) serializacja obiektów do JSONa
 * 2) porównać te 2 JSONy
 */

const user11 = {
  name: "John",
  lastName: "Doe",
  password: "********",
};

const user22 = {
  name: "John",
  lastName: "Doe",
  password: "********",
};

// przygotwanie obiektu do wysyłki do Backendu
const user11InJson = JSON.stringify(user11);
const user22InJson = JSON.stringify(user22);

console.log(user11InJson);

/**
 * Obiekty są porównywane za pomocą referencji nie jest porównywana struktura
 */

if (user11InJson === user22InJson) {
  console.log("te obiekty są takie same");
}

/**
 * Zdanie:
 * Utwórz obiekt (literał obiekt/słownik) user który będzie posiadał
 * następujące pola:
 *
 * name: string
 * lastName: string,
 * age: number
 * todos: array of strings
 *
 * Zadanie:
 * Utwórz listę/tablicę obiektów typu user niech lista będzie zawierała 3 elementy/obiekty
 *
 * rezultat możesz wykonsolować za pomocą console.table(users)
 *
 * EGZOTYCZNY JS
 * - listy różnych typów
 */

const userX = {
  name: "John",
  lastName: "Doe",
  age: 30,
  todos: ["pouczyć się JSa", "Odpocząć"],
};

console.log(userX);

const userY = {
  name: "Jane",
  lastName: "Doe",
  age: 20,
  todos: ["pouczyć się JSa", "Odpocząć"],
};

const userZ = {
  name: "Jack",
  lastName: "Doe",
  age: 5,
  todos: ["pouczyć się JSa", "Odpocząć"],
};

const userList = [
  userX,
  userY,
  userZ,
  { name: "Jacob", lastName: "Peterson", age: 50, todos: [] },
];

console.table(userList);

/**
 * pętle
 *
 * for, while, do while
 *
 * funkcje wyższego rzędu
 *
 * map, filter, forEach
 */

for (let i = 0; i < userList.length; i++) {
  console.log(i);
  userList[i].isProcessed = true;
}

console.table(userList);

userList.forEach((user) => {
  user.isProcessed = false;
});

console.table(userList);

const newUserList = userList.map((el) => el.name);

console.log(newUserList);

/**
 * Zadanie
 * Przeiteruj się przez tablicę userów
 * i sprawdż czy userzy są dorośli (age > 18) jeżeli tak ustaw nowo dodane pole isAdult na true
 * w przeciwnym wypadku ustaw je na false
 *
 */

const user1 = {
  name: "Bill",
  lastName: "Cosby",
  age: 13,
};

const user2 = {
  name: "Bill",
  lastName: "Cosby",
  age: 23,
};

const user3 = {
  name: "John",
  lastName: "Rambo",
  age: 70,
};

const user4 = {
  name: "Janet",
  lastName: "Jackson",
  age: 15,
};

const users = [user1, user2, user3, user4];

// ============== 1 ===============
// for (let i = 0; i < users.length; i++ ){
//   if(users[i].age > 18){
//     users[i].isUserAdult = true;
//   } else if (users[i].age < 18){
//     users[i].isUserAdult = false;
//   }
// }

// ============== 2 ===============
// for (let i = 0; i < users.length; i++ ){
//   if(users[i].age > 18){
//     users[i].isUserAdult = true;
//   } else{
//     users[i].isUserAdult = false;
//   }
// }

// ============== 3 ===============
for (let i = 0; i < users.length; i++) {
  users[i].isUserAdult = users[i].age > 18;
}

/**
 * MIEJSCE NA TWÓJ KOD
 */

// console.table(users);

/**
 * funkcje
 *
 * function
 *
 * arrow functions
 */

function nazwaFunckji(param1, param2) {
  console.log(param1);
  console.log(param2);

  return param1 + param2 + "test123";
}

function addTwoNumbers(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  }
  console.log("Something went wrong");
}

addTwoNumbers("ASDFasdfa", undefined);

const sumaDodawania = addTwoNumbers(20, 20);

console.log(sumaDodawania);

const mulitplyTwoNumbers = (a, b) => a * b;

const result = mulitplyTwoNumbers(10, 10);

console.log(result);

/**
 * Zadanie:
 * stwórz funkcje isUserAdult zwracająca true lub false w zależności czy user przekazany w parametrze ma age>18
 *
 * ** obsłuż przypadek gdy do funkcji przekazane są nie poprawne dane
 *
 * Zadanie:
 * stwórz funkcje getAvarageAge która przyjmie tablicę użytkowników i zwróci średnią arytmetyczną wieku użytkówników
 *
 *
 * ** Zadanie
 * stwórz funckje getNumbersOfAdultsPerGender która przyjmie tablicę/listę użytkowników i zwróci obiekt
 * z dwoma kluczami numberOfAdultMales i numberOfAdultFemales
 *
 * {
 *    numberOfAdultMales: 25,
 *    numberOfAdultFemales: 12
 * }
 *
 *
 */

const isUserAdult = (user) => {};

function getNumbersOfAdultsPerGender() {
  /**
   * Miejsce na Twój kod
   */
  return {
    numberOfAdultMales: undefined,
    numberOfAdultFemales: undefined,
  };
}
