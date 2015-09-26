Template.addBreweryCard.events({
	'submit form[name="add_brewery_form"]': function(e, template) {
		e.preventDefault();
		
		var upper_case_brewery_name = $(e.target).find('[id=brewery_name]').val()

		String.prototype.toProperCase = function () {
    		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		};

		var brewery_name = upper_case_brewery_name.toProperCase();

		var brewery = {
			brewery_name: brewery_name,
			city: $(e.target).find('[id=city]').val(),
			state: $(e.target).find('[id=state]').val()

		};
		
		Meteor.call('breweryInsert', brewery, function(error, result) {
			if (error)
		
				return throwError(error.reason);

			if (result.emptyBreweryName)
				throwError('You must enter a Brewery Name')

			if (result.breweryExists)
				throwError('This link has already been posted');
				Router.go('allBreweryBeers', {_id: result._id})





		});

		Router.go('recentlyAddedBreweries')
	}
});