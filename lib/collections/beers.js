Beers = new Mongo.Collection('beers');

Beers.allow({
	update: function(userId, beer) {return ownsDocument(userId, beer); },
	remove: function(userId, beer) {return ownsDocument(userId, beer); }
});




Meteor.methods({
	beerInsert: function(beerAttributes){
	var noBrewerySelected = beerAttributes.breweryId
	if (typeof(noBrewerySelected) !== 'string') {
		return{
			noBrewerySelected: true
		}
	}
		check(Meteor.userId(), String);
		check(beerAttributes, {
			beer_name: String,
			type_of_beer: String,
			abv: String,
			year_introduced: String,
			breweryId: String
		});


	var emptyNameCheck = beerAttributes.beer_name
	if (emptyNameCheck.length == 0) {
		return {
			emptyBeerName: true
		}
	}


	var beerWithSameName = Beers.findOne({beer_name: beerAttributes.beer_name})
	if (beerWithSameName) {
		return {
			beerExists: true,
			_id: beerWithSameName
		}
	}
	var user = Meteor.user();
	var beer = _.extend(beerAttributes, {
		userId: user._id,
		author: user.username,
		ratings: [],
		submitted: new Date()
	});

	var beerId = Beers.insert(beer);
	}
});














