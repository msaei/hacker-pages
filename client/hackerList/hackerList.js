Template.hackerList.onCreated( function() {
	Meteor.subscribe('hackers');

});


Template.hackerList.helpers({
	"Hackers": function(){
		return Hackers.find();
	},
	"createdByUser": function(createdBy){
		console.log(createdBy);
		console.log(Meteor.userId());
		return (createdBy === Meteor.userId());

	}
});