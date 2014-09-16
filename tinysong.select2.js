(function($){
	
	$.extend($.fn, {
		selectTinysong: function(url){
			
			var select2 = $(this).select2({
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
							results.push($.extend({id: item.SongID, text: item.SongName + " by " + item.ArtistName}, item));
						});
						return {more: false,results: results};
					}
				},
				formatResult: function(item, container, query){
					var html = "",
						noEscape = function(h){return h;},
						songNameMarkup = [],
						songArtistMarkup = [];
					
					Select2.util.markMatch(item.SongName,   query.term, songNameMarkup,   noEscape);
					Select2.util.markMatch(item.ArtistName, query.term, songArtistMarkup, noEscape);
					
					html += "<div class='tinysong-item'>";
					html +=		"<a href='"+item.Url+"' class='preview-link pull-right' title='Open GrooveShark preview in new window!'><span class='glyphicon glyphicon-play-circle'></span></a>";
					html += 	"<strong>" + songNameMarkup.join("") + "</strong>";
					html += 	"<br/> by ";
					html += 	"<em>" + songArtistMarkup.join("") + "</em>";
					html += "</div>";
					
					return html;
				}
			}).data('select2');
			
			select2.onSelect = (function(fn) {
				return function(data, options) {
			        var target;
			        
			        if (options != null) {
			            target = $(options.target);
			        }
			        
			        if (target && target.parent().hasClass('preview-link')) {
			            window.open(target.parent().attr('href'));
			        }else{
			        	return fn.apply(this, arguments);
			        }
			    }
			})(select2.onSelect);
			
			
			return this;
			
		}
	});
	
})(jQuery);