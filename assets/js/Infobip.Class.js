var InfobipModule = (function($){
	/**
	*	@InfobipModule Main Class.
	*/ 
	function InfobipModule(){}
	/**
	*	@init Initialize Main Class.
	*/ 
	function init(){
		getData('./assets/datamodels/mockupdata.json').then(function(result){
			var data = _.extend({"model": result.data}, {"cssChange": cssChange});
			renderView('listview', data );
			$('#listview').handleEvent({
				print: function(e){
					var getid = $(e).data('id');
					$.toaster({ message : getid, title : 'Print Action', priority : 'success' });
				},
				open: function(e){
					var getid = $(e).data('id');
					$.toaster({ message : getid, title : 'Open Action', priority : 'info' });
				},
				delete: function(e){
					var getid = $(e).data('id');
					$.toaster({ message : getid, title : 'Delete Action', priority : 'danger' });
				}
			});
			$('#listview').handleNewEvent({
				propertyName: 'Tameshwar'
			});
		});
	};
	/**
	*	@getData GET Method: passing service url to get data from json (accept only json).
	*/ 
	function getData(url){
		return $.ajax({url: url, type:'GET', dataType:'json'});
	}
	/**
	*	@renderView method to render the view to particular id with data.
	*/
	function renderView(id, data){
		var template = _.template($( "script#listTemplate" ).html());
		$('#'+id).html( template(data) );
	};
	/*
	*@ class change method
	*/
	function cssChange(msgtype){
		if(msgtype === 1){
			return 'fa-money';
		}
		else if(msgtype === 2){
			return 'fa-film';
		}
		else if(msgtype === 3){
			return 'fa-group';
		}
		else if(msgtype === 4){
			return 'fa-lock';
		}
		else{
			return 'fa-envelope';
		}
	}

	/**
	*	@Defining methods to Main Class.
	*/
	InfobipModule.prototype = {
		init: init,
		renderView: renderView,
		getData: getData,
		cssChange: cssChange
	};

	return InfobipModule
})(jQuery);
