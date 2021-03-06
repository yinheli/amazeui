'use strict';

var $ = require('jquery');

function sohuCSInit() {
  if (!$('#SOHUCS').length) {
    return;
  }

  var $sohucs = $('[data-am-widget="sohucs"]');
  var appid = $sohucs.attr('data-am-sohucs-appid');
  var conf = $sohucs.attr('data-am-sohucs-conf');
  var $cy = $('<script></script>', {
    charset: 'utf-8',
    id: 'changyan_mobile_js',
    src: 'http://changyan.sohu.com/upload/mobile/wap-js/' +
    'changyan_mobile.js?client_id=' + appid + '&conf=' + conf
  });

  $('body').append($cy);
}

// Lazy load
$(window).on('load', sohuCSInit);

module.exports = $.AMUI.sohucs = {
  VERSION: '2.0.0',
  init: sohuCSInit
};
