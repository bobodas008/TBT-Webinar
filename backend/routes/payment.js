import express from "express";
import crypto from "crypto";
import dotenv from "dotenv";
import mongoose from "mongoose";
// Excel export dependencies
import { writeFileSync } from "fs";
import path from "path";
import { Parser } from "json2csv";

dotenv.config();

const router = express.Router();

// MongoDB User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  contact: { type: String, unique: true },
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

// Create order (store registration in MongoDB, no orderId)
// router.post("/create-order", async (req, res) => {
//   const { name, email, contact } = req.body;

//   if (!name || !email || !contact) {
//     return res.status(400).json({ success: false, message: "All fields are required" });
//   }

//   try {
//     // Check for existing user
//     const existing = await User.findOne({ $or: [{ email }, { contact }] });
//     if (existing) {
//       return res.status(400).json({ success: false, message: "User already registered with this email or contact." });
//     }

//     // Store in MongoDB
//     const user = new User({ name, email, contact });
//     await user.save();

//     // Return success
//     res.json({ success: true, user: { name, email, contact } });
//   } catch (error) {
//     console.error("MongoDB error:", error);
//     res.status(500).json({ success: false, message: "Failed to register" });
//   }
// });

// Create order (store registration in MongoDB + send to Pabbly)
router.post("/create-order", async (req, res) => {
  const { name, email, contact } = req.body;

  if (!name || !email || !contact) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Check for existing user
    const existing = await User.findOne({ $or: [{ email }, { contact }] });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "User already registered with this email or contact.",
      });
    }

    // ✅ Store in MongoDB
    const user = new User({ name, email, contact });
    await user.save();

    // ✅ Send the same data to Pabbly webhook
    fetch(
      process.env.PABBLY_FORM_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          contact,
        }),
      }
    )
      .then(() => console.log("✅ Data sent to Pabbly successfully"))
      .catch((err) => console.error("❌ Failed to send data to Pabbly:", err));

    // ✅ Send success response back to frontend
    res.json({ success: true, user: { name, email, contact } });
  } catch (error) {
    console.error("MongoDB error:", error);
    res.status(500).json({ success: false, message: "Failed to register" });
  }
});

// Verify payment (generate token for redirect, no orderId)
router.post("/verify-payment", async (req, res) => {
  const { email, contact } = req.body;

  if (!email && !contact) {
    return res.status(400).json({ success: false, message: "Email or contact required" });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ $or: [{ email }, { contact }] });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Generate token for redirect
    const token = crypto.randomBytes(16).toString("hex");
    res.json({ success: true, redirectUrl: `/success?token=${token}` });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({ success: false, message: "Payment verification failed" });
  }
});


// GET endpoint to export all registered users as Excel (CSV)
// router.get("/export-registrations", async (req, res) => {
//   try {
//     const users = await User.find({}, { _id: 0, name: 1, email: 1, contact: 1 });
//     if (!users.length) return res.status(404).json({ success: false, message: "No registrations found" });

//     // Convert to CSV
//     const fields = ["name", "email", "contact"];
//     const parser = new Parser({ fields });
//     const csv = parser.parse(users);

//     // Set headers for download
//     res.header("Content-Type", "text/csv");
//     res.attachment("registrations.csv");
//     return res.send(csv);
//   } catch (error) {
//     console.error("Export error:", error);
//     res.status(500).json({ success: false, message: "Failed to export registrations" });
//   }
// });

export default router;
