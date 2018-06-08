

async function getFile() {
    let someValue = await Promise.resolve(4);

    return someValue;
}



(async function () {
    console.log('Started function');
    let a =  getFile();
    console.log(a);
    console.log('Finished function');
})()