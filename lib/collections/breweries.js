Breweries = new Mongo.Collection('breweries')

Breweries.allow({
 	update: function(userId, brewery) {return ownsDocument(userId, brewery); },
	remove: function(userId, brewery) {return ownsDocument(userId, brewery); }
});

Breweries.deny({
	update: function(userId, brewery, fieldNames) {
		return(_.without(fieldNames, 'brewery_name', 'city', 'state').length > 0);
	}
});

validateBrewery = function (brewery) {
  var errors = {};
  if (!brewery.brewery_name)
    	errors.brewery_name = "Please add a brewery name";
  if (!brewery.city)
    	errors.city = "Please add a city";
  if (!brewery.state)
  		errors.state = "Please add a state";

  return errors;
}


Meteor.methods({
	breweryInsert: function(breweryAttributes) {
		check(Meteor.userId(), String);
		check(breweryAttributes, {
			brewery_name:String,
			city:String,
			state:String
		});

		var emptyNameCheck = breweryAttributes.brewery_name

		if (emptyNameCheck.length == 0) {
			return{
				emptyBreweryName: true
			}

		}

		var breweryWithSameName = Breweries.findOne({brewery_name: breweryAttributes.brewery_name});
		if (breweryWithSameName) {
			return{
				breweryExists: true,
				_id: breweryWithSameName._id
			}
		}





		var user = Meteor.user();
		var brewery = _.extend(breweryAttributes, {
			userId: user._id, 
      		author: user.username, 
      		submitted: new Date()
		});
		var breweryId = Breweries.insert(brewery)
	}
});