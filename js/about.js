$(document).ready(function () {
	$('.animsition-overlay').animsition({
			 inClass: 'overlay-slide-in-right',
			 outClass: 'overlay-slide-out-bottom',
			 overlay : true,
			 overlayClass : 'animsition-overlay-slide',
			 overlayParentElement : 'body'
    		});
  $('[data-toggle="tooltip"]').tooltip(); 
	
  $('a[data-class]').click(function () {
    updateNavbarClass($(this).attr('data-class'));
  });

  updateNavbarClass('navbar-fixed-left');
		
	
function updateNavbarClass(className) {
  $('nav')
    .removeClass(function (index, css) {
      return (css.match(/(^|\s)navbar-fixed-\S+/g) || []).join(' ');
    })
    .addClass(className);

  $('a[data-class]').removeClass('active').parent('li').removeClass('active');
  $('a[data-class="'+className+'"]').addClass('active').parent('li').addClass('active');

  fixBodyPadding(className);

}

function fixBodyPadding(className) {
  if (/navbar-fixed-(left|right)/.test(className)) {
    $('body').removeAttr('style');
    if (className === 'navbar-fixed-right') {
      $('body').css('paddingLeft', 0);
    } else {
      $('body').css('paddingRight', 0);
    }
  } else {
    $('body').css({
      "padding-right": 0,
      "padding-left": 0,
      "padding-top": '70px'
    });
  }
}

	$(function () { // wait for document ready
							// init
							var controller = new ScrollMagic.Controller();

							// define movement of panels
							var wipeAnimation = new TimelineMax()
								.fromTo("section.panel.second", 1, {x: "-150%"}, {x: "0%", ease: Linear.easeNone})  // in from left
								.fromTo("section.panel.third",    1, {x:  "150%"}, {x: "0%", ease: Linear.easeNone});  // in from right
							//	.fromTo("section.panel.fourth", 1, {y: "150%"}, {y: "0%", ease: Linear.easeNone});  in from b

							// create scene to pin and link animation
							new ScrollMagic.Scene({
									triggerElement: "#pinContainer",
									triggerHook: "onLeave",
									duration: "300%"
								})
								.setPin("#pinContainer")
								.setTween(wipeAnimation)
								//.addIndicators() 
								.addTo(controller);
						});
						
						//TOOLTIP
						 if(!$('#tooltipCanvas').tagcanvas({
          textColour: '#342d34',
		  outlineMethod: 'none',
		  tooltip: 'div',
		  tooltipClass: 'tctooltip',
		  tooltipDelay: 100,
          reverse: true,
		  textHeight: 20,
		  textFont: 'Lato, sans-serif',
          depth: 0.8,
          maxSpeed: 0.03,
		  shape: "sphere"
        },'ttctags')) {
          // something went wrong, hide the canvas container
          $('#myCanvasContainer').hide();
        }

		var p1 = $('#aboutTitle');
		var p2 = $('#aboutText');
		var p3 = $('#img1');
		TweenLite.from(p1, 1, {opacity : 0, ease:Elastic.easeOut.config( 1, 0.3), x: -300});
		TweenLite.from(p2, 1, {opacity : 0,  delay:1,  ease:Elastic.easeOut.config( 1, 0.3), x: 300});
		TweenLite.from(p3, 1, {opacity : 0, delay:1});
});
