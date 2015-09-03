Meteor.publish('breweries', function() {
  return Breweries.find();
});

Meteor.publish('beers', function(){
	return Beers.find();
});