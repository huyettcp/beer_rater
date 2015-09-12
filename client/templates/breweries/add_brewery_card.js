Template.addBreweryCard.events({
	'submit form[name="add_brewery_form"]': function(e, template) {
		e.preventDefault();
		var brewery = {
			brewery_name: $(e.target).find('[id=brewery_name]').val(),
			city: $(e.target).find('[id=city]').val(),
			state: $(e.target).find('[id=state]').val()

		};
		
		Meteor.call('breweryInsert', brewery, function(error, result) {
			if (error)
				return alert(error.reason)

			if (result.breweryExists)
				alert("We already have this brewery");
		});
	}
});