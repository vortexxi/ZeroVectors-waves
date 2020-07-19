$(document).ready(function () {
  $('a[data-class]').click(function () {
    updateNavbarClass($(this).attr('data-class'));
  });
$('[data-toggle="tooltip"]').tooltip();   

  updateNavbarClass('navbar-fixed-left');
$('.animsition-overlay').animsition({
			 inClass: 'overlay-slide-in-right',
			 outClass: 'overlay-slide-out-bottom',
			 overlay : true,
			 overlayClass : 'animsition-overlay-slide',
			 overlayParentElement : 'body'
    		});
			
			var slide3 = $('.intro3');
			TweenLite.from(slide3, 1, {opacity : 0,  delay:1.5,  ease:Elastic.easeOut.config( 1, 0.3), x: 300});
			var slide1 = $('.intro1');
			TweenLite.from(slide1, 1, {opacity : 0,  delay:1,  ease:Elastic.easeOut.config( 1, 0.3), x: -300});
			var slide2 = $('.intro2');
			TweenLite.from( slide2, 1.3, {opacity : 1, ease:Back.easeInOut.config( 1.7),y: -500});
});
			
	
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