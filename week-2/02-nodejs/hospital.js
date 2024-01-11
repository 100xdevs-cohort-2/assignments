const express = require("express");
const app = express();

const patientsWaiting = [1, 2, 3, 4];

app.use(express.json());

//Count server requests/load
let count = 0;
function countRequest(req, res, next) {
  count = count + 1;
  console.log("No. of Requests: " + count);
  next();
}

//Insurance check Middleware
function insuranceCheck(req, res, next) {
  const insurance = req.body.insurance;
  if (insurance === undefined || insurance === null || insurance === false) {
    res.status(400).json({
      msg: "Youn have no insurance",
    });
  } else {
    next();
  }
}

//Blood Test Middleware
function bloodTest(req, res, next) {
  const blood = req.body.blood;
  if (blood === undefined || blood === null || blood === false) {
    res.status(400).json({
      msg: "Go for bloodTest",
    });
  } else {
    next();
  }
}

//BP check Middleware
function bpCheck(req, res, next) {
  const bp = req.body.bp;
  if (bp === undefined || bp === null || bp === false) {
    res.status(400).json({
      msg: "Go for BP Test",
    });
  } else {
    next();
  }
}

// Middleware to check if patient is in waiting room and remove them
function checkPatientInWaitingRoom(req, res, next) {
  const patientId = parseInt(req.params.patientId, 10);

  // Find the index of the patient in the waiting room
  const patientIdIndex = patientsWaiting.indexOf(patientId);
  console.log(patientIdIndex);
  if (patientIdIndex === -1) {
    res.status(404).json({
      msg: "Patient not found in waiting room",
    });
  } else {
    // Remove the patient from the waiting room
    patientsWaiting.splice(patientIdIndex, 1);
    next();
  }
}

//Get endpoint
app.get(
  "/hospital/:patientId",
  countRequest,
  checkPatientInWaitingRoom,
  insuranceCheck,
  bloodTest,
  bpCheck,
  function (req, res) {
    res.json({
      msg: "All Checks Done! You can go to Doctor's Cabin",
    });
  }
);

//global checks
app.use(function (err, req, res, next) {
  res.json({
    msg: "Error Occurred",
  });
});

//Port
app.listen(3000, function () {
  console.log("Listening at Port 3000");
});
