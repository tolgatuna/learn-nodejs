const doWork = async () => {
    throw new Error('Something went wrong');
    return 'Test'
};

doWork().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});

// Same Function in 8-promise-part2.js:
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000)
    })
};

const doAddWork = async () => {
    const sum1 = await add(1, 2);
    const sum2 = await add(sum1, 5);
    const sum3 = await add(sum2, 7);
    return sum3;
}

doAddWork().then(res => {
    console.log('Add Sum Result: ', res)
}).catch(err => {
    console.log('Add Sum Error: ', res)
});

