if (Meteor.isClient) {
    Template.body.events({
        "click .myButton": function (event) {
            Meteor.call('gong', function(errors, results){
                console.log('GREAT SUCCESS!');
            });
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
        Meteor.methods({
            gong: function() {
                exec = Npm.require('child_process').exec;
                child = exec('gong.py', function(error, stdout, stderr) {});
                return 'gonged';
            }
        })
    });
}
