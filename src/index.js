import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(() => {
  $("#introContinue").click(() => {
    $("#stylesDiv").show();
    $("#intro").hide();
  });
  $("#selectedStyle").click((event) => {
    event.preventDefault();
    const style = $("#styles option:selected").text();
    $("#stylesDiv").hide();
    if (style === "Water") $("#waterLine1").show();
    if (style === "Love") $("#loveLine1").show();
    if (style === "Wind") $("#windLine1").show();
    if (style === "Serpent") $("#serpentLine1").show();
    if (style === "Sound") $("#soundLine1").show();
    if (style === "Mist") $("#mistLine1").show();
    if (style === "Insect") $("#insectLine1").show();
    if (style === "Flame") $("#flameLine1").show();
    if (style === "Stone") $("#stoneLine1").show();
  });
  $("#flame1GoodResponse").click(() => {
    $("#flameLine2").show();
    $("#flameLine1").hide();
  });
  $("#flame1BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#flameLine1").hide();
  });
  $("#flame2GoodResponse").click(() => {
    $("#flameLine3").show();
    $("#flameLine2").hide();
  });
  $("#flame2BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#flameLine2").hide();
  });
  $("#flame3GoodResponse").click(() => {
    $("#flameLineFinal").show();
    $("#flameLine3").hide();
  });
  $("#flame3BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#flameLine3").hide();
  });
  $("#flameFinalResponse").click(() => {
    $("#intro").show();
    $("#flameLineFinal").hide();
  });
  $("#stone1GoodResponse").click(() => {
    $("#stoneLine2").show();
    $("#stoneLine1").hide();
  });
  $("#stone1BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#stoneLine1").hide();
  });
  $("#stone2GoodResponse").click(() => {
    $("#stoneLine3").show();
    $("#stoneLine2").hide();
  });
  $("#stone2BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#stoneLine2").hide();
  });
  $("#stone3GoodResponse").click(() => {
    $("#stoneLineFinal").show();
    $("#stoneLine3").hide();
  });
  $("#stone3BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#stoneLine3").hide();
  });
  $("#stoneFinalResponse").click(() => {
    $("#intro").show();
    $("#stoneLineFinal").hide();
  });
  


}
// UI Logic

/*Write a simple logic for each question (div). We can use IF statement logic
to determine where the user will advance to next using hide and show logic of divs.
As well as when someone clicks on an Hashira we can use a for loop of the API key to collect
information about the hashira.*/

// divs for flame, water, love, serpent, wind, stone, sound, mist, insect

// sample ui logic: 

// $("button#flame1").click(function(event) {
//   event.preventDefault();
//   let flameOneAnswer = event.target.value;
//   if (flameOneAnswer === "Yes") {
//     $("#flame2").show();
//     $("#flame1").hide();  
//   } else if (flameOneAnswer === "No") {
//     $("#startingDiv").show();
//     $("#flame1").hide();
//   }
// });

// more sammple ui logic:

// $(document).ready(() => {
//   $("#enter").click (() => {
//     $("#main").show();
//     $("#splash").hide();
//   });

// modal test div for fullscreen modal:

// <div class="modal" tabindex="-1">
//   <div class="modal-dialog modal-fullscreen">
//     <div class="modal-content">
//       <div class="modal-body">
//         <p>You must be 18+ to enter.</p>
//         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">OK!</button>
//       </div>
//     </div>
//   </div>
// </div>
