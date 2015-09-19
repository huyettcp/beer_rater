Template.defaultBeersList.onRendered(function () {
  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
        
});


Template.defaultBeersList.onCreated(function(){
	this.addingABeer = new ReactiveVar(false);
	this.editingABeer = new ReactiveVar(false);
});

Template.defaultBeersList.helpers({

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
	},
	'click #beer_sort_alpha':function() {
    	Router.go('defaultBeersList')
    },
    'click #beer_sort_submitted':function() {
    	Router.go('newBeersList')

  }


})