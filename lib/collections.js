//import {Mongo} from 'meteor/mongo';
Hackers = new Mongo.Collection('Hackers');

if (Meteor.isServer){
	Meteor.publish('hackers', function hackerPublication(){
		return Hackers.find({'allegiance': "White Hat"});
	});

}