const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to Connect");
    }
    console.log("connected");
    // db
    //     .collection("Todos")
    //     .deleteMany({
    //         text: "eate"
    //     })
    //     .then(result => {
    //         console.log(result);
    //     });

    // db
    //     .collection("Todos")
    //     .deleteOne({ text: "eate" })
    //     .then(res => {
    //         console.log(res);
    //     });

    //   db
    //     .collection("Todos")
    //     .findOneAndDelete({
    //       completed: false
    //     })
    //     .then(res => {
    //       console.log(res);
    //     });
    db.collection("Users").deleteMany({
        name: "Ragulan"
    });

    db
        .collection("Users")
        .findOneAndDelete({
            _id: new ObjectID("5a07e3b5bd42a1277c88ba22")
        })
        .then(res => {
            console.log(JSON.stringify(res, undefined, 2));
        });

    db.close();
});