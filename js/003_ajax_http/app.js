/**
 * AJAX i nowe podejście do wymiany danych z serwerem
 */

/**
 * fetch
 */

/**
 * pobranie listy użytkowników
 * 
 * 
 fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
 * 
 */

const przycisk = document.querySelector("#fetchButton");
// przycisk.remove();

przycisk.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const tbody = document.querySelector("#todos");
      // tworzenie elemntów html w js za pomocą stringów
      // const div = `<div>${123}</div>`;

      let trki = "";

      data.forEach((todo) => {
        trki = `<tr><td>${todo.id}</td><td>${todo.title}</td></tr>` + trki;
      });

      tbody.innerHTML = trki;
    });
});

/**
 * dodawanie nowego uzytkownika *
 */

document.querySelector("#createUserForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
});
