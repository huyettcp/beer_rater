Meteor.publish('breweries', function() {
  return Breweries.find();
});

Meteor.publish('beers', function(){
	return Beers.find();
});

Meteor.publish('beer_reviews', function(){
	return BeerReviews.find();
})