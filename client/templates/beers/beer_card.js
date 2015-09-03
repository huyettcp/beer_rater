Template.beerCard.helpers({
	breweryName: function() {
		var brewery = Breweries.findOne({_id: this.breweryId});
		return brewery.brewery_name
	
	}
});