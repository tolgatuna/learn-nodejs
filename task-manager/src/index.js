require('./db/mongoose');
const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const auth = require("./middleware/auth");

const app = express();

/*
    Without middleware func: get request -> run route handler
    With middleware func: get request -> call middleware func -> run route handler
 */
// app.use((req, res, next) => {
//     console.log('--- USE 1 ----')
//     console.log('req: ', req);
//     console.log('res: ', res);
//     console.log('next: ', next);
//     next();
//     console.log('--- USE 1 END ----')
// });
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is started on port: ', port);
});