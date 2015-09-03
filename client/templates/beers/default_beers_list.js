Template.defaultBeersList.helpers({
  beers: function() {
    return Beers.find();
  }
});