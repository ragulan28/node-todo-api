const { Todo } = require("./../server/models/todo");
const { mongoose } = require("./../server/db/mongoose");
const { ObjectID } = require('mongodb');
var id = "5a09a2085afadc2ec4d181cb";

// if (!ObjectID.isValid(id)) {
//     console.log('id Not valid');
// }

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log("Todos", todo);
// });

Todo.findById(id).then(todo => {
    if (!todo) {
        return console.log('Id Not Found');
    }
    console.log("Todos", todo);
}).catch((e) => {
    console.log(e)
});