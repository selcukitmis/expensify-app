const promise = new Promise((resolve, reject) => {
    resolve("It is resolve");
});

const promise2 = new Promise((resolve, reject) => {
    reject("It is reject");
});


promise.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});

promise2.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});