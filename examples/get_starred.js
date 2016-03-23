"use strict";

var Client = require("./../dist/index");
var testAuth = require("./../test_auth.json");

var github = new Client({});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

var starredRepos = [];

var req = github.activity.getStarredRepos({ per_page: 100}, getRepos);
function getRepos(err, res) {
    if (err) {
        return false;
    }

    starredRepos = starredRepos.concat(res);
    if (github.hasNextPage(res)) {
        github.getNextPage(res, getRepos)
    } else {
        outputStarredRepos();
    }
}

function outputStarredRepos() {
    console.log('starred repos: ' + starredRepos.length);
    console.log(starredRepos.map(function(repo) { return repo['full_name']; }));
}
