import app from "./app.js";
import connectDB from "./db/index.js";

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});