class Connector {
    constructor () {
        this.connection = `Connected: ${new Date().toUTCString()}`;
    }
    getConnection() {
        return this.connection;
    }
}



module.exports = new Connector();