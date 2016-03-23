"use strict";

var Client = require("./../dist/index");
var testAuth = require("./../test_auth.json");

var github = new Client({
    debug: false
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.issues.getForRepo({
    user: "kaizensoze",
    repo: "node-github"
}, function(err, res) {
    if (err) {
        console.log(err.toJSON());
    } else {
        console.log(res);
    }
});
