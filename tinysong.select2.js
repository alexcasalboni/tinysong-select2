(function($){
	
	$.extend($.fn, {
		selectTinysong: function(url){
			
			var $this = $(this).select2({
				placeholder: 'Seach song...',
				minimumInputLength: 3,
				allowClear: true,
		    	multiple: false,
		    	ajax: {
		    		url: url,
		    		quietMillis: 500,
		    		data: function(term, page){
						return {"s": term};
					},
					results: function(data){
						var results = [];
						$.each(data, function(i,item){
							results.push({id: item.SongID, text: item.SongName + ' by ' + item.ArtistName});
						});
						return {more: false,results: results};
					}
				}
			});
			
			
			return this;
			
		}
	});
	
})(jQuery);