"use strict";

var Client = require("./../dist/index");
var testAuth = require("./../test_auth.json");

var github = new Client({
    debug: true
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.users.getFollowingForUser({
    user: "defunkt"
}, function(err, res) {
    console.log(err, res);
});
