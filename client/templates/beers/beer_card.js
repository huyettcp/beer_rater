Template.beerCard.onCreated(function(){
	this.editingABeer = new ReactiveVar(false)

});


Template.beerCard.helpers({
	breweries: function() {
		return Breweries.find();
	},

	brewery_name: function() {
		var brewery = Breweries.findOne({_id: this.breweryId});
		return brewery.brewery_name

	},
	editingABeer: function() {
		return Template.instance().editingABeer.get();
	},
	ownBeer: function() {
  		return this.userId === Meteor.userId();
 	},
 	beerReviewCount: function() {
		return BeerReviews.find({beerId: this._id}).count()

	},
	averageReviewScore: function(){
		var rating_array = this.ratings
		var total = 0;
		for(var i = 0; i < rating_array.length; i++) {
			total += rating_array[i]
		}
		var avg = total/rating_array.length
		if (avg > 0) {
			return avg
		} else {
			return "No reviews yet"
		}
	}
});

Template.beerCard.events({
	'click #enter_edit_beer': function(e, template) {
		template.editingABeer.set(true);

	},
	'click #cancel_edit_beer': function(e, template) {
		template.editingABeer.set(false);
	},
	'submit form': function(e, template) {
		template.editingABeer.set(false);
	},
	'click #delete_beer': function(e, template) {
		e.preventDefault();

		if (confirm("Delete this beer?")) {
			var currentBeerId = this._id;
			Beers.remove(currentBeerId);
		};
	},
	'click #add_review': function() {
		beerIdForRouter = this._id
		Session.set('beerIdForRouter', beerIdForRouter)
	}

})