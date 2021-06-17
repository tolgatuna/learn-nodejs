const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 2, 3]);
        reject('This is an error');
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log(result);
}).catch(error => {
    console.log(error);
})