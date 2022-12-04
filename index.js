import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

//create a fn
// run a fn

(async () => {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("DB CONNECTED");

    app.on("error", (err) => {
      console.log("ERROR", err);
      throw err;
    });

    const OnListening = () => {
      console.log(`Listening on ${config.PORT}`);
    };

    app.listen(config.PORT, OnListening);
  } catch (err) {
    console.log("error:", err);
    throw err;
  }
})();
