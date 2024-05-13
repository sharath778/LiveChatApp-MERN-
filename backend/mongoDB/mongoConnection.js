import mongoose from "mongoose";


const connectToMongoDb = async () =>{
    try{
        await mongoose.connect("mongodb+srv://2sharathkumarb:Dif07saT0g0fPklp@cluster0.s7gkft3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to mongoDB");
    }catch(err){
        console.log(`Error in mongoDB: ${err}`);
    }
};

export default connectToMongoDb;