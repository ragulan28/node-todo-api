const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to Connect");
    }
    console.log("connected");
    // db
    // .collection("Users")
    // .findOneAndUpdate({
    //     _id: new ObjectID("5a07e39edc2080361c64efec")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // })
    // .then(res => {
    //     console.log(res);
    // });
    db
        .collection("Users")
        .findOneAndUpdate({
            _id: new ObjectID("5a07e39edc2080361c64efec")
        }, {
            $set: {
                name: "Ranjana"
            },
            $inc: {
                age: -1
            }
        }, {
            returnOriginal: false
        })
        .then(res => {
            console.log(res);
        });

    db.close();
});