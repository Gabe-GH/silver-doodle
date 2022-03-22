const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');


const mongod = new MongoMemoryServer();

// connect to db
module.exports.connect = async() => {
    await mongod.start();
    const mongoURI = mongod.getUri();
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10
    };
    await mongoose.connect(mongoURI, mongooseOpts);
}

module.exports.closeDatabase = async() => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

module.exports.clearDatabase = async() => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}