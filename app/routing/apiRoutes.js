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

        //Cycle through the entire existing friends to grab the scores of each existing friend
        for (i = 0; i < friendData.length; i++) {
            existingFriends.push(friendData[i].scores)
        };
        function getSum(total, num) {
            return total + num;
        };
        var totalDifference = 100000000;
        var matchingIndex = 0;
        for (index = 0; index < existingFriends.length; index++) {
            var diff = [];
            for (i = 0; i < newFriend.length; i++) {
                diff.push(Math.abs(newFriend[i] - existingFriends[index][i]));
                if (diff.reduce(getSum) < totalDifference) {
                    totalDifference = diff.reduce(getSum);
                    matchingIndex = index
                }
            }
        }

        console.log(existingFriends);
        friendData.push(friend);

        res.json(friendData[matchingIndex]);
    });
};


