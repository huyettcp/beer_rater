Template.beerPartial.helpers({
	averageReviewScore: function(){
		var rating_array = this.ratings
		var total = 0;
		for(var i = 0; i < rating_array.length; i++) {
			total += rating_array[i]
		}
		var avg = total/rating_array.length
		return avg
	}

});