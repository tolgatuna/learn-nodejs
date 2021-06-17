// const mongoose = require('mongoose');
// const validator = require('validator');
//
// const connectionUrl = "mongodb://root:root@localhost:27017/task-manager-api?authSource=admin"
//
// mongoose.connect(connectionUrl, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })
//
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be positive number')
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         lowercase: true,
//         trim: true,
//         validate(value) {
//             console.log('Value: ', validator.isEmail(value));
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is not valid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 6,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Your password can not contain "password" keyword in it');
//             }
//         }
//     }
// })
//
// const Task = mongoose.model('Tasks', {
//     description: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })
//
// // const aUser = new User({
// //     name: 'Mike',
// //     age: 22
// // });
// //
// // aUser.save().then(res => {
// //     console.log('Result: ', res);
// // }).catch(error => {
// //     console.log('Error: ', error)
// // });
//
// // const task = new Task({
// //     description: 'Complete a task',
// //     completed: false
// // });
// //
// // task.save()
// //     .then(res => console.log('Saved: ', res))
// //     .catch(err => console.log('Error: ', err))
//
// // const aUser = new User({
// //     name: 'John Tom',
// //     age: 12,
// //     email: ' john.TOm@test.com ',
// //     password: '123'
// // });
// //
// // aUser.save().then(res => {
// //     console.log('Result: ', res);
// // }).catch(error => {
// //     console.log('Error: ', error)
// // });