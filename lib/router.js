Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
  	return [Meteor.subscribe('beers'), 
    // Meteor.subscribe('breweries'),
    Meteor.subscribe('beer_reviews')]
  }
});

// Router.route('/', {name: 'defaultBreweriesList'});
Router.route('/beerlist', {name: 'defaultBeersList'})
Router.route('/beers/:_id/review', {
  name: 'beerReviewCard',
  data: function() { return Beers.findOne(this.params._id); }
});
Router.route('/brewery/:_id/beerlist', {
  name: 'allBreweryBeers',
  data: function() { return Breweries.findOne(this.params._id); }
});

Router.route('/beers/:_id/allreviews', {
  name: 'allBeerReviews',
  data: function() { return Beers.findOne(this.params._id); }

});

Router.route('/:breweriesLimit?', {
  name: 'defaultBreweriesList',
  waitOn: function() {
    var limit = parseInt(this.params.breweriesLimit) || 5;
    return Meteor.subscribe('breweries', {sort: {submitted: -1}, limit: limit});
  },
  data: function() {
    var limit = parseInt(this.params.breweriesLimit) || 5;
    return {
      breweries: Breweries.find({}, {sort: {submitted: -1}, limit: limit})
    };
  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'addBreweryCard'});

