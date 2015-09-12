Meteor.publish('breweries', function(options) {
	check(options, {
		sort: Object,
		limit: Number
	})
	return Breweries.find({}, options);
});

Meteor.publish('beers', function(){
	return Beers.find();
});

Meteor.publish('beer_reviews', function(){
	return BeerReviews.find();
});

