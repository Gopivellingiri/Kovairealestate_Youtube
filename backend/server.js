import app from "./app.js";
import connectDatabase from "./db/Database.js";

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

// connect Db
connectDatabase();

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
