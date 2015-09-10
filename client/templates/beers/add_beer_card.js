Template.addBeerCard.helpers({
	breweries: function() {
		return Breweries.find();
	},

});

Template.addBeerCard.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var breweryId = $(e.target).find("select[name=brewery_id_dropdown]").val()

		var beer = {
			beer_name: $(e.target).find('[id=beer_name]').val(),
			type_of_beer: $(e.target).find('[id=type_of_beer]').val(),
			abv: $(e.target).find('[id=abv]').val(),
			year_introduced: $(e.target).find('[id=year_introduced]').val(),
			breweryId: breweryId

		}

		e.target.reset();
		Meteor.call('beerInsert', beer, function(error, result) {
			if (error)
				return alert(error.reason)
			if (result.beerExists)
				alert("We already have this beer")
		});

	}
})