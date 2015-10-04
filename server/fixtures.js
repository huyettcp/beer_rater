

if (Breweries.find().count() === 0) {



	var pattonId = Meteor.users.insert({
		profile: { name: 'Patton'}
	});

	var patton = Meteor.users.findOne(pattonId);

	var mikeId = Meteor.users.insert({
		profile: { name: "Mike" }
	});

	var mike = Meteor.users.findOne(mikeId);

	var samAdamsId = Breweries.insert({
		brewery_name: "The Boston Beer Company",
		city: "Boston",
		state: "MA",
		userId: mike._id,
		author: mike.profile.name

	});


	var latrobeId = Breweries.insert({
		brewery_name: "Latrobe Brewing Company",
		city: "Latrobe",
		state: "PA",
		userId: patton._id,
		author: patton.profile.name
	});

	var narragansettId = Breweries.insert({
		brewery_name: "Narragansett",
		city: "Providence",
		state: "RI",
		userId: patton._id,
		author: patton.profile.name
	});


	var rollingRockId = Beers.insert({
		beer_name: "Rolling Rock",
		breweryId: latrobeId,
		type_of_beer: "Pale Lager",
		year_introduced: "1939",
		abv: "4.4%",
		userId: mike._id,
		author: mike.profile.name,
		ratings: [3]

	});

	var bostonLagerId = Beers.insert({
		beer_name: "Boston Lager",
		breweryId: samAdamsId,
		type_of_beer: "Lager",
		year_introduced: "1984",
		abv: "4.9%",
		userId: patton._id,
		author: patton.profile.name,
		ratings: [4]

	});



	BeerReviews.insert({
		beerId: rollingRockId,
		userId: patton._id,
		author: patton.profile.name,
		beer_review_title: "It's ok.",
		body: "Poured from a can. Pale yellow with a thick white head and minor legs. Faint malt aroma, not much. Taste has a lot of sweetness from the malt. Their is a faint bitterness but no hop tones. Very distinct and unpleasant metallic aftertaste. Very good texture and mouthfeel. Overall not very appealing. ",
		rating: 3,
		aroma: 2,
		appearance: 4,
		taste: 4

	});


	BeerReviews.insert({
		beerId: bostonLagerId,
		userId: mike._id,
		author: mike.profile.name,
		beer_review_title: "My favorite since 1984",
		body: "I'm going to be lazy here. To begin with I have tried hundreds of craft beers and I know this is not technically but it is by far my favorite go to beer. Everyone's palate is different but this is perfect to me in every way.",
		rating: 5,
		aroma: 5,
		appearance: 5,
		taste: 5

	});

}