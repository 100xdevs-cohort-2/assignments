function getCurrentTime() {
  const now = new Date();

  const hours12 = String(now.getHours() % 12 || 12).padStart(2, "0");
  const hours24 = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = +hours24 >= 12 ? "PM" : "AM";

  console.clear();
  console.log(`24-Hour Format: ${hours24}:${minutes}:${seconds}`);
  console.log(`12-Hour Format: ${hours12}:${minutes}:${seconds} ${ampm}`);
}

setInterval(getCurrentTime, 1000);
getCurrentTime();
