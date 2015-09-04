Template.editBreweryCard.onCreated(function(){


});

Template.editBreweryCard.events({

	'submit form': function(e, template){

		e.preventDefault();

		
		var currentBreweryId = this._id;

		var breweryProperties = {
			brewery_name: $(e.target).find('[id=update_brewery_name]').val(),
			city: $(e.target).find('[id=update_city]').val(),
			state: $(e.target).find('[id=update_state]').val()
	
		};

		console.log(breweryProperties)


		Breweries.update(currentBreweryId, {$set: breweryProperties}, function(error){
			if (error) {
				throwError(error.reason);
			} else {
				// Router.go("breweryPage", {_id: currentBreweryId});
		
			template.showEditForm.set(false);
			}
		});

	}

});
