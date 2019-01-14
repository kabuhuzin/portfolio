'use strict';
import $ from 'jquery';

$(function () {
  var proposi =  $('#pro').offset().top;
  var workposi = $('#work').offset().top;

  $('.rg').click(function () {
    $('html,body').animate({scrollTop: 0}, 500,'swing');
    return false;
  });
  $('.rg1').click(function () {
    $('html,body').animate({scrollTop: proposi}, 500,'swing');
    return false;
  });
  $('.rg2').click(function () {
    $('html,body').animate({scrollTop: workposi}, 500,'swing');
    return false;
  });

});