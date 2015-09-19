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

Meteor.publish('beers', function(options){
	check(options, {
		sort: Object
	})
	return Beers.find({}, options);
});

Meteor.publish('beer_breweries_list', function() {
	return Breweries.find();
});


Meteor.publish('singleBeer', function(id) {
	check(id, String)
	return Beers.find(id);
});

Meteor.publish('beer_reviews', function(){
	return BeerReviews.find();
});

