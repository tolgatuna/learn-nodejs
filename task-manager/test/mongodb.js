const mongodb = require("mongodb");

const connectionUrl = 'mongodb://root:root@127.0.0.1:27017';
const databaseName = 'task-manager'
const {ObjectID, MongoClient} = mongodb;

const mongoClient = MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect: ', error);
    }
    const db = client.db(databaseName);

    // ---- INSERT ----
    // db.collection('users').insertOne({
    //     name: 'Tom',
    //     surname: 'Mike',
    //     age: 30,
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user: ', error);
    //     }
    //     console.log('Result: ', result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Adam',
    //         surname: 'Many',
    //         age: 38
    //     },
    //     {
    //         name: 'Jen',
    //         surname: 'Lopez',
    //         age: 22
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Task 1",
    //         completed: false
    //     },
    //     {
    //         description: "Task 2",
    //         completed: false
    //     },
    //     {
    //         description: "Task 3",
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //
    //     console.log('Result: ', result.ops);
    // })


    // ---- READ ----

    // db.collection('users').findOne({name: 'Jen'}, (error, res) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Found: ', res);
    // });
    //
    // db.collection('tasks').findOne({_id: new ObjectID('60ae20546c93226c1d2357c7')}, (error, res) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Found: ', res);
    // });
    //
    // const cursor = db.collection('users').find({age: 30});
    // cursor.toArray((error, res) => {
    //     if(error)
    //         return console.log(error);
    //     console.log('Founded arr: ', res);
    // });

    // const taskCursor = db.collection('tasks').find({completed: false});
    // taskCursor.toArray((error, res) => {
    //     if (error)
    //         return console.log(error);
    //     console.log('Founded arr: ', res);
    // })
    //
    // taskCursor.count((error, res) => {
    //     if (error)
    //         return console.log(error);
    //     console.log('Count of arr: ', res);
    // })

    // const updateUserPromise = db.collection('users').updateOne({_id: new ObjectID("60ad1cedd7c42a63752cf736")}, {
    //     $set: {
    //         name: 'Adam',
    //         surname: 'Muller'
    //     }
    // });
    // updateUserPromise.then(res => {
    //     console.log('Result: ', res);
    // }).catch(err => {
    //     console.log('Error: ', err);
    // })

    // const updateUserPromise = db.collection('users').updateOne({_id: new ObjectID("60ad1cedd7c42a63752cf736")}, {
    //     $inc: {
    //         age: 1
    //     }
    // });
    // updateUserPromise.then(res => {
    //     console.log('Result: ', res);
    // }).catch(err => {
    //     console.log('Error: ', err);
    // })

    // db.collection('tasks').updateMany({}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((res) => {
    //     console.log("Result: ", res);
    // }).catch(error => {
    //     console.log("Error: ", error);
    // });

    db.collection('users').deleteOne({_id: new ObjectID("60ad1ccd8d3b01636a7bdad0")})
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error)
        });

});
