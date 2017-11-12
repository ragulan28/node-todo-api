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

    db
        .collection("Todos")
        .findOneAndDelete({
            completed: false
        })
        .then(res => {
            console.log(res);
        });
    db.close();
});