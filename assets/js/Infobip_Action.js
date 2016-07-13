(function($){
	/*
		* @actionArray is array to store all the methods which is handling from clickHandle method.
		*/
		var actionArray = {
			open: function(e){
				var getid = $(this[0].target).data('id');
				$.toaster({ message : getid, title : 'Open Action', priority : 'warning' });
			},
			delete: function(e){
				var getid = $(this[0].target).data('id');
				$.toaster({ message : getid, title : 'Delete Action', priority : 'info' });
			},
			print: function(e){
				var getid = $(this[0].target).data('id');
				$.toaster({ message : getid, title : 'Print Action', priority : 'success' });
			}
		};

		function nameNotInArray(e, jqo){
			$.toaster({ message : 'Function name not defined', title : 'Exception', priority : 'danger' });
			return false;
		}

		/*
		* @clickHandle is responsible for attach the event to matched element like "data-actionname".
		*/
		// var clickHandle = function(e, jqobj) { 
		var clickHandle = function(e, opt) {
			// console.log(opt);
			if($(e.target).data('actionname') != undefined && $(e.target).data('actionname') != null){
				if( opt[$(e.target).data('actionname')] ){
					opt[$(e.target).data('actionname')].call(this, e.target);
				}else{
					nameNotInArray(e, $(this).data('actionname'));
				}
			}
	    }
	$.fn.handleEvent = function(options){
		var defaults = {
			print: null,
			open: null,
			delete: null
		};
		options = $.extend(true, {}, defaults, options);
		return this.each(function() {
        	$(this).find('[data-actionname]').on('click', function(e){
        		clickHandle(e, options);
        	});
	    });
	    
	}

})(jQuery);
