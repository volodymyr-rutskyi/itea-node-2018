class App {
    constructor() {
        this.middlewares = [];
    }

    use(func) {
        this.middlewares.push(func);
    }

    execute(request) {
        let i = this.middlewares.length;
        if (i == 0) return;

        while(i--) {
            request = this.middlewares[i].call(this, request);
        }
    }
}


let app = new App();


app.use(function(request) {
    request.prop1 = 'some value';
    return request;
})


app.use(function(request){
    request.result = 'End';
    return request;
})

let obj = {};
app.execute(obj);

console.log(obj);