const mongoose = require('mongoose');
require('dotenv').config();


exports.connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://ashwrathe123:ashwikk%40123@cluster0.lm3ij.mongodb.net/CodingBits")

        console.log('Database connected succcessfully');

    } catch (err) {
        console.log(`Error while connecting server with Database`);
        console.log(err.message);
        process.exit(1);
    }
};

