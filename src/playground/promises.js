const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('This is it!');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
})

console.log('after');