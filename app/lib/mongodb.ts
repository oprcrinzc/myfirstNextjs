import mongoose from "mongoose";

const connectMongo = async () => {
    mongoose.connection.readyState == 1 ? '' : mongoose.connect("mongodb://localhost:27017/firstNext")
}


export default connectMongo