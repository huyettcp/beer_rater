Template.allBreweryBeers.rendered = function () {
	$('.modal-trigger').leanModal();
	Session.set('formContext', 'allBreweryBeers')
};

Template.allBreweryBeers.helpers({
	beers: function() {
		return Beers.find({breweryId: this._id})
	}

});