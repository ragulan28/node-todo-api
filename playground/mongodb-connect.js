const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to Connect");
    }
    console.log("connected");
    // db.collection("Users").insertOne({
    //         name: "Ragulan",
    //         age: 23,
    //         location: "Jaffna",
    //         completed: false
    //     },
    //     (err, result) => {
    //         if (err) {
    //             return console.log("Unable to insert");
    //         }
    //         console.log(result.ops[0]._id.getTimestamp());
    //     });

    db.close();
});