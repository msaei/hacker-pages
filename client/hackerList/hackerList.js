Template.hackerList.onCreate(function hackerListOnCreated(){
	Meteor.subscribe('hackers');

})


Template.hackerList.helpers({
	"Hackers":function(){
		return Hackers.find();
	},
});