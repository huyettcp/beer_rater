Template.editBeerCard.helpers({
	// breweries: function() {
	// 	return Breweries.find();
	// },
	brewery_name: function() {
		// var brewery = Breweries.findOne({_id: this.breweryId});
		// return brewery.brewery_name
		return this.breweryId

	}

});

Template.editBeerCard.events({
	'submit form[name="edit_beer"]': function(e, template) {
		e.preventDefault();
		var currentBeerId = this._id;
		var	breweryId = this.breweryId;
		var beerProperties = {
			beer_name: $(e.target).find('[id=update_beer_name]').val(),
			type_of_beer: $(e.target).find('[id=update_type_of_beer]').val(),
			abv: $(e.target).find('[id=update_abv]').val(),
			year_introduced: $(e.target).find('[id=update_year_introduced]').val(),
			breweryId: breweryId

		};


		Beers.update(currentBeerId, {$set: beerProperties}, function(error){
			if (error) {
				throwError(error.reason);
			} else {

		
			}
		});

		}

});
