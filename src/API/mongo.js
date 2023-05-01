const mongoose = require('mongoose');

const connect = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('connected to the database');
        return true;
    } catch (error) {
        // console.log("couldn't connect to the database server with following error:");
        // console.log(error);
        console.log('error connecting to DB');
        return false;
    }
};

module.exports = { connect };
