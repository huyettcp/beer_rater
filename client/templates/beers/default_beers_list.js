Template.defaultBeersList.onCreated(function(){
	this.addingABeer = new ReactiveVar(false);

});

Template.defaultBeersList.helpers({
  beers: function() {
    return Beers.find();
  },
  addingABeer: function(){
  	return Template.instance().addingABeer.get()
  },
  breweryName: function() {
	
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
	}

})