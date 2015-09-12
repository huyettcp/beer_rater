Template.editBreweryCard.events({

	'submit form[name="edit_brewery_form"]': function(e, template) {

		e.preventDefault();

		
		var currentBreweryId = this._id;

		var breweryProperties = {
			brewery_name: $(e.target).find('[id=update_brewery_name]').val(),
			city: $(e.target).find('[id=update_city]').val(),
			state: $(e.target).find('[id=update_state]').val()
	
		};


		Breweries.update(currentBreweryId, {$set: breweryProperties}, function(error){
			if (error) {
				throwError(error.reason);
			} else {
				// Router.go("breweryPage", {_id: currentBreweryId});
		
			}
		});

	}

});
