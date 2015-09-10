Template.beerReviewCard.helpers({

});

Template.beerReviewCard.events({
	'click #cancel_add_review': function() {
		Router.go("defaultBeersList")
	},

	'submit form': function(e, template){
		e.preventDefault();

		var rating_number = $(e.target).find("select[name=beer_rating]").val()
		var int_rating_number = parseInt(rating_number)
		console.log(this._id)
		var beer_review = {
			beer_review_title: $(e.target).find('[id=beer_review_title]').val(),
			beerId: this._id,
			body: $(e.target).find('[id=review_text_area]').val(),
			rating: int_rating_number
		};
		e.target.reset();



		Meteor.call('beerCommentInsert', beer_review, function(error, result) {
			if (error)
				return error
		});
	}

});