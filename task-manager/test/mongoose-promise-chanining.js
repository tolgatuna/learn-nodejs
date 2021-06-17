require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

// User.findByIdAndUpdate("60b569dc48f63a0b36606be9", {age: 1}).then(res => {
//     console.log("Updated: ", res);
//     return User.countDocuments({age: 1})
// }).then(res => {
//     console.log('Count: ', res);
// }).catch(err => {
//     console.log(err);
// })

const updateAgeAndGetCountForThatAge = async (id, age) => {
    const updatedUser = await User.findByIdAndUpdate(id, {age});
    const userCountWithGivenAge = await User.countDocuments({age});
    return userCountWithGivenAge;
};
updateAgeAndGetCountForThatAge("60b569dc48f63a0b36606be9", 2).then(res => console.log('Count: ', res));

// Task.findByIdAndRemove("60b5839dc10aa50f86d5640b").then(res => {
//     console.log('Deleted: ', res);
//     return Task.countDocuments({completed: false})
// }).then(res => {
//     console.log('Count: ', res);
// }).catch(err => {
//     console.log('Error: ', err);
// })

const deleteTaskAndCountNotCompleted = async (id) => {
    const deleted = await Task.findByIdAndRemove(id);
    console.log('Deleted: ', deleted);
    return Task.countDocuments({completed: false})
};

deleteTaskAndCountNotCompleted("60b5839dc10aa50f86d5640b").then(res => console.log('Task Count: ', res));

