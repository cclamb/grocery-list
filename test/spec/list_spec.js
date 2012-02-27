var gitit = require('../../lib/gitit');

function validateValues(list, values) {
  expect(list).toBeDefined();
	for (var i = 0; i < list.values.length; i++) {
		expect(list.values[i]).toEqual(values[i]);
	}
}

describe('list', function() {
	
  it('should be creatable without args', function() {
		var l = new gitit.List();
		expect(l).toBeDefined();
	});

  it('should be creatable with a name argument', function() {
		var l = new gitit.List({name: 'fooname'});
		expect(l.name).toEqual('fooname');
	});
	
  it('should be creatable with an array of items', function() {
		var values = [1,2,3,4,5];
		var l = new gitit.List({values: values});
		validateValues(l, values);
	});
	
  it('should be creatable with a name and item array', function() {
	  var values = [1,2,3,4,5];
		var l = new gitit.List({values: values, name: 'bar'});
		validateValues(l, values);
		expect(l.name).toEqual('bar');
	});
	
	xit('should support adding items', function() {} );
	
	xit('should support removing items', function() {});
	
	xit('should support listing all items', function() {});
	
	xit('should be convertable to clear JSON', function() {});
	
});
