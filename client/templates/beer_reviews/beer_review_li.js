Template.beerReviewLi.helpers({	

	cleanDate: function() {
		date = new Date(this.submitted)
		return date.toDateString()
	}
});