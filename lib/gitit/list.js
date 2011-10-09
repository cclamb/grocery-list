
var DEFAULTS = {
  name: 'name'
};

exports.List = function() {
	
	function processValues(values) {
		for (var idx in values) {
			this[idx] = values[idx];
		}
	}
	
	return function(args) {
  	this.name = (args === undefined || args.name === undefined)
    	? DEFAULTS.name
    	: args.name;
		if (!(args === undefined || args.values === undefined)) {
			processValues(args.values);
		}
	};
	
}();
		

