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
		if (route === 'defaultBeersList' || 'beerReviewCard' || 'allBeerReviews'){
			return '' ;
		}	else  {
			return 'active';
		}
	}

	// onHomepage: function() {
	// var route = Router.current().route.getName()
	// 	if (route === "fullBeerList"){
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
		
	// }

});