Beers = new Mongo.Collection('beers');

Meteor.methods({
	beerInsert: function(beerAttributes){
		check(Meteor.userId(), String);
		check(beerAttributes, {
			beer_name: String,
			type_of_beer: String,
			abv: String,
			year_introduced: String,
			breweryId: String
		});
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