Template.addBreweryCard.onCreated(function() {
  Session.set('brewerySubmitErrors', {});
});
Template.addBreweryCard.helpers({
  errorMessage: function(field) {
    return Session.get('brewerySubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('brewerySubmitErrors')[field] ? 'has-error' : '';
  }
});


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

		var errors = validateBrewery(brewery);
    		if (errors.brewery_name)
      			return Session.set('brewerySubmitErrors', errors);
      		if (errors.city)
      			return Session.set('brewerySubmitErrors', errors);
      		if (errors.state)
      			return Session.set('brewerySubmitErrors', errors);
		
		Meteor.call('breweryInsert', brewery, function(error, result) {
			if (error)
		
				return throwError(error.reason);

			if (result.emptyBreweryName)
				throwError('You must enter a Brewery Name')
			
	

			if (result.breweryExists)
				throwError('This brewery has already been created');
				Router.go('allBreweryBeers', {_id: result._id})





		});

		Router.go('recentlyAddedBreweries')
		Session.set('breweryCleared', true);
	}
});