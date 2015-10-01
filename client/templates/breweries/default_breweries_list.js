Template.defaultBreweriesList.onRendered(function () {
  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
  Session.set('breweryCleared', false);
        
});

Template.defaultBreweriesList.onCreated(function(){
	this.addingABrewery = new ReactiveVar(false);


});

Template.defaultBreweriesList.helpers({
  addingABrewery: function(){
  	return Template.instance().addingABrewery.get();
  },
  editingABrewery: function(){
  	return Template.instance().editingABrewery.get();
  },
  breweryHeaderAfterSubmit: function() {
        var route = Router.current().route.getName()
        if (route === 'recentlyAddedBreweries'){
            return 'active'
        } else {
          
        }

  }


});

Template.defaultBreweriesList.events({
	'click #create_brewery': function(e, template) {
		template.addingABrewery.set(true);
    console.log(Session.get('breweryCleared'));
	},
	'click #cancel_add_brewery': function(e, template) {
		template.addingABrewery.set(false);
	},
	'submit form': function(e, template) {
      var cleared = Session.get('breweryCleared');
      if (cleared === true) {
          template.addingABrewery.set(false);
      }


	},
  'click #brewery_sort_submitted': function() {
    Router.go('recentlyAddedBreweries')
    console.log("works")

  },
  'click #brewery_sort_alpha': function() {
    Router.go('home')
  }


});