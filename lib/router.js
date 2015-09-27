Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
  	return [Meteor.subscribe('beer_reviews'),
    Meteor.subscribe('beer_breweries_list')]

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
  },
  data: function() {
    return {
      breweries: this.breweries()
    }
  },
  waitOn: function() {
    return Meteor.subscribe('all_beers_for_brewery')
  }
});

NewBreweriesController = DefaultBreweriesListController.extend({
  sort: {submitted: -1, _id: -1}
});

AlphaBreweriesController = DefaultBreweriesListController.extend({
  sort: {brewery_name: 1}
});

DefaultBeersListController = RouteController.extend({
  template: 'defaultBeersList',
  findOptions: function() {
    return {sort: this.sort};
  },
  subscriptions: function() {
    this.beersSub = Meteor.subscribe('beers', this.findOptions());
  },
  beers: function() {
    return Beers.find({}, this.findOptions());
  },
  data: function() {
    return {
      beers: this.beers()
    }
  },
  waitOn: function() {
    return [Meteor.subscribe('beer_breweries_list'), 
    Meteor.subscribe('beer_reviews')

    ]

  }
});

NewBeersController = DefaultBeersListController.extend({
  sort: {submitted: -1, _id: -1}
});

AlphaBeersController = DefaultBeersListController.extend({
  sort: {beer_name: 1}
});

// RatingBeersController = DefaultBeersListController.extend({
//   sort: {beer_name: 1}
// });



Router.route('/', {
  name: 'home',
  controller: AlphaBreweriesController
});

Router.route('/newest_breweries', 
{
  name: 'recentlyAddedBreweries',
  controller: NewBreweriesController
});




Router.route('/beerslist', 
  {
    name: 'defaultBeersList',
    controller: AlphaBeersController
  });

Router.route('/newbeerslist', 
  {
    name: 'newBeersList',
    controller: NewBeersController
  });

// Router.route('/ratingbeerslist', 
//   {
//     name: 'ratingBeersList',
//     controller: RatingBeersController
//   });

Router.route('/beers/:_id/review', {
  name: 'beerReviewCard',
  waitOn: function() {
    return [
      Meteor.subscribe('singleBeer', this.params._id)
    ]; 
  },
  data: function() { return Beers.findOne(this.params._id); }
});

Router.route('/brewery/:_id/beerlist', {
  name: 'allBreweryBeers',
    waitOn: function() {
    return [
      Meteor.subscribe('singleBrewery', this.params._id),
      Meteor.subscribe('all_beers_for_brewery')
    ];
  },
  data: function() { return Breweries.findOne(this.params._id); }
});

Router.route('/beers/:_id/allreviews', {
  name: 'allBeerReviews',
    waitOn: function() {
    return [
      Meteor.subscribe('singleBeer', this.params._id),
      Meteor.subscribe('beer_breweries_list')

    ];
    },
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
Router.onBeforeAction(requireLogin, {only: 'addBeerCard'});
Router.onBeforeAction(requireLogin, {only: 'beerReviewCard'});
