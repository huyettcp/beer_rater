Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
  	return Meteor.subscribe('beers')
  }
});

Router.route('/', {name: 'defaultBreweriesList'});
Router.route('/beerlist', {name: 'defaultBeersList'})



// Router.onBeforeAction('dataNotFound', {only: 'postPage'});

// Router.route('/breweries/:id', {
// 	name: 'breweryCard',
// 	data: function() { return Breweries.findOne(this.params._id); }
// })

// Router.route('/beers/:id', {
// 	name: 'beerCard',
// 	data: function() { return Beers.findOne(this.params._id); }
// })