Template.allBreweryBeers.rendered = function () {
	$('.modal-trigger').leanModal();
	Session.set('formContext', 'allBreweryBeers')

};


Template.allBreweryBeers.helpers({
	beers: function() {
		return Beers.find({breweryId: this._id})
	}

});

Template.allBreweryBeers.events({
	'click .jump_to_review': function() {
		beerIdForRouter = this._id
		Session.set('beerIdForRouter', beerIdForRouter)
	}
});