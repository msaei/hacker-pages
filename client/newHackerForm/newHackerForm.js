Template.newHackerForm.events({
  'submit #hackerForm' : function(event, template) {

    event.preventDefault();

    const hackerName = template.find('#hackerName').value;
    const legalName = template.find('#legalName').value;
    const email = template.find('#email').value;
    const allegiance = template.find('#allegiance').value;
    const createdByUser = Meteor.userId();

    const newHacker = {
      hackerName: hackerName,
      legalName: legalName,
      email: email,
      allegiance: allegiance,
      createdBy: createdByUser
    }

    //console.log(newHacker);
    //const result = Hackers.insert(newHacker);
    Meteor.call('hackers.insert',newHacker)
    
  }

});
