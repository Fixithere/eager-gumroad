window.EagerGumroad = {
  init: function(options) {
	(function() {
		var gumroad   = document.createElement('script');
		gumroad.type  = 'text/javascript';
		gumroad.id    = 'gumroad-overlay';
		gumroad.src = '//gumroad.com/js/gumroad.js';
		var source = document.getElementsByTagName('script')[0];
		source.parentNode.insertBefore(gumroad, source);
	})();
  }
};
