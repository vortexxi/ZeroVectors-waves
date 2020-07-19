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
			
			//PIN
			// Floating-Fixed table of contents
    setTimeout(function() {
      var tocWrapperHeight = 260; // Max height of ads.
      var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
      var socialHeight = 95; // Height of unloaded social media in footer.
      var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
      var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

      if ($('.barra').length) {
        $('.toc-wrapper').pushpin({
          top: $('.barra').height(),
          bottom: bottomOffset
        });
      }
      else if ($('#index-banner').length) {
        $('.toc-wrapper').pushpin({
          top: $('#index-banner').height(),
          bottom: bottomOffset
        });
      }
      else {
        $('.toc-wrapper').pushpin({
          top: 0,
          bottom: bottomOffset
        });
      }
    }, 100);
			// Pushpin Demo Init
    if ($('.pushpin-demo-nav').length) {
      $('.pushpin-demo-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
      });
    }

    // CSS Transitions Demo Init
    if ($('#scale-demo').length &&
        $('#scale-demo-trigger').length) {
      $('#scale-demo-trigger').click(function() {
        $('#scale-demo').toggleClass('scale-out');
      });
    }

    // Swipeable Tabs Demo Init
    if ($('#tabs-swipe-demo').length) {
      $('#tabs-swipe-demo').tabs({ 'swipeable': true });
    }
	
	//ELASTIC PORTAFOLIO
	    $(function(){
 
        $("#elastic_grid").elastic_grid({
            'items' :
            [
                {
                    'title'         : 'Wireframe & mockup',
                    'description'   : 'Once the graphic identity is defined, it is necesary to make a visual draft wich contains the schematic design and provides a guide of the functionality, after this skeleton is done (wireframe), comes the process to incorporate images, colors and fonts (mock up)',
                    'thumbnail'     : ['img/wireframing-mockUp.png'],
                    'large'         : ['img/wireframing-mockUp.png'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                    ],
                    'tags'          : ['Web developing']
                },
                {
                    'title'         : 'Title #2',
                    'description'   : 'Description text here',
                    'thumbnail'     : ['images/small/4.jpg', 'images/small/5.jpg'],
                    'large'         : ['images/large/4.jpg', 'images/large/5.jpg'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                    ],
                    'tags'          : ['Vintage']
                },
                {
                    'title'         : 'Title #3',
                    'description'   : 'Description text here',
                    'thumbnail'     : ['images/small/15.jpg', 'images/small/2.jpg'],
                    'large'         : ['images/large/15.jpg', 'images/large/2.jpg'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                    ],
                    'tags'          : ['BW']
                }
            ]
        });
    });
	
	
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