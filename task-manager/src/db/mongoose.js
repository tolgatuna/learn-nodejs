const mongoose = require('mongoose');

const connectionUrl = "mongodb://root:root@localhost:27017/task-manager-api?authSource=admin"

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});