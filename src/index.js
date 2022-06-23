// this is the UI logic - remember to import dependencies

import $ from 'jquery';
import Die from './die.js';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// User Interface Logic

$(document).ready(function () {
  const numberOfSides = 6;
  const die = new Die(numberOfSides);

  $('form#enterName').submit(function (event) {
    event.preventDefault();
    const name1 = $('#playerOneNameInput').val();
    const name2 = $('#playerTwoNameInput').val();
  });
});