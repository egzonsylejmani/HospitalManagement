var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
require("dotenv").config();
var cors = require("cors");

const routerDoctors = require("./routes/doctors.route");
const routerWards = require("./routes/wards.route");
const routerNurses = require("./routes/nurses.route");
const routermedicalTechnicians = require("./routes/medical-technicians.route");
const routerPatients = require("./routes/patients.route");
const routerLaboratories = require("./routes/laboratories.route");
const routerLaborants = require("./routes/laborants.route");
const routerRooms = require("./routes/Rooms.route");
const homePageContent = require("./routes/homepage.route");
const errorHandler = require("./middleware/error");
const routerSecurities = require("./routes/securities.route");
const faq = require("./routes/faq.route");
const routerambulanceDrivers = require("./routes/ambulance-drivers.route");
const routerTechnicians = require("./routes/technicians.route");
const routerBranches = require("./routes/branches.route");
const routerreceptionist = require("./routes/receptionist.route");
const routerjanitors = require("./routes/janitors.route");
const routermedicines = require("./routes/medicines.route");
const routerappointments = require("./routes/appointments.route");
const routerStaff = require("./routes/staff.route");
const routerbedManager = require("./routes/bed-Managers.route");

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err.message));

app.use("/api", routerDoctors);
app.use("/api", routerWards);
app.use("/api", routerNurses);
app.use("/api", routermedicalTechnicians);
app.use("/api", routerPatients);
app.use("/api", routerLaboratories);
app.use("/api", routerLaborants);
app.use("/api", routerRooms);
app.use("/api", homePageContent);
app.use("/api", routerSecurities);
app.use("/api", faq);
app.use("/api", routerambulanceDrivers);
app.use("/api", routerTechnicians);
app.use("/api", routerBranches);
app.use("/api", routerreceptionist);
app.use("/api", routerjanitors);
app.use("/api", routermedicines);
app.use("/api", routerappointments);
app.use("/api", routerStaff);
app.use("/api", routerbedManager);

//Error Handler should be last piece of middleware
app.use(errorHandler);
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));

module.exports = app;
