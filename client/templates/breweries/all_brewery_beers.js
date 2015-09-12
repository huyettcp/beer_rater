Template.allBreweryBeers.helpers({
	beers: function() {
		return Beers.find({breweryId: this._id})
	}
});