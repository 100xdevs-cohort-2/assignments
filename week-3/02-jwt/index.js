const jwt = require("jsonwebtoken");
const zod = require("zod");
const fs = require("fs");
const jwtPassword = "secret";

function signJwt(username, password) {
  const emailSchema = zod.string().email();
  const passwordSchema = zod.string().min(6);
  const isValidEmail = emailSchema.safeParse(username);
  const isValidPass = passwordSchema.safeParse(password);

  if (!isValidEmail.success || !isValidPass.success) return null;

  const privateKey = fs.readFileSync("private.key");
  return jwt.sign({ username: username, password: password }, privateKey, {
    algorithm: "RS256",
  });
}

function verifyJwt(token) {
  const publicKey = fs.readFileSync("public.key");

  let verifyJWTResult;

  try {
    verifyJWTResult = jwt.verify(token, publicKey);
    if (verifyJWTResult) {
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

function decodeJwt(token) {
  if (jwt.decode(token)) return true;
  return false;
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};

// console.log(signJwt("rahul3766@gmail.com", "SamratVanraj"));

// verifyJwt(
//   "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNhbXJhdFZhbnJhaiIsImlhdCI6MTcwMjk5MTI2MX0.S-wMuMzFK8sWs4vb_bXVufk1DDkw8yUo2syv_BGkBy0zYl49CaRDPOLEiWs9sp33y6vgv2zKB_NgYcMrLpVje9pUeyEfz0-tlSfkD44RaYKixgqmqFgUUbWO3AGwD_wkBYsZzqsPLw7oNpUgciTZEyGUTgiHdiV_IG-xak2s_Dyua92rBq5Pfh8kYCsiRarS-KUPhYLGslKuZaFnk7HxcJTQmEGgrHcsTSgx1bf8cn600sMPpJjGRNdIl9rgrxU67pm2lCj7dw3F2HieeD0ri4nQyk4nSNKM2IwJ7TmfDBnFBJOoFwONqlX69dyN35PQy4bMlUmYgZov8qj9ScLf2TttafuCH7-cGE9LhCj7iycdGlPbQc60EhxKTcn5rpFCjcGkgOL_GehO0n0Dhp3d6RN_GOuz8XKrqjZ_OiyQWddN3p8hfmYd3Jwr55qn5ou2EfKU7yDfSHWPExP57-b0eblodlCLmll6ufctrbTm_haq5VLV2OPkOUE6wXTzpHfX3RroyMYDeS4f85LBiuXME0CXglWI3qjzrIZrYzUUddSIzKzl-uHM0l9qd5lvzTcaAYDNBlQ6p-7LpVEj0X45GErN-Njnb-LjlOMRwVyIsaDLALlTnd4AHCWN-YJlYjBQFpvQuQsbQjpfZLwQTY1GiVMRSeOdLLKbwm1A9Cv888I"
// );
// // eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNhbXJhdFZhbnJhaiIsImlhdCI6MTcwMjk5MTI2MX0.S-wMuMzFK8sWs4vb_bXVufk1DDkw8yUo2syv_BGkBy0zYl49CaRDPOLEiWs9sp33y6vgv2zKB_NgYcMrLpVje9pUeyEfz0-tlSfkD44RaYKixgqmqFgUUbWO3AGwD_wkBYsZzqsPLw7oNpUgciTZEyGUTgiHdiV_IG-xak2s_Dyua92rBq5Pfh8kYCsiRarS-KUPhYLGslKuZaFnk7HxcJTQmEGgrHcsTSgx1bf8cn600sMPpJjGRNdIl9rgrxU67pm2lCj7dw3F2HieeD0ri4nQyk4nSNKM2IwJ7TmfDBnFBJOoFwONqlX69dyN35PQy4bMlUmYgZov8qj9ScLf2TttafuCH7-cGE9LhCj7iycdGlPbQc60EhxKTcn5rpFCjcGkgOL_GehO0n0Dhp3d6RN_GOuz8XKrqjZ_OiyQWddN3p8hfmYd3Jwr55qn5ou2EfKU7yDfSHWPExP57-b0eblodlCLmll6ufctrbTm_haq5VLV2OPkOUE6wXTzpHfX3RroyMYDeS4f85LBiuXME0CXglWI3qjzrIZrYzUUddSIzKzl-uHM0l9qd5lvzTcaAYDNBlQ6p-7LpVEj0X45GErN-Njnb-LjlOMRwVyIsaDLALlTnd4AHCWN-YJlYjBQFpvQuQsbQjpfZLwQTY1GiVMRSeOdLLKbwm1A9Cv888I
