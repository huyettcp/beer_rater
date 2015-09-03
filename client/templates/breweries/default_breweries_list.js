Template.defaultBreweriesList.helpers({
  breweries: function() {
    return Breweries.find();
  }
});