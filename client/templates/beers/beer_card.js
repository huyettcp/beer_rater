Template.beerCard.onCreated(function(){
	this.editingABeer = new ReactiveVar(false)

});


Template.beerCard.helpers({
	breweryName: function() {
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


	}

})