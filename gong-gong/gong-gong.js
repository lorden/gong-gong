if (Meteor.isClient) {
  Template.body.events({
    "click .myButton": function (event) {
      // Get value from button element
      var text = event.target.text;

      // Make post request

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
