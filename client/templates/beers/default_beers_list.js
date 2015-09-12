Template.defaultBeersList.onCreated(function(){
	this.addingABeer = new ReactiveVar(false);
	this.editingABeer = new ReactiveVar(false);
});

Template.defaultBeersList.helpers({
  beers: function() {
    return Beers.find({}, {sort: {submitted: -1}});
  },
  addingABeer: function(){
  	return Template.instance().addingABeer.get()
  },
  editingABeer: function() {
  	return Template.instance().editingABeer.get()
  }
});

Template.defaultBeersList.events({
	'click #create_beer': function(e, template) {
		template.addingABeer.set(true);
	},
	'click #cancel_add_beer': function(e, template) {
		template.addingABeer.set(false);
	},
	'submit form': function(e, template) {
		template.addingABeer.set(false);
		template.editingABeer.set(false);
	}

})