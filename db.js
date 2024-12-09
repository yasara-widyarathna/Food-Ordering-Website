import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yasara:brothers@cluster0.l0w84.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}