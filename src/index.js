import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


  // function refresh(){
  //       window.location.reload("Refresh")
  //     }

$(document).ready(() => {
  $(".introContinue").click(() => {
    $(".selector").show();
    $("#intro").hide();
  });
  $("#selectedStyle").click((event) => {
    event.preventDefault();
    const style = $("#styles option:selected").val();
    if (style === "Water") {
      $("#waterine1").show();
      $(".selector").hide();
    } else if (style === "Love") {
      $("#loveine1").show();
      $(".selector").hide();
    } else if (style === "Wind") {
      $("#windine1").show();
      $(".selector").hide(); 
    } else if (style === "Serpent") {
      $("#serpentine1").show();
      $(".selector").hide();
    } else if (style === "Sound") {
      $("#soundine1").show();
      $(".selector").hide();
    } else if (style === "Mist") {
      $("#mistine1").show();
      $(".selector").hide();
    } else if (style === "Insect") {
      $("#insectine1").show();
      $(".selector").hide();
    } else if (style === "Kyojuro Rengoku") { 
      $("#flameline1").show();
      $(".selector").hide();
    } else if (style === "Stone") { 
      $("#stoneine1").show();
      $(".selector").hide();
    }
    console.log(style);
  });
  $("#flame1GoodResponse").click(() => {
    $("#flameline2").show();
    $("#flameline1").hide();
  });
  $("#flame1BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#flameline1").hide();
  });
  $("#flame2GoodResponse").click(() => {
    $("#flameline3").show();
    $("#flameline2").hide();
  });
  $("#flame2BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#flameline2").hide();
  });
  $("#flame3GoodResponse").click(() => {
    $("#flamelineFinal").show();
    $("#flameline3").hide();
  });
  $("#flame3BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#flameline3").hide();
  });
  $("#flameFinalResponse").click(() => {
    $("#intro").show();
    $("#flameLineFinal").hide();
  });
  $("#stone1GoodResponse").click(() => {
    $("#stoneline2").show();
    $("#stoneline1").hide();
  });
  $("#stone1BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#stoneline1").hide();
  });
  $("#stone2GoodResponse").click(() => {
    $("#stoneline3").show();
    $("#stoneline2").hide();
  });
  $("#stone2BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#stoneline2").hide();
  });
  $("#stone3GoodResponse").click(() => {
    $("#stonelineFinal").show();
    $("#stoneline3").hide();
  });
  $("#stone3BadResponse").click(() => {
    $("#stylesDiv").show();
    $("#stoneline3").hide();
  });
  $("#stoneFinalResponse").click(() => {
    $("#intro").show();
    $("#stonelineFinal").hide();
  });
});
