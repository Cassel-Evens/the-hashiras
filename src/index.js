import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(() => {
  $("#introContinue").click  (() => {
    $("#styles").show();
    $("#intro").hide()
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
