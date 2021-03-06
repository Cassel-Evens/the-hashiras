import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(() => {
  $("#yes18").click(() => {
    $("#intro").show();
    $("#idCheck").hide();
  });
  $("#no18").click(() => {
    $("#bye").show();
    $("#idCheck").hide();
  });
  $(".introContinue").click(() => {
    $(".selector").show();
    $("#intro").hide();
  });
  $("#selectedStyle").click(() => {
    const style = $("#styles option:selected").val();
    $(style).show();
    $(".selector").hide();
  });
  $("#flame1Yes").click(() => {
    $("#flameline2").show();
    $("#flameline1").hide();
  });
  $("#flame1No").click(() => {
    $("#failure").show();
    $("#flameline1").hide();
  });
  $("#flame2Yes").click(() => {
    $("#flameline3").show();
    $("#flameline2").hide();
  });
  $("#flame2No").click(() => {
    $("#failure").show();
    $("#flameline2").hide();
  });
  $("#flame3Yes").click(() => {
    $("#flamelinefinal").show();
    $("#flameline3").hide();
  });
  $("#flame3No").click(() => {
    $("#failure").show();
    $("#flameline3").hide();
  });
  $("#flameFinalResponse").click(() => {
    $("#intro").show();
    $("#flamelinefinal").hide();
  });
  $("#stone1Yes").click(() => {
    $("#stoneline2").show();
    $("#stoneline1").hide();
  });
  $("#stone1No").click(() => {
    $("#failure").show();
    $("#stoneline1").hide();
  });
  $("#stone2Yes").click(() => {
    $("#stoneline3").show();
    $("#stoneline2").hide();
  });
  $("#stone2No").click(() => {
    $("#failure").show();
    $("#stoneline2").hide();
  });
  $("#stone3Yes").click(() => {
    $("#stonelinefinal").show();
    $("#stoneline3").hide();
  });
  $("#stoneFinalResponse").click(() => {
    $("#intro").show();
    $("#stonelinefinal").hide();
  });
  $("#insect1Yes").click(() => {
    $("#insectline2").show();
    $("#insectline1").hide();
  });
  $("#insect1No").click(() => {
    $("#failure").show();
    $("#insectline1").hide();
  });
  $("#insect2Yes").click(() => {
    $("#insectline3").show();
    $("#insectline2").hide();
  });
  $("#insect2No").click(() => {
    $("#failure").show();
    $("#insectline2").hide();
  });
  $("#insect3Yes").click(() => {
    $("#insectlinefinal").show();
    $("#insectline3").hide();
  });
  $("#insect3No").click(() => {
    $("#failure").show();
    $("#insectline3").hide();
  });
  $("#insectfinal").click(() => {
    $("#failure").show();
    $("#insectlinefinal").hide();
  });
  $("#1snakeNo").click(() => {
    $("#failure").show();
    $("#snakereject").hide();
  });
  $("#1waterNo").click(() => {
    $("#failure").show();
    $("#waterreject").hide();
  });
  $("#1soundNo").click(() => {
    $("#failure").show();
    $("#soundreject").hide();
  });
  $("#1windNo").click(() => {
    $("#failure").show();
    $("#windreject").hide();
  });
  $("#1loveNo").click(() => {
    $("#failure").show();
    $("#lovereject").hide();
  });
  $("#1mistNo").click(() => {
    $("#failure").show();
    $("#mistreject").hide();
  });
  $("#restart").click (() => {
    $(".selector").show();
    $("#failure").hide();
  });
});