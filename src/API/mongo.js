const mongoose = require('mongoose');

const connect = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('connected to the database');
    } catch (error) {
        console.log("couldn't connect to the database server with following error:");
        console.log(error);
    }
};

module.exports = { connect };
