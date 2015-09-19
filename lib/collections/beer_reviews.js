BeerReviews = new Mongo.Collection('beer_reviews')


Meteor.methods({
	beerCommentInsert: function(beerCommentAttributes) {
		check(Meteor.userId(), String);
		check(beerCommentAttributes, {
			beer_review_title: String,
			beerId: String,
			body: String,
			rating: Number
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
		$push: {ratings: beer_rating}
	});

	// var average_beer_score = function(){
	// 	var rating_array = beer.ratings
	// 	var total = 0;
	// 	for(var i = 0; i < rating_array.length; i++) {
	// 		total += rating_array[i]
	// 	}
	// 	var avg = total/rating_array.length
	// 	return avg
	// 	console.log (average_beer_score)
	// }

	// Beers.update(beer._id, {

	// })


	return {
		_id: commentId
	};

	}
})