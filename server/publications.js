Meteor.publish('breweries', function() {
  return Breweries.find();
});