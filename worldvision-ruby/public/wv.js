var WorldVision = {
  parseURL: function wv_parseURL() {
    this.URL = $.url.parse();
  },

  bindEvents: function wv_bind() {
    $('ul.nav.nav-list a').click(function(event) {
      var target = $(this).attr('href');
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      $(target).siblings().hide();
      $(target).show();

      event.preventDefault();
    });
  },

  view: function wv_view() {
    // Emergency
    if (this.URL.params && this.URL.params.em_start) {
      $('.pagination:visible li.active').removeClass('active');
      $('.pagination:visible ul li:nth-child('+this.URL.params.em_start+')').addClass('active');
      $('ul.nav.nav-list li.active').removeClass('active');
      if (this.URL.params.type == 'eng') {
        $('ul.nav.nav-list a[href="#tabs-1"]').parent().addClass('active');
        $('#tabs-1').siblings().hide();
        $('#tabs-1').show();
      } else {
        $('#tabs-4').siblings().hide();
        $('#tabs-4').show();
        $('ul.nav.nav-list a[href="#tabs-4"]').parent().addClass('active');
      }
    } else if (this.URL.params && this.URL.params.hw_start) {
      $('.pagination:visible li.active').removeClass('active');
      $('.pagination:visible ul li:nth-child('+this.URL.params.hw_start+')').addClass('active');
      $('ul.nav.nav-list li.active').removeClass('active');
      $('ul.nav.nav-list a[href="#tabs-2"]').parent().addClass('active');
      $('#tabs-2').siblings().hide();
      $('#tabs-2').show();
    } else if (this.URL.params && this.URL.params.ty_start) {
      $('.pagination:visible li.active').removeClass('active');
      $('.pagination:visible ul li:nth-child('+this.URL.params.ty_start+')').addClass('active');
      $('ul.nav.nav-list li.active').removeClass('active');
      $('ul.nav.nav-list a[href="#tabs-3"]').parent().addClass('active');
      $('#tabs-3').siblings().hide();
      $('#tabs-3').show();
    } else if (this.URL.params && this.URL.params.start) {
      $('.pagination:visible li.active').removeClass('active');
      $('.pagination:visible ul li:nth-child('+this.URL.params.start+')').addClass('active');
      $('ul.nav.nav-list li.active').removeClass('active');
      $('ul.nav.nav-list a[href="#tabs-5"]').parent().addClass('active');
      $('#tabs-5').siblings().hide();
      $('#tabs-5').show();
    }

    if (this.URL.params && this.URL.params.type && this.URL.anchor) {
      $('ul.nav.nav-list li.active').removeClass('active');
      $('ul.nav.nav-list a[href="#'+this.URL.anchor+'"]').parent().addClass('active');
    }
  },

  init: function wv_init() {
    this.parseURL();
    this.bindEvents();
    this.view();
    this.browserDetect();
  },

  browserDetect: function wv_browserDetect() {
    if ($.browser.msie && ($.browser.version == '7.0' || $.browser.version == '6.0')) {
      $('#browser-warning').show();
    } else {
      $('#browser-warning').hide();
    }
  }
};

WorldVision.init();
