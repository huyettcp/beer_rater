Template.header.rendered = function () {

  $(".dropdown-button").dropdown();

   $(document).ready(function(){
    $('ul.tabs').tabs();

  });


};

Template.header.events({
	"click #brewery_header_toggle": function(e, template) {
		Router.go('home')
	},
	"click #beer_header_toggle": function(e, template) {
		Router.go('defaultBeersList')
	}
});






Template.header.helpers({
	brewery_active_header: function() { 
		var route = Router.current().route.getName()
		console.log(route)
		if (route === 'home' || route === 'allBreweryBeers' || route === 'recentlyAddedBreweries'){
			return 'active' ;
		}	else  {

		}
	}

});