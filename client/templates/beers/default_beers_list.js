Template.defaultBeersList.rendered = function () {
  $(document).ready(function(){
    $('ul.tabs').tabs();
  
  });
  Session.set('formContext', 'allBeers')
  Session.set('beerCleared', false);


        
};


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
  },
  beerHeaderAfterSubmit: function() {
        var route = Router.current().route.getName()

        if (route === 'newBeersList'){
            return 'active'
        } else {
          
        }

  }
});

Template.defaultBeersList.events({
	'click #create_beer': function(e, template) {
		template.addingABeer.set(true);
    Session.set('beerCleared', false);

	},
	'click #cancel_add_beer': function(e, template) {
		template.addingABeer.set(false);
    Session.set('beerCleared', false);

	},
	'submit form': function(e, template) {
    var cleared = Session.get('beerCleared');
    if (cleared === true) {
		  template.addingABeer.set(false);
    } 
		template.editingABeer.set(false);
	},
	'click #beer_sort_alpha':function() {
    	Router.go('defaultBeersList')
    },
 'click #beer_sort_submitted':function() {
    	Router.go('newBeersList')

  }


})