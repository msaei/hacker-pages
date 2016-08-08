import {Mongo} from 'meteor/mongo';
export Hackers = new Mongo.collection('Hackers');

if (Meteor.isServer){
	Meteor.publish('hackers', function hackerPublication(){
		return Hackers.find();
	});

}