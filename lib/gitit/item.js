
var DEFAULTS = {
  name: 'name',
  description: 'description'
}

exports.Item = function(args) {
  this.name = (args === undefined || args.name === undefined) 
    ? DEFAULTS.name 
    : args.name;
  this.description = (args === undefined || args.description === undefined) 
    ? DEFAULTS.description 
    : args.description;
};
