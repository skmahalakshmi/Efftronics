$(function(){
  //Registering service workers on website
//   if ('serviceWorker' in navigator) {
//       window.addEventListener('load', function() {
//         navigator.serviceWorker.register('jsv2/eff-service-worker.js').then(function(registration) {
//           // Registration was successful
//           console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }, function(err) {
//           // registration failed :(
//           console.log('ServiceWorker registration failed: ', err);
//         });
//       });
//     }

    console.log("Welcome to Efftronics Systems Pvt Ltd");
    $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            });
   //Code for Number facts
   "use strict";
        function count($this){
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */
        $this.html(++current);
            if(current > $this.data('count')){
                $this.html($this.data('count'));
            } else {
                setTimeout(function(){count($this)}, 50);
            }
        }
        $(".stat-count").each(function() {
          $(this).data('count', parseInt($(this).html(), 10));
          $(this).html('0');
          count($(this));
        });
//end of Number facts
    });
    $("#smart-signaling").mouseover(function(){
        $(".ssCol").css("z-index", "2");
        $(".sbCol").css("z-index", "1");
        $(".scCol").css("z-index", "1");
        $(".iotCol").css("z-index", "1");
    });
    $("#smart-buildings").mouseover(function(){
        $(".ssCol").css("z-index", "1");
        $(".sbCol").css("z-index", "2");
        $(".scCol").css("z-index", "1");
        $(".iotCol").css("z-index", "1");
    });
    $("#smart-cities").mouseover(function(){
        $(".ssCol").css("z-index", "1");
        $(".sbCol").css("z-index", "1");
        $(".scCol").css("z-index", "2");
        $(".iotCol").css("z-index", "1");
    });
    $("#iot-solutions").mouseover(function(){
        $(".ssCol").css("z-index", "1");
        $(".sbCol").css("z-index", "1");
        $(".scCol").css("z-index", "1");
        $(".iotCol").css("z-index", "2");
    });
//segment nav bar scroll fix
    $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('#scrollNav').removeClass('segNav');
        $('#scrollNav').addClass('navbar-fixed-top');
        $('.segXSnav').addClass('navbar-fixed-top');
    } else {
        $('#scrollNav').removeClass('navbar-fixed-top');
        $('#scrollNav').addClass('segNav');
        $('.segXSnav').removeClass('navbar-fixed-top');
    }
    });
