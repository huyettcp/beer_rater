Template.defaultBreweriesList.onCreated(function(){
	this.addingABrewery = new ReactiveVar(false);

});

Template.defaultBreweriesList.helpers({
  breweries: function(){
    return Breweries.find();
  },
  addingABrewery: function(){
  	return Template.instance().addingABrewery.get();
  }
});

Template.defaultBreweriesList.events({
	'click #create_brewery': function(e, template) {
		template.addingABrewery.set(true);
	},
	'click #cancel_add_brewery': function(e, template) {
		template.addingABrewery.set(false);
	},
	'submit form': function(e, template) {
		template.addingABrewery.set(false);
	}

})