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
    let quienCulpable = who[indiceAleatorio(who.length)];
    let queHizo = action[indiceAleatorio(action.length)];
    let quieresEvitar = what[indiceAleatorio(what.length)];
    let cuando = when[indiceAleatorio(when.length)];

    return quienCulpable + " " + queHizo + " " + quieresEvitar + " " + cuando;
  }
  let mensajeExcusa = generadorMensaje();
  document.getElementById("excusa").innerText = mensajeExcusa;
};
