const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
            // reject("Something went wrong");
        }, 2000)
    })
};

add(1, 2).then(sum1 => {
    console.log('Result on Phase 1: ', sum1);
    add(sum1, 5).then(sum2 => {
        console.log('Final Result: ', sum2);
    }).catch(err => {
        console.log('Error on Phase 2: ', err);
    });
}).catch(err => {
    console.log('Error on Phase 1: ', err);
})

// Promise Chaining:
add(1, 2).then(sum => {
    console.log('Result on Phase 1: ', sum);
    return add(sum, 5);
}).then(sum => {
    console.log('Final Result: ', sum);
}).catch(err => {
    console.log('Error on any phase: ', err);
})