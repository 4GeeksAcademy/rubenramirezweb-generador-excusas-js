/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function indiceAleatorio(longitud) {
    return Math.floor(Math.random() * longitud);
  }

  function generadorMensaje() {
    let aleatorioWho = who[indiceAleatorio(who.length)];
    let aleatorioAction = action[indiceAleatorio(action.length)];
    let aleatorioWhat = what[indiceAleatorio(what.length)];
    let aleatorioWhen = when[indiceAleatorio(when.length)];

    // return (
    //   aleatorioWho +
    //   " " +
    //   aleatorioAction +
    //   " " +
    //   aleatorioWhat +
    //   " " +
    //   aleatorioWhen
    // );

    return `${aleatorioWho} ${aleatorioAction} ${aleatorioWhat} ${aleatorioWhen}`;
  }

  document.getElementById("generador").addEventListener("click", () => {
    // Generar un nuevo mensaje cada vez que se haga clic
    let mensajeExcusa = generadorMensaje();
    document.getElementById("excusa").innerText = mensajeExcusa;
  });
};
