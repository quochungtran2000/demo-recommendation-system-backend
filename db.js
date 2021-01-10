const MongoClient = require('mongodb').MongoClient;


const DatabaseConnection = async () => {
    const client = new MongoClient(process.env.MONGO_ATLAS_URL, {useUnifiedTopology: true});
    try{
        this.client = await client.connect();
        this.selectedDB = await this.client.db('18dthe2-ai');
        return this;
    }
    catch(err){
        console.log('Error', err);
    }
}

let db = DatabaseConnection()
    .then(res => console.log('Mongo connected!'));

module.exports = db;
