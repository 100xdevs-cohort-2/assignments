const { Admin } = require("../db");
const z = require("zod");

const zStr = z.string();

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = zStr.safeParse(req.headers.username);
  const password = zStr.safeParse(req.headers.password);

  const existingAdmin = await Admin.findOne({ username, password });
  if (!existingAdmin) return res.send(404, { message: "ADMIN not found" });
  next();
}

module.exports = adminMiddleware;
