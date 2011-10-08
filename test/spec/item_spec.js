var gitit = require('../../lib/gitit');

describe('item', function() {

  it('should be creatable', function() {
    var item = new gitit.Item({name: 'foo'});
    expect(item).not.toBeNull();
  });
  
  it('should have a settable name', function() {
    var item = new gitit.Item({name: 'bar'});
    expect(item.name).toEqual('bar');
  });
  
  it('should be creatable without an argument', function() {
    var item = new gitit.Item();
    expect(item).not.toEqual(undefined);
  });
  
  it('should set a default name if no name is set', function() {
    var item = new gitit.Item();
    expect(item.name).not.toEqual(undefined);
  });
  
  it('should have a settable description', function() {
    var item = new gitit.Item();
    item.description = 'desc';
    expect(item.description).toEqual('desc');
  });
  
  it('should handle setting only a description in the ctor', function() {
    var item = new gitit.Item({ description: 'thing that does something' });
    expect(item.description).toEqual('thing that does something');
  });
  
  it('should handle name and description in the ctor', function() {
    var item = new gitit.Item({ name: 'noodles', description: 'yummy' });
    expect(item.description).toEqual('yummy');
    expect(item.name).toEqual('noodles');
  });

});
