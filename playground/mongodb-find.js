const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to Connect");
    }
    console.log("connected");

    db
        .collection("Users")
        .find({
            name: 'Ragulan',
            age: 23
        })
        .toArray()
        .then(
            docs => {
                console.log(JSON.stringify(docs, undefined, 2));
            },
            err => {
                console.log("Unable to  fetch");
            }
        );


    db.close();
});