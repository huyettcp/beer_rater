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


DefaultBreweriesListController = RouteController.extend({
  template: 'defaultBreweriesList',
  increment: 5,
  breweriesLimit: function() {
    return parseInt(this.params.breweriesLimit) || this.increment;
  },
  findOptions: function() {
    return {sort: {submitted: -1}, limit: this.breweriesLimit()};
  },
  subscriptions: function() {
    this.breweriesSub = Meteor.subscribe('breweries', this.findOptions());
  },
  breweries: function() {
    return Breweries.find({}, this.findOptions());
  },
  data: function() {
    var hasMore = this.breweries().count() === this. breweriesLimit();
    var nextPath = this.route.path({breweriesLimit: this.breweriesLimit() + this.increment});
    return {
      breweries: this.breweries(),
      ready: this.breweriesSub.ready,
      nextPath: hasMore ? nextPath : null 
    }
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
  name: 'defaultBreweriesList'
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

