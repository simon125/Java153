/**
 * DOM przeglądarka interpretuje kod HTML i dostarcza obiekt, który JS jest w stanie odczytywać i modyfikować
 */

/**
 * obiekt document
 */

// document.body  // po kropce możemy dostać wiele pól związanych z naszym dokumentem
// formą sprawdzenia co jest dostępne w obiekcie document jest sprawdzenie go w konsoli deweloperskiej w przeglądarce

/**
 * Tworzenie elementu
 *
 * 1) createElement
 *
 * 2) template string (backticki - znaki pojedynczego cudzysłowia po klawiszem esc) + właściwość innerHTML
 *
 */

/**
 * Pobieranie elementów z dokumentu HTML
 */

// 1) metoda querySelector
// document.querySelector("#clickMe");

// 2) metoda getElementById
// const button = document.getElementById("clickMe");

/**
 * manipulowanie classami - lista klas jest dostępna pod polem classList
 * dodatkowo można manipulować tymi klasami przy pomocy dużej gamy metod dostępnej też pod tym polem
 */

/**
 * Wstawianie elementu / osadzanie w dokumencie
 *
 * appendChild - metoda dostępna na każdym elemencie HTMLowym/Nodzie
 *
 * innerHTML - pole/właściwosć elementów HTMLowych/Nodów do której mozemy przypisać html napisanego za pomocą stringa
 *
 */

document.body.appendChild(divElement);

/**
 * Usuwanie elementu - metoda remove dostępna na elemencie HTML/Nodzie
 */

// document.body.remove()

/**
 * Eventy, event listnery - interakcja z UI
 */
