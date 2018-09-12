var friendData = require("../data/friends");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    });

    app.post("/api/friends", function (req, res) {
        const friend = req.body;
        var newFriend = []
        var existingFriends = []

        for (i = 0; i < friend.scores.length; i++) {
            newFriend.push(parseInt(friend.scores[i]))
        }

        console.log(newFriend);

        //Cycle through the entire existing friends to grab the scores of each existing friend
        for (i = 0; i < friendData.length; i++) {
            existingFriends.push(friendData[i].scores)
        };

        var a1 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
        var a2 = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

        for (i = 0; i < a1.length; i++) {

        }

        console.log(existingFriends);
        friendData.push(friend);

        res.json(friend);
    });
};