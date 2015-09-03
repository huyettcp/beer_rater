Breweries = new Mongo.Collection('breweries')

Meteor.methods({
	breweryInsert: function(breweryAttributes) {
		check(Meteor.userId(), String);
		check(breweryAttributes, {
			brewery_name:String,
			city:String,
			state:String
		});

		var breweryWithSameName = Breweries.findOne({brewery_name: breweryAttributes.brewery_name});
		if (breweryWithSameName) {
			return{
				breweryExists: true,
				_id: breweryWithSameName
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