Template.breweryCard.onCreated(function(){
	this.editingABrewery = new ReactiveVar(false);

});

Template.breweryCard.helpers({
  editingABrewery: function(){
  	return Template.instance().editingABrewery.get();
  },
  ownBrewery: function() {
  	return this.userId === Meteor.userId();
  }
});

Template.breweryCard.events({
	'click #enter_edit_brewery': function(e, template) {
		template.editingABrewery.set(true)
	},
	'click #cancel_edit_brewery': function(e, template) {
		template.editingABrewery.set(false);
	},
	'submit form': function(e, template) {
		template.editingABrewery.set(false);

	}


});