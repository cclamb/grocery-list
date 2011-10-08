
var DEFAULTS = {
  name: 'name'
};

exports.List = function(args) {
  this.name = (args === undefined || args.name == undefined)
    ? DEFAULTS.name
    : args.name;
};
