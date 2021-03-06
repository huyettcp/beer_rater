BeerReviews = new Mongo.Collection('beer_reviews')


Meteor.methods({
	beerCommentInsert: function(beerCommentAttributes) {
		check(Meteor.userId(), String);
		check(beerCommentAttributes, {
			beer_review_title: String,
			beerId: String,
			body: String,
			rating: Number,
			aroma: Number,
			appearance: Number,
			taste: Number
		});
	var user = Meteor.user();
	var comment = _.extend(beerCommentAttributes, {
		userId: user._id,
		author: user.username,
		submitted: new Date()
	});

	var commentId = BeerReviews.insert(comment);
	var beer = Beers.findOne(beerCommentAttributes.beerId)
	var beer_rating = beerCommentAttributes.rating


	Beers.update(beer._id, {
		$push: {ratings: beer_rating},
	});
	




	return {
		_id: commentId
	};

	}
})