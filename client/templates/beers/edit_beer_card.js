Template.editBeerCard.helpers({
	breweries: function() {
		return Breweries.find();
	}
});

Template.editBeerCard.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var currentBeerId = this._id;

		var breweryId = $(e.target).find("select[name=brewery_id_dropdown]").val()

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
				// Router.go("breweryPage", {_id: currentBreweryId});
		
			}
		});

		}

});
