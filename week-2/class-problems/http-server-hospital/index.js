const express = require("express");
const app = express();

app.use(express.json());

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  const healthyKidneys = johnKidneys.filter((kidney) => kidney.healthy);
  const numberOfHealthyKidneys = healthyKidneys.length;
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
    johnKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });

  res.send({
    message: "Kidney Added!",
  });
});

app.put("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const allHealthy = johnKidneys.every((kidney) => kidney.healthy);

  if (allHealthy) {
    return res.status(411).json({
      message: "All kidneys are already healthy",
    });
  }

  const updatedKidneys = johnKidneys.map((kidney) => ({
    ...kidney,
    healthy: true,
  }));

  users[0].kidneys = updatedKidneys;

  res.json({
    message: "All kidneys are now healthy.",
  });
});

app.delete("/", (req, res) => {
  const johnKidneys = users[0].kidneys;

  const healthyKidneys = johnKidneys.filter((kidney) => kidney.healthy);

  if (healthyKidneys.length === 0) {
    return res.status(411).json({ message: "No unhealthy kidneys!" });
  } else {
    users[0].kidneys = healthyKidneys;
    res.send({ message: "Deleted All Unhealthy Kidneys!" });
  }
});

app.listen(3000, () => {
  console.log("Hospital Running on port 3000");
});
