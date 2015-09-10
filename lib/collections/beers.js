Beers = new Mongo.Collection('beers');

Beers.allow({
	update: function(userId, beer) {return ownsDocument(userId, beer); },
	remove: function(userId, beer) {return ownsDocument(userId, beer); }
});

Beers.deny({
update: function(userId, beer, fieldNames) {
		return(_.without(fieldNames, 'beer_name', 'type_of_beer', 'abv', 'year_introduced').length > 0);
	}
});



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