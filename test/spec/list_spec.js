var gitit = require('../../lib/gitit');

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
		expect(l).toBeDefined();
		for (var i = 0; i < expect.length; i++) {
			expect(l[i]).toEqual(values[i]);
		}
	});
	
  it('should be creatable with a name and item array', function() {
	
	});
	
	it('should support adding items', function() {
		
	});
	
	it('should support removing items', function() {
		
	});
	
	it('should support listing all items', function() {
		
	});
	
	it('should be convertable to clear JSON', function() {
		
	});
	
});
