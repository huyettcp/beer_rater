Template.beerReviewCard.rendered = function() {


};


Template.beerReviewCard.events({
	'click #cancel_add_review': function() {
		var context = Session.get('formContext')

		if (context == "allBreweryBeers"){
			Router.go('recentlyAddedBreweries')
		} else {
			Router.go("defaultBeersList")
		}

			
	},

	'submit form': function(e, template){
		e.preventDefault();

		var rating_number = $(e.target).find("select[name=beer_rating]").val()
		var rating_aroma = $(e.target).find("select[name=beer_rating]").val()
		var rating_appearance = $(e.target).find("select[name=beer_rating]").val()
		var rating_taste = $(e.target).find("select[name=beer_rating]").val()
		var int_rating_number = parseInt(rating_number)
		var int_rating_aroma = parseInt(rating_aroma)
		var int_rating_appearance = parseInt(rating_appearance)
		var int_rating_taste  = parseInt(rating_taste)
		var beer_review = {
			beer_review_title: $(e.target).find('[id=beer_review_title]').val(),
			beerId: this._id,
			body: $(e.target).find('[id=review_text_area]').val(),
			rating: int_rating_number,
			aroma: int_rating_aroma,
			appearance: int_rating_appearance,
			taste: int_rating_taste
		};
		e.target.reset();

		var beerIdForRouter = Session.get('beerIdForRouter')
		Meteor.call('beerCommentInsert', beer_review, function(error, result) {
			if (error)
				return error
			else
				Router.go('allBeerReviews', {_id: beerIdForRouter})

		});


		
	}

});





