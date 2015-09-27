Template.addBeerCard.rendered = function () {

	Session.get('formContext', 'allBreweryBeers')


};

Template.addBeerCard.helpers({
	onBreweryBeerList: function(){
	var context = Session.get('formContext')

	if (context == "allBreweryBeers"){
		return true
	} else {
		return false
	}
	},
	breweries: function() {
		return Breweries.find();
	}
})

Template.addBeerCard.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var upper_case_beer_name = $(e.target).find('[id=beer_name]').val()

		String.prototype.toProperCase = function () {
    		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		};

		var beer_name = upper_case_beer_name.toProperCase();

		var breweryId = $(e.target).find("select[name=brewery_id_dropdown]").val()

		var beer = {
			beer_name: beer_name,
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
		var context = Session.get('formContext')
		console.log(context)

		if (context == "allBreweryBeers") {
			  $('#modal1').closeModal();

		} else {
			Router.go("newBeersList")
			$('#modal1').closeModal();
		}

	}
});

























