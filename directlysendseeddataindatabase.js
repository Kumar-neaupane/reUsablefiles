import mongoose from "mongoose";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

async function seedUsers() {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");

    await userModel.deleteMany();
    console.log("Old users removed");

    const hashed = await bcrypt.hash("plainpassword", 10);

    const user = await userModel.create({
      fullName: "Biplav",
      email: "biplav@example.com",
      password: hashed,
    });

    console.log("Users seeded successfully:");

    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
}

seedUsers();
