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
	}

})