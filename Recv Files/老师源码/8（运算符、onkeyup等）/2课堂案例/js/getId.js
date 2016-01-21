	function $( para ){
			var paraP = typeof para;
			paraP = paraP.toLowerCase();
			if  ( typeof paraP == 'string')
				{
					return document.getElementById( para );
				}
			}
