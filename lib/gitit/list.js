
var DEFAULTS = {
  name: 'name'
};

exports.List = function() {
	
	function processValues(to, from) {
		for (var idx in from) {
			to[idx] = from[idx];
		}
	}
	
	return function(args) {
	   this.values = [];
  	 this.name = (args === undefined || args.name === undefined)
    	? DEFAULTS.name
    	: args.name;
		if (!(args === undefined || args.values === undefined)) {
			processValues(this.values, args.values);
		}
	};
	
}();
		

