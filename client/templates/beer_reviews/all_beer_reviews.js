Template.allBeerReviews.helpers({

	brewery: function() {
		var brewery = Breweries.findOne({_id: this.breweryId});
		return brewery
	
	},
	beerReviews: function() {
		return BeerReviews.find({beerId: this._id})
	},
	averageReviewScore: function(){
		var rating_array = this.ratings
		var total = 0;
		for(var i = 0; i < rating_array.length; i++) {
			total += rating_array[i]
		}
		var avg = total/rating_array.length
		return avg
	},
	beerReviewCount: function() {
		return BeerReviews.find({beerId: this._id}).count()

	},

	cleanDate: function() {
		date = new Date(this.submitted)
		return date.toDateString()
	}

});

