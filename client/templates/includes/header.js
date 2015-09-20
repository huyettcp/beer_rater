Template.header.rendered = function () {
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
  console.log(Router.current().route.getName());
   $(document).ready(function(){
    $('ul.tabs').tabs();
  });
};

Template.header.events({
	// "click #brewery_selector": function(e, template) {
	// 	$("#brewery_selector").addClass("active")
	// 	$("#beer_selector").removeClass("active")
	// 	$("#brewery_selector").addClass("highlight")
	// 	$("#beer_selector").removeClass("highlight")
	// },

	// "click #beer_selector": function(e, template) {
	// 	$("#beer_selector").addClass("active")
	// 	$("#brewery_selector").removeClass("active")
	// 	$("#beer_selector").addClass("highlight")
	// 	$("#brewery_selector").removeClass("highlight")
	// }
	"click #brewery_header_toggle": function(e, template) {
		Router.go('home')
	},
	"click #beer_header_toggle": function(e, template) {
		Router.go('defaultBeersList')
	}
});






// Template.header.helpers
// 	onHomepage: function() {
// 	var route = Router.current().route.getName()
// 		if (route === "fullBeerList"){
// 			return true;
// 		} else {
// 			return false;
// 		}
		
// 	}