if (Breweries.find().count() === 0) {



	// var pattonId = Meteor.users.insert({
	// 	profile: { name: 'Patton'}
	// });

	// var patton = Meteor.users.findOne(pattonId);

	// var mikeId = Meteor.users.insert({
	// 	profile: { name: "Mike" }
	// });

	// var mike = Meteor.users.findOne(mikeId);

	var latrobeId = Breweries.insert({
		brewery_name: "Latrobe Brewing Company",
		city: "Latrobe",
		state: "PA",
		// userId: patton._id,
		// author: patton.profile.name
	});

	// var narragansettId = Breweries.insert({
	// 	brewery_name: "Narragansett",
	// 	city: "Providence",
	// 	state: "RI",
	// 	userId: patton._id,
	// 	author: patton.profile.name
	// });

	// var samAdamsId = Breweries.insert({
	// 	brewery_name: "The Boston Beer Company",
	// 	city: "Boston",
	// 	state: "MA",
	// 	userId: mike._id,
	// 	author: mike.profile.name

	// });

	var rollingRockId = Beers.insert({
		beer_name: "Rolling Rock",
		city: "Latrobe",
		state: "PA",
		breweryId: latrobeId,
		type_of_beer: "Pale Lager",
		abv: "4.4%",
		// userId: mike._id,
		// author: mike.profile.name,
		ratings: [5, 6]

	});



	// BeerReviews.insert({
	// 	beerId: rollingRockId,
	// 	userId: patton._id,
	// 	author: patton.profile.name,
	// 	beer_review_title: "It's ok.",
	// 	body: "Poured from a can. Pale yellow with a thick white head and minor legs. Faint malt aroma, not much. Taste has a lot of sweetness from the malt. Their is a faint bitterness but no hop tones. Very distinct and unpleasant metallic aftertaste. Very good texture and mouthfeel. Overall not very appealing. ",
	// 	rating: 3

	// });

}