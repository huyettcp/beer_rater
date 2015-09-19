Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
  	return [Meteor.subscribe('beers'), 
    Meteor.subscribe('beer_reviews')
    ]
  }
});


DefaultBreweriesListController = RouteController.extend({
  template: 'defaultBreweriesList',
  findOptions: function() {
    return {sort: this.sort};
  },
  subscriptions: function() {
    this.breweriesSub = Meteor.subscribe('breweries', this.findOptions());
  },
  breweries: function() {
    return Breweries.find({}, this.findOptions());
    console.log(breweries)
  },
  data: function() {
    return {
      breweries: this.breweries()
    }
  }

});

NewBreweriesController = DefaultBreweriesListController.extend({
  sort: {submitted: -1, _id: -1}
});

AlphaBreweriesController = DefaultBreweriesListController.extend({
  sort: {brewery_name: 1}
});




Router.route('/', {
  name: 'home',
  controller: AlphaBreweriesController
});

Router.route('/newest_breweries', 
{
  name: 'recentlyAddedBreweries',
  controller: NewBreweriesController
});

Router.route('/new/', {name: 'newBreweries'});
Router.route('/alpa/', {name: 'alphaBreweries'});


// Router.route('/', {name: 'defaultBreweriesList'});
Router.route('/beerlist', {name: 'defaultBeersList'})

Router.route('/beers/:_id/review', {
  name: 'beerReviewCard',
  data: function() { return Beers.findOne(this.params._id); }
});

Router.route('/brewery/:_id/beerlist', {
  name: 'allBreweryBeers',
    waitOn: function() {
    return [
      Meteor.subscribe('singleBrewery', this.params._id)
    ];
  },
  data: function() { return Breweries.findOne(this.params._id); }
});

Router.route('/beers/:_id/allreviews', {
  name: 'allBeerReviews',
  data: function() { return Beers.findOne(this.params._id); }

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

