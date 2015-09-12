Template.defaultBreweriesList.onRendered(function () {
  this.find('.wrapper')._uihooks = {
    moveElement: function (node, next) {
      // do nothing for now
    }
  }
});

Template.defaultBreweriesList.onCreated(function(){
	this.addingABrewery = new ReactiveVar(false);


});

Template.defaultBreweriesList.helpers({
  breweries: function(){
    return Breweries.find({}, {sort: {submitted: -1}});
  },
  addingABrewery: function(){
  	return Template.instance().addingABrewery.get();
  },
  editingABrewery: function(){
  	return Template.instance().editingABrewery.get();
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


});