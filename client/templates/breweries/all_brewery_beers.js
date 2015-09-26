Template.allBreweryBeers.rendered = function () {
	$('.modal-trigger').leanModal();
	Session.set('formContext', 'allBreweryBeers')
	  var bryan = Session.get('formContext')
  console.log(bryan)
};

Template.allBreweryBeers.helpers({
	beers: function() {
		return Beers.find({breweryId: this._id})
	}

});