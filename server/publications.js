Meteor.publish('breweries', function(options) {
	check(options, {
		sort: Object
	})
	return Breweries.find({}, options);
});

Meteor.publish('singleBrewery', function(id) {
	check(id, String)
	return Breweries.find(id);
});

Meteor.publish('beers', function(){
	return Beers.find();
});

Meteor.publish('beer_reviews', function(){
	return BeerReviews.find();
});

