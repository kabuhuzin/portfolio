'use strict';
const $ = require('jquery');

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

  var scr = $('.scr');
  var b = $('.b');
  var all = $('.all')
  b.click(function () {
    scr.text('scrollTop:' + $(window).scrollTop());
  });
  var tag1 = $('.tag1')
$(window).scroll(function () {
  tag1.each(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 400) {
      tag1.css('opacity','1');
    }else{
      tag1.css('opacity','0');
    }
  });
});
});