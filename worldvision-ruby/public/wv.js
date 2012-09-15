var WorldVision = {
  parseURL: function wv_parseURL() {
    this.URL = $.url.parse();
  },

  bindEvents: function wv_bind() {
    $('ul.nav.nav-list a').click(function() {
      var target = $(this).attr('href');
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      $(target).siblings().hide();
      $(target).show();
    });
  },

  view: function wv_view() {
    if (this.URL.params.em_start) {
      $('.pagination:visible li.active').removeClass('active');
      $('.pagination:visible ul:nth-child('+this.URL.params.em_start+')').addClass('active');
    }
  },

  init: function wv_init() {
    this.parseURL();
    this.bindEvents();
    this.view();
  }
};

WorldVision.init();
