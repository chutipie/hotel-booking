const mongoose = require("mongoose");
const Booking = require("./models/Booking"); // Ensure correct path

const seedBookings = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/yourDatabaseName");
    console.log("✅ Connected to MongoDB");

    // Ensure the database is empty before seeding
    await Booking.deleteMany({});
    console.log("⚡ Cleared existing bookings");

    const bookingData = {
      roomType: "Deluxe Suite",
      checkinDate: new Date("2025-04-05"),
      checkoutDate: new Date("2025-04-10"),
      guests: 2,
      nights: 5,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      paymentMethod: "Credit Card",
      specialRequests: "Late check-in requested",
    };

    console.log("🔍 Seeding booking data:", bookingData);

    await Booking.create(bookingData);
    console.log("✅ Database seeded successfully!");

    // Close the connection after seeding
    await mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    await mongoose.connection.close();
  }
};

// Run the function
seedBookings();
