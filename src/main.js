/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let sentence =
    who[getRndInteger(0, 3)] +
    " " +
    action[getRndInteger(0, 3)] +
    " " +
    what[getRndInteger(0, 2)] +
    " " +
    when[getRndInteger(0, 4)];

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var excuse = document.getElementById("excuse");
  excuse.innerHTML = sentence;
};
